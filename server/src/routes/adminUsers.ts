import express from 'express';
import { protect, authorize } from '../middleware/auth.js';
import { 
  getAllUsers, 
  toggleEnrollmentAccess,
  getUserEnrollmentStatus
} from '../controllers/adminUserManagement.js';

const router = express.Router();

// Protect all routes
router.use(protect);
// Only allow admin access
router.use(authorize('admin'));

// Routes
router.get('/', getAllUsers);
router.put('/:userId/toggle-enrollment', toggleEnrollmentAccess);
router.get('/:userId/enrollment-status', getUserEnrollmentStatus);

export default router; 