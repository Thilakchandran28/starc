import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import config from './config/index.js';
import connectDB from './utils/db.js';
import authRoutes from './routes/auth.js';
import courseRoutes from './routes/courses.js';
import mentorRoutes from './routes/mentors.js';
import profileRoutes from './routes/profile.js';
import scheduleRoutes from './routes/schedule.js';
import quizRoutes from './routes/quizRoutes.js';
import courseStructureRoutes from './routes/courseStructure.js';
import adminCourseRoutes from './routes/adminCourses.js';
import adminUserRoutes from './routes/adminUsers.js';
import { errorHandler } from './middleware/error.js';
import User from './models/User.js';

// Load env vars
dotenv.config();

// Connect to MongoDB
connectDB();

// Create a test user if it doesn't exist
const createTestUser = async () => {
  try {
    // Check if test user exists
    const testUser = await User.findOne({ email: 'test@example.com' });
    
    if (!testUser) {
      // Create test user
      await User.create({
        name: 'Test User',
        email: 'test@example.com',
        password: 'Password123',
        role: 'admin'
      });
      console.log('Test user created successfully');
    } else {
      // Update existing user to admin if not already
      if (testUser.role !== 'admin') {
        await User.findByIdAndUpdate(testUser._id, { role: 'admin' });
        console.log('Test user updated to admin role');
      } else {
        console.log('Test user already exists with admin role');
      }
    }
  } catch (error) {
    console.error('Error creating test user:', error);
  }
};

// Call the function to create test user
createTestUser();

// Initialize app
const app = express();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Enable CORS
app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = config.corsOrigin.split(',');
    
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) {
      return callback(null, true);
    }
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log(`Origin ${origin} not allowed by CORS policy. Allowed origins:`, allowedOrigins);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  console.log('Headers:', req.headers);
  next();
});

// Mount routers
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/mentors', mentorRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/schedule', scheduleRoutes);
app.use('/api/quizzes', quizRoutes);

// Mount course structure routes
app.use('/api/courses/:courseId/structure', courseStructureRoutes);

// Mount admin routes
app.use('/api/admin', adminCourseRoutes);
app.use('/api/admin/users', adminUserRoutes);

// Error handler
app.use(errorHandler);

// Basic route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 