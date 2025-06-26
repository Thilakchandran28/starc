import express from 'express';
import { 
  getCourses, 
  getCourse, 
  createCourse, 
  updateCourse, 
  deleteCourse, 
  enrollCourse,
  addCourseReview,
  updateCourseProgress
} from '../controllers/courses.js';
import { getEnrolledCourses } from '../controllers/profile.js';
import { getQuizzesByCourse, createQuiz, getUserQuizAttemptsByCourse } from '../controllers/quiz.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// Course routes
router.route('/')
  .get(getCourses)
  .post(protect, authorize('admin'), createCourse);

router.route('/enrolled')
  .get(protect, getEnrolledCourses);

router.route('/:id')
  .get(getCourse)
  .put(protect, authorize('admin'), updateCourse)
  .delete(protect, authorize('admin'), deleteCourse);

router.route('/:id/enroll')
  .put(protect, enrollCourse);

router.route('/:id/progress')
  .put(protect, updateCourseProgress);

router.route('/:id/reviews')
  .post(protect, addCourseReview);

// Quiz routes for a course
router.route('/:courseId/quizzes')
  .get(protect, getQuizzesByCourse)
  .post(protect, authorize('admin'), createQuiz);

// Quiz attempts for a course
router.route('/:courseId/quiz-attempts')
  .get(protect, getUserQuizAttemptsByCourse);

// Note: Additional quiz-related routes are defined in quizRoutes

export default router; 