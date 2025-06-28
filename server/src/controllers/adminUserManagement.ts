import { Request, Response } from 'express';
import User from '../models/User.js';

/**
 * @desc    Get all users
 * @route   GET /api/admin/users
 * @access  Private (Admin only)
 */
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    // Get all users except admins
    const users = await User.find({ role: { $ne: 'admin' } }).select('-password');
    
    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while retrieving users'
    });
  }
};

/**
 * @desc    Toggle user enrollment access
 * @route   PUT /api/admin/users/:userId/toggle-enrollment
 * @access  Private (Admin only)
 */
export const toggleEnrollmentAccess = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;
    
    // Find the user
    const user = await User.findById(userId);
    
    if (!user) {
      res.status(404).json({
        success: false,
        message: 'User not found'
      });
      return;
    }
    
    // Toggle enrollment access
    user.enrollmentEnabled = !user.enrollmentEnabled;
    await user.save();
    
    res.status(200).json({
      success: true,
      data: {
        userId: user._id,
        name: user.name,
        email: user.email,
        enrollmentEnabled: user.enrollmentEnabled
      },
      message: `Enrollment access ${user.enrollmentEnabled ? 'enabled' : 'disabled'} for ${user.name}`
    });
  } catch (error) {
    console.error('Error toggling enrollment access:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating user'
    });
  }
};

/**
 * @desc    Get user enrollment status
 * @route   GET /api/admin/users/:userId/enrollment-status
 * @access  Private (Admin only)
 */
export const getUserEnrollmentStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;
    
    // Find the user
    const user = await User.findById(userId).select('name email enrollmentEnabled');
    
    if (!user) {
      res.status(404).json({
        success: false,
        message: 'User not found'
      });
      return;
    }
    
    res.status(200).json({
      success: true,
      data: {
        userId: user._id,
        name: user.name,
        email: user.email,
        enrollmentEnabled: user.enrollmentEnabled
      }
    });
  } catch (error) {
    console.error('Error getting enrollment status:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while retrieving user status'
    });
  }
}; 