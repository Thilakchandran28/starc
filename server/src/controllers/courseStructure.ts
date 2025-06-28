import { Request, Response } from 'express';
import CourseStructure from '../models/CourseStructure.js';
import Course from '../models/Course.js';
import aiContentService from '../services/aiContentService.js';

// @desc    Create course structure
// @route   POST /api/courses/:courseId/structure
// @access  Private (Admin)
export const createCourseStructure = async (req: Request, res: Response): Promise<void> => {
  try {
    const courseId = req.params.courseId;
    
    // Check if course exists
    const course = await Course.findById(courseId);
    if (!course) {
      res.status(404).json({
        success: false,
        message: 'Course not found'
      });
      return;
    }
    
    // Check if structure already exists
    const existingStructure = await CourseStructure.findOne({ course: courseId });
    if (existingStructure) {
      res.status(400).json({
        success: false,
        message: 'Course structure already exists for this course'
      });
      return;
    }
    
    // Create course structure
    const courseStructure = await CourseStructure.create({
      course: courseId,
      chapters: req.body.chapters || []
    });
    
    res.status(201).json({
      success: true,
      data: courseStructure
    });
  } catch (error) {
    console.error('Error creating course structure:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while creating course structure'
    });
  }
};

// @desc    Get course structure
// @route   GET /api/courses/:courseId/structure
// @access  Private
export const getCourseStructure = async (req: Request, res: Response): Promise<void> => {
  try {
    const courseId = req.params.courseId;
    
    // Find course structure
    const courseStructure = await CourseStructure.findOne({ course: courseId });
    if (!courseStructure) {
      res.status(404).json({
        success: false,
        message: 'Course structure not found'
      });
      return;
    }
    
    res.status(200).json({
      success: true,
      data: courseStructure
    });
  } catch (error) {
    console.error('Error getting course structure:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while retrieving course structure'
    });
  }
};

// @desc    Update course structure
// @route   PUT /api/courses/:courseId/structure
// @access  Private (Admin)
export const updateCourseStructure = async (req: Request, res: Response): Promise<void> => {
  try {
    const courseId = req.params.courseId;
    
    // Check if course exists
    const course = await Course.findById(courseId);
    if (!course) {
      res.status(404).json({
        success: false,
        message: 'Course not found'
      });
      return;
    }
    
    // Find and update course structure
    const courseStructure = await CourseStructure.findOneAndUpdate(
      { course: courseId },
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!courseStructure) {
      res.status(404).json({
        success: false,
        message: 'Course structure not found'
      });
      return;
    }
    
    res.status(200).json({
      success: true,
      data: courseStructure
    });
  } catch (error) {
    console.error('Error updating course structure:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating course structure'
    });
  }
};

// @desc    Add chapter to course structure
// @route   POST /api/courses/:courseId/structure/chapters
// @access  Private (Admin)
export const addChapter = async (req: Request, res: Response): Promise<void> => {
  try {
    const courseId = req.params.courseId;
    
    // Find course structure
    const courseStructure = await CourseStructure.findOne({ course: courseId });
    if (!courseStructure) {
      res.status(404).json({
        success: false,
        message: 'Course structure not found'
      });
      return;
    }
    
    // Add chapter
    courseStructure.chapters.push(req.body);
    await courseStructure.save();
    
    res.status(201).json({
      success: true,
      data: courseStructure.chapters[courseStructure.chapters.length - 1]
    });
  } catch (error) {
    console.error('Error adding chapter:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while adding chapter'
    });
  }
};

// @desc    Add subchapter to a chapter
// @route   POST /api/courses/:courseId/structure/chapters/:chapterId/subchapters
// @access  Private (Admin)
export const addSubchapter = async (req: Request, res: Response): Promise<void> => {
  try {
    const courseId = req.params.courseId;
    const chapterId = req.params.chapterId;
    
    // Find course structure
    const courseStructure = await CourseStructure.findOne({ course: courseId });
    if (!courseStructure) {
      res.status(404).json({
        success: false,
        message: 'Course structure not found'
      });
      return;
    }
    
    // Find chapter by index or _id
    const chapterIndex = courseStructure.chapters.findIndex(
      chapter => chapter._id.toString() === chapterId
    );
    
    if (chapterIndex === -1) {
      res.status(404).json({
        success: false,
        message: 'Chapter not found'
      });
      return;
    }
    
    // Add subchapter
    courseStructure.chapters[chapterIndex].subchapters.push(req.body);
    await courseStructure.save();
    
    res.status(201).json({
      success: true,
      data: courseStructure.chapters[chapterIndex].subchapters[
        courseStructure.chapters[chapterIndex].subchapters.length - 1
      ]
    });
  } catch (error) {
    console.error('Error adding subchapter:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while adding subchapter'
    });
  }
};

// @desc    Add section to a subchapter
// @route   POST /api/courses/:courseId/structure/chapters/:chapterId/subchapters/:subchapterId/sections
// @access  Private (Admin)
export const addSection = async (req: Request, res: Response): Promise<void> => {
  try {
    const courseId = req.params.courseId;
    const chapterId = req.params.chapterId;
    const subchapterId = req.params.subchapterId;
    
    // Find course structure
    const courseStructure = await CourseStructure.findOne({ course: courseId });
    if (!courseStructure) {
      res.status(404).json({
        success: false,
        message: 'Course structure not found'
      });
      return;
    }
    
    // Find chapter by index or _id
    const chapterIndex = courseStructure.chapters.findIndex(
      chapter => chapter._id.toString() === chapterId
    );
    
    if (chapterIndex === -1) {
      res.status(404).json({
        success: false,
        message: 'Chapter not found'
      });
      return;
    }
    
    // Find subchapter by index or _id
    const subchapterIndex = courseStructure.chapters[chapterIndex].subchapters.findIndex(
      subchapter => subchapter._id.toString() === subchapterId
    );
    
    if (subchapterIndex === -1) {
      res.status(404).json({
        success: false,
        message: 'Subchapter not found'
      });
      return;
    }
    
    // Add section
    courseStructure.chapters[chapterIndex].subchapters[subchapterIndex].sections.push(req.body);
    await courseStructure.save();
    
    res.status(201).json({
      success: true,
      data: courseStructure.chapters[chapterIndex].subchapters[subchapterIndex].sections[
        courseStructure.chapters[chapterIndex].subchapters[subchapterIndex].sections.length - 1
      ]
    });
  } catch (error) {
    console.error('Error adding section:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while adding section'
    });
  }
};

// @desc    Generate content for a section
// @route   POST /api/courses/:courseId/structure/chapters/:chapterId/subchapters/:subchapterId/sections/:sectionId/generate
// @access  Private
export const generateSectionContent = async (req: Request, res: Response): Promise<void> => {
  try {
    const courseId = req.params.courseId;
    const chapterId = req.params.chapterId;
    const subchapterId = req.params.subchapterId;
    const sectionId = req.params.sectionId;
    
    // Find course structure
    const courseStructure = await CourseStructure.findOne({ course: courseId });
    if (!courseStructure) {
      res.status(404).json({
        success: false,
        message: 'Course structure not found'
      });
      return;
    }
    
    // Find chapter by index or _id
    const chapterIndex = courseStructure.chapters.findIndex(
      chapter => chapter._id.toString() === chapterId
    );
    
    if (chapterIndex === -1) {
      res.status(404).json({
        success: false,
        message: 'Chapter not found'
      });
      return;
    }
    
    // Find subchapter by index or _id
    const subchapterIndex = courseStructure.chapters[chapterIndex].subchapters.findIndex(
      subchapter => subchapter._id.toString() === subchapterId
    );
    
    if (subchapterIndex === -1) {
      res.status(404).json({
        success: false,
        message: 'Subchapter not found'
      });
      return;
    }
    
    // Find section by index or _id
    const sectionIndex = courseStructure.chapters[chapterIndex].subchapters[subchapterIndex].sections.findIndex(
      section => section._id.toString() === sectionId
    );
    
    if (sectionIndex === -1) {
      res.status(404).json({
        success: false,
        message: 'Section not found'
      });
      return;
    }
    
    const section = courseStructure.chapters[chapterIndex].subchapters[subchapterIndex].sections[sectionIndex];
    
    // Get course details
    const course = await Course.findById(courseId);
    if (!course) {
      res.status(404).json({
        success: false,
        message: 'Course not found'
      });
      return;
    }
    
    // Generate content
    const generatedContent = await aiContentService.generateSectionContent({
      courseTitle: course.title,
      chapterTitle: courseStructure.chapters[chapterIndex].title,
      subchapterTitle: courseStructure.chapters[chapterIndex].subchapters[subchapterIndex].title,
      sectionTitle: section.title,
      learningObjectives: section.learningObjectives,
      keywords: section.keywords,
      level: course.level
    });
    
    // Update section with generated content
    section.generatedContent = generatedContent;
    section.aiGenerated = true;
    section.lastGenerated = new Date();
    await courseStructure.save();
    
    res.status(200).json({
      success: true,
      data: {
        sectionId: section._id,
        generatedContent: section.generatedContent
      }
    });
  } catch (error) {
    console.error('Error generating content:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while generating content'
    });
  }
}; 