import axios from 'axios';
import { handleApiError } from '@/utils/apiUtils';

const API_URL = import.meta.env.VITE_API_URL;

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  enrollmentEnabled: boolean;
  createdAt: string;
  updatedAt: string;
  location?: string;
  dateOfBirth?: string;
  phone?: string;
  avatar?: string;
  username?: string;
}

/**
 * Get all users (admin only)
 */
export const getAllUsers = async (): Promise<User[]> => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No authentication token found');

    const response = await axios.get(`${API_URL}/api/admin/users`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response.data.data;
  } catch (error) {
    return handleApiError(error, 'Error fetching users');
  }
};

/**
 * Toggle user enrollment access (admin only)
 */
export const toggleUserEnrollmentAccess = async (userId: string): Promise<User> => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No authentication token found');

    const response = await axios.put(
      `${API_URL}/api/admin/users/${userId}/toggle-enrollment`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    return response.data.data;
  } catch (error) {
    throw handleApiError(error, 'Error toggling user enrollment access');
  }
};

/**
 * Get user enrollment status (admin only)
 */
export const getUserEnrollmentStatus = async (userId: string): Promise<User> => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No authentication token found');

    const response = await axios.get(
      `${API_URL}/api/admin/users/${userId}/enrollment-status`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    return response.data.data;
  } catch (error) {
    throw handleApiError(error, 'Error getting user enrollment status');
  }
};

export default {
  getAllUsers,
  toggleUserEnrollmentAccess,
  getUserEnrollmentStatus
}; 