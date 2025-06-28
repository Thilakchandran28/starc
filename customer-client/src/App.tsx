import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import Index from "./pages/Index";
import Course from "./pages/Course";
import Book from "./pages/Book";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import SchedulePage from "./pages/SchedulePage";
import SettingsPage from "./pages/SettingsPage";
import WishlistPage from "./pages/WishlistPage";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import BooksPage from "./pages/BooksPage";
import LoginPage from "./pages/LoginPage";

// Components
import ScrollToTop from "./components/ScrollTop";
import CardDetail from "./components/CardDetail";
import LearningModule from "./components/LearningModule";
import LearningOverview from "./components/LearningOverview";
import SubmissionSuccess from "./components/SubmissionSuccess";
import ProtectedRoute from "./components/ProtectedRoute";
import QuizAttempt from './components/QuizAttempt';

// Admin pages
import AdminCoursePage from './pages/AdminCoursePage';
import AdminCourseStructurePage from './pages/AdminCourseStructurePage';
import AdminCourseDetails from './pages/AdminCourseDetails';
import AdminUserManagementPage from './pages/AdminUserManagementPage';

// Services
import authService from "./services/authService";

const queryClient = new QueryClient();

const App: React.FC = () => {
  // Admin Route Component (redirects to home if not admin)
  const AdminRoute = ({ children }: { children: React.ReactNode }) => {
    const isAuthenticated = authService.isAuthenticated();
    return isAuthenticated ? children : <Navigate to="/LoginPage" />;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/course" element={<Course />} />
            <Route path="/book" element={<Book />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/learning/overview" element={<LearningOverview />} />
            <Route path="/course/:id" element={<ProtectedRoute><CardDetail /></ProtectedRoute>} />
            <Route path="/course/:id/learn" element={<ProtectedRoute><LearningModule /></ProtectedRoute>} />
            <Route path="/course/:id/learning" element={<LearningModule />} />
            <Route path="/course/:courseId/quiz/:quizId" element={<QuizAttempt />} />

            {/* Success Routes */}
            <Route path="/submit/success" element={<SubmissionSuccess />} />
            
            {/* Admin Routes */}
            <Route path="/admin/courses" element={<AdminRoute><AdminCoursePage /></AdminRoute>} />
            <Route path="/admin/courses/:courseId" element={<AdminRoute><AdminCourseDetails /></AdminRoute>} />
            <Route path="/admin/courses/:courseId/structure" element={<AdminRoute><AdminCourseStructurePage /></AdminRoute>} />
            <Route path="/admin/users" element={<AdminRoute><AdminUserManagementPage /></AdminRoute>} />
            
            {/* Catch-all Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
