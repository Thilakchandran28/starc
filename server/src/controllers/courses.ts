import { Request, Response } from 'express';
import Course from '../models/Course.js';
import UserCourse from '../models/UserCourse.js';
import User from '../models/User.js';

// @desc    Get all courses
// @route   GET /api/courses
// @access  Public
export const getCourses = async (req: Request, res: Response): Promise<void> => {
  try {
    const query: any = { ...req.query };
    
    // Fields to exclude from filtering
    const removeFields = ['select', 'sort', 'page', 'limit', 'search'];
    removeFields.forEach(param => delete query[param]);
    
    // Search functionality
    if (req.query.search) {
      query.$text = { $search: req.query.search as string };
    }
    
    // Filter for category and level
    if (req.query.category) query.category = req.query.category;
    if (req.query.level) query.level = req.query.level;
    
    // Find courses
    let coursesQuery = Course.find(query) as any;
    
    // Select fields
    if (req.query.select) {
      const fields = (req.query.select as string).split(',').join(' ');
      coursesQuery = coursesQuery.select(fields);
    }
    
    // Sort
    if (req.query.sort) {
      const sortBy = (req.query.sort as string).split(',').join(' ');
      coursesQuery = coursesQuery.sort(sortBy);
    } else {
      coursesQuery = coursesQuery.sort('-createdAt');
    }
    
    // Pagination
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Course.countDocuments(query);
    
    coursesQuery = coursesQuery.skip(startIndex).limit(limit);
    
    // Execute query
    const courses = await coursesQuery.exec();
    
    // Pagination result
    const pagination: any = {};
    
    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit
      };
    }
    
    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit
      };
    }
    
    res.status(200).json({
      success: true,
      count: courses.length,
      pagination,
      data: courses
    });
  } catch (error) {
    console.error('Error getting courses:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while retrieving courses'
    });
  }
};

// @desc    Get single course
// @route   GET /api/courses/:id
// @access  Public
export const getCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const course = await Course.findById(req.params.id).populate({
      path: 'reviews.user',
      select: 'name'
    });
    
    if (!course) {
      res.status(404).json({
        success: false,
        message: 'Course not found'
      });
      return;
    }
    
    res.status(200).json({
      success: true,
      data: course
    });
  } catch (error) {
    console.error('Error getting course:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while retrieving course'
    });
  }
};

// @desc    Create new course
// @route   POST /api/courses
// @access  Private (Admin only)
export const createCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    // Add user to request body as instructor
    req.body.instructor = req.user?.id;
    
    const course = await Course.create(req.body);
    
    res.status(201).json({
      success: true,
      data: course
    });
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while creating course'
    });
  }
};

// @desc    Update course
// @route   PUT /api/courses/:id
// @access  Private (Admin only)
export const updateCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    let course = await Course.findById(req.params.id);
    
    if (!course) {
      res.status(404).json({
        success: false,
        message: 'Course not found'
      });
      return;
    }
    
    // Make sure user is course instructor or admin
    if (course.instructor.toString() !== req.user?.id && req.user?.role !== 'admin') {
      res.status(401).json({
        success: false,
        message: 'Not authorized to update this course'
      });
      return;
    }
    
    course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    res.status(200).json({
      success: true,
      data: course
    });
  } catch (error) {
    console.error('Error updating course:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating course'
    });
  }
};

// @desc    Delete course
// @route   DELETE /api/courses/:id
// @access  Private (Admin only)
export const deleteCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const course = await Course.findById(req.params.id);
    
    if (!course) {
      res.status(404).json({
        success: false,
        message: 'Course not found'
      });
      return;
    }
    
    // Make sure user is course instructor or admin
    if (course.instructor.toString() !== req.user?.id && req.user?.role !== 'admin') {
      res.status(401).json({
        success: false,
        message: 'Not authorized to delete this course'
      });
      return;
    }
    
    await course.deleteOne();
    
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    console.error('Error deleting course:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while deleting course'
    });
  }
};

// @desc    Enroll in a course
// @route   PUT /api/courses/:id/enroll
// @access  Private
export const enrollCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    // Check if req.user exists before accessing its properties
    if (!req.user) {
      res.status(401).json({
        success: false,
        message: 'User not authenticated'
      });
      return;
    }

    // Check if user has enrollment access
    const user = await User.findById(req.user.id);
    if (!user) {
      res.status(404).json({
        success: false,
        message: 'User not found'
      });
      return;
    }

    // If user is not an admin and doesn't have enrollment access, deny enrollment
    if (req.user.role !== 'admin' && !user.enrollmentEnabled) {
      res.status(403).json({
        success: false,
        message: 'You do not have permission to enroll in courses. Please contact an administrator.'
      });
      return;
    }

    const course = await Course.findById(req.params.id);
    
    if (!course) {
      res.status(404).json({
        success: false,
        message: 'Course not found'
      });
      return;
    }

    // Check if user is already enrolled in the course
    const existingEnrollment = await UserCourse.findOne({
      user: req.user.id,
      course: course._id
    });
    
    if (existingEnrollment) {
      res.status(400).json({
        success: false,
        message: 'User already enrolled in this course'
      });
      return;
    }
    
    // Create a new user course enrollment
    const userCourse = await UserCourse.create({
      user: req.user.id,
      course: course._id,
      progress: 0,
      completed: false,
      startDate: new Date(),
      lastAccessDate: new Date(),
      currentLesson: 0
    });
    
    // Also add user to the course's enrolledUsers array for backward compatibility
    // and easier course-centric queries
    if (!course.enrolledUsers.includes(req.user.id)) {
      course.enrolledUsers.push(req.user.id);
      await course.save();
    }
    
    // Return the enrollment information
    res.status(200).json({
      success: true,
      data: {
        enrollment: userCourse,
        course: {
          id: course._id,
          title: course.title,
          description: course.description,
          duration: course.duration,
          level: course.level,
          category: course.category
        }
      }
    });
  } catch (error) {
    console.error('Error enrolling in course:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while enrolling in course'
    });
  }
};

// @desc    Add course review
// @route   POST /api/courses/:id/reviews
// @access  Private
export const addCourseReview = async (req: Request, res: Response): Promise<void> => {
  try {
    // Check if req.user exists before accessing its properties
    if (!req.user) {
      res.status(401).json({
        success: false,
        message: 'User not authenticated'
      });
      return;
    }

    const { rating, comment } = req.body;
    
    const course = await Course.findById(req.params.id);
    
    if (!course) {
      res.status(404).json({
        success: false,
        message: 'Course not found'
      });
      return;
    }
    
    // Check if user is enrolled in the course
    const isEnrolled = course.enrolledUsers.some(
      (user) => user.toString() === req.user.id
    );
    
    if (!isEnrolled && req.user.role !== 'admin') {
      res.status(400).json({
        success: false,
        message: 'You must be enrolled in the course to leave a review'
      });
      return;
    }
    
    // Check if user already submitted a review
    const alreadyReviewed = course.reviews.some(
      (review) => review.user.toString() === req.user.id
    );
    
    if (alreadyReviewed) {
      res.status(400).json({
        success: false,
        message: 'You have already reviewed this course'
      });
      return;
    }
    
    const review = {
      user: req.user.id,
      rating: Number(rating),
      comment,
      date: new Date()
    };
    
    course.reviews.push(review);
    
    // Calculate average rating
    const totalRating = course.reviews.reduce((acc, review) => acc + review.rating, 0);
    course.rating = totalRating / course.reviews.length;
    
    await course.save();
    
    res.status(201).json({
      success: true,
      data: course
    });
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while adding review'
    });
  }
};

// @desc    Update user's course progress
// @route   PUT /api/courses/:id/progress
// @access  Private
export const updateCourseProgress = async (req: Request, res: Response): Promise<void> => {
  try {
    // Check if req.user exists before accessing its properties
    if (!req.user) {
      res.status(401).json({
        success: false,
        message: 'User not authenticated'
      });
      return;
    }

    const { progress, currentLesson, completed } = req.body;
    
    // Validate progress value
    if (progress !== undefined && (progress < 0 || progress > 100)) {
      res.status(400).json({
        success: false,
        message: 'Progress must be between 0 and 100'
      });
      return;
    }
    
    // Find the user's enrollment for this course
    const userCourse = await UserCourse.findOne({
      user: req.user.id,
      course: req.params.id
    });
    
    if (!userCourse) {
      res.status(404).json({
        success: false,
        message: 'Enrollment not found. User is not enrolled in this course.'
      });
      return;
    }
    
    // Update the fields
    if (progress !== undefined) {
      userCourse.progress = progress;
    }
    
    if (currentLesson !== undefined) {
      userCourse.currentLesson = currentLesson;
    }
    
    if (completed !== undefined) {
      userCourse.completed = completed;
      
      // If marked as completed, set completion date
      if (completed) {
        userCourse.completionDate = new Date();
        // Ensure progress is 100% when completed
        userCourse.progress = 100;
      } else {
        // If unmarked as completed, remove completion date
        userCourse.completionDate = undefined;
      }
    }
    
    // Always update the last access date
    userCourse.lastAccessDate = new Date();
    
    // Save the changes
    await userCourse.save();
    
    res.status(200).json({
      success: true,
      data: userCourse
    });
  } catch (error) {
    console.error('Error updating course progress:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating course progress'
    });
  }
}; 