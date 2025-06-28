import { Request, Response } from 'express';
import User from '../models/User.js';
import Course from '../models/Course.js';
import mongoose from 'mongoose';
import UserCourse from '../models/UserCourse.js';

// @desc    Update user profile
// @route   PUT /api/auth/profile
// @access  Private
export const updateProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, location, dateOfBirth, phone, avatar, username } = req.body;

    // Check if req.user exists before accessing its properties
    if (!req.user) {
      res.status(401).json({
        success: false,
        message: 'User not authenticated'
      });
      return;
    }

    // Find user by ID from auth middleware
    let user = await User.findById(req.user.id);

    if (!user) {
      res.status(404).json({
        success: false,
        message: 'User not found'
      });
      return;
    }

    // Update fields
    if (name) user.name = name;
    if (location) user.location = location;
    if (dateOfBirth) user.dateOfBirth = dateOfBirth;
    if (phone) user.phone = phone;
    if (avatar) user.avatar = avatar;
    
    // If email is being updated, check if it's already in use
    if (email && email !== user.email) {
      const emailExists = await User.findOne({ email });
      if (emailExists) {
        res.status(400).json({
          success: false,
          message: 'Email already in use'
        });
        return;
      }
      user.email = email;
    }
    
    // If username is being updated, check if it's already in use
    if (username && username !== user.username) {
      const usernameExists = await User.findOne({ username });
      if (usernameExists) {
        res.status(400).json({
          success: false,
          message: 'Username already in use'
        });
        return;
      }
      user.username = username;
    }

    await user.save();

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating profile'
    });
  }
};

// @desc    Get user's activity and progress
// @route   GET /api/profile/activity
// @access  Private
export const getUserActivity = async (req: Request, res: Response): Promise<void> => {
  try {
    // Check if req.user exists before accessing its properties
    if (!req.user) {
      res.status(401).json({
        success: false,
        message: 'User not authenticated'
      });
      return;
    }

    const userId = req.user.id;

    // Get user enrollments
    const userCourses = await UserCourse.find({ user: userId });
    
    // Calculate total courses enrolled
    const coursesEnrolled = userCourses.length;
    
    // Calculate completed certificates (completed courses)
    const certificatesEarned = userCourses.filter(course => course.completed).length;
    
    // Calculate average progress across all courses
    let totalProgress = 0;
    userCourses.forEach(course => {
      totalProgress += course.progress;
    });
    const averageProgress = coursesEnrolled > 0 ? Math.round(totalProgress / coursesEnrolled) : 0;
    
    // Calculate learning hours based on lastAccessDate and startDate
    // Sum up time spent across all courses (in hours)
    let totalLearningHours = 0;
    userCourses.forEach(course => {
      // For simplicity, we'll estimate learning hours based on progress
      // A more accurate approach would be to track actual session times
      // This approach assumes a typical course takes about 40 hours to complete
      const estimatedCourseHours = 40;
      const progressPercentage = course.progress / 100;
      totalLearningHours += estimatedCourseHours * progressPercentage;
    });
    
    // Round to nearest integer
    const learningHours = Math.round(totalLearningHours);
    
    // Get recent activity (last 5 updates to courses)
    const recentUserCourses = await UserCourse.find({ user: userId })
      .sort({ lastAccessDate: -1 })
      .limit(5)
      .populate({
        path: 'course',
        select: 'title'
      });
    
    const recentActivity = recentUserCourses.map(userCourse => {
      const course = userCourse.course as any;
      return {
        type: userCourse.completed ? 'certificate_earned' : 'course_progress',
        courseId: course._id.toString(),
        courseName: course.title,
        progress: userCourse.progress,
        timestamp: userCourse.lastAccessDate
      };
    });

    const userActivity = {
      learningHours,
      certificatesEarned,
      coursesEnrolled,
      progress: averageProgress,
      recentActivity
    };

    res.status(200).json({
      success: true,
      data: userActivity
    });
  } catch (error) {
    console.error('Error getting user activity:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while getting user activity'
    });
  }
};

// @desc    Get enrolled courses for a user
// @route   GET /api/courses/enrolled
// @access  Private
export const getEnrolledCourses = async (req: Request, res: Response): Promise<void> => {
  try {
    // Check if req.user exists before accessing its properties
    if (!req.user) {
      res.status(401).json({
        success: false,
        message: 'User not authenticated'
      });
      return;
    }

    // Get the current user from req.user (added by auth middleware)
    const userId = req.user.id;

    // Find all user course enrollments
    const userCourses = await UserCourse.find({ user: userId })
      .sort({ lastAccessDate: -1 }) // Sort by last accessed (most recent first)
      .populate({
        path: 'course',
        select: 'title description thumbnail duration level category instructor',
        populate: {
          path: 'instructor',
          select: 'name'
        }
      });

    if (!userCourses || userCourses.length === 0) {
      res.status(200).json({
        success: true,
        count: 0,
        data: []
      });
      return;
    }

    // Format the courses data to match the frontend requirements
    const formattedCourses = userCourses
      .filter(userCourse => userCourse.course) // Filter out any null course references
      .map(userCourse => {
        const course = userCourse.course as any;
        
        // Skip if course is null or undefined
        if (!course) {
          return null;
        }
        
        // Format duration in months/weeks/days based on the minutes
        let durationText = '1 Month'; // Default
        if (course.duration) {
          const hours = Math.floor(course.duration / 60);
          if (hours > 40) {
            durationText = `${Math.ceil(hours / 40)} Months`;
          } else if (hours > 10) {
            durationText = `${Math.ceil(hours / 10)} Weeks`;
          } else {
            durationText = `${hours} Hours`;
          }
        }
        
        // Format status based on completion/progress
        const status = userCourse.completed ? 'Completed' : `${userCourse.progress}%`;
        
        // Construct the image path
        // In a real app, this would be an actual URL from the database
        // For this implementation, we'll use a pattern matching course IDs to images
        const courseId = course._id.toString();
        const imageNumber = (parseInt(courseId.substring(courseId.length - 2), 16) % 6) + 1;
        const imagePath = `/src/Assets/icons/course${imageNumber}.svg`;
        
        return {
          id: courseId,
          title: course.title,
          description: course.description,
          duration: durationText,
          progress: userCourse.progress,
          status: status,
          image: imagePath,
          instructor: course.instructor?.name || 'Unknown Instructor',
          level: course.level,
          category: course.category,
          lastAccessed: userCourse.lastAccessDate,
          currentLesson: userCourse.currentLesson || 0
        };
      })
      .filter(Boolean); // Remove any null entries from the map operation

    res.status(200).json({
      success: true,
      count: formattedCourses.length,
      data: formattedCourses
    });
  } catch (error) {
    console.error('Error getting enrolled courses:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while getting enrolled courses'
    });
  }
}; 