import express from 'express';
import { updateProfile, getUserActivity } from '../controllers/profile.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Protect all routes
router.use(protect);

// Profile routes
router.route('/').put(updateProfile);
router.route('/activity').get(getUserActivity);

export default router; 