import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Course from "./pages/Course";
import Book from "./pages/Book";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import CoursesPage from "./pages/CoursesPage";
import BooksPage from "./pages/BooksPage";
import SchedulePage from "./pages/SchedulePage";
import SettingsPage from "./pages/SettingsPage";
import LearningModule from "./components/LearningModule";
import LearningOverview from "./components/LearningOverview";
import SubmissionSuccess from "./components/SubmissionSuccess";
import CompletedCourse from "./components/CompletedCourse"
import ForgotPassword from "./pages/ForgotPassword";
import PwdRstSentpage from "./pages/PwdRstSentpage";
import Notifications from "./pages/Notifications";
import WishlistPage from "./pages/WishlistPage";
import ScrollToTop from "./components/ScrollTop";

import CardDetail from "./components/CardDetail";

const queryClient = new QueryClient();

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Public Route Component (redirects to home if authenticated)
const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return !isAuthenticated ? children : <Navigate to="/" />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/course" element={<Course />} />
          <Route path="/book" element={<BooksPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
          <Route path="/Password-Reset" element={<PublicRoute><PwdRstSentpage /></PublicRoute>} />
          <Route path="/notifications" element={<Notifications />} />


          {/* Protected Routes */}
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/courses" element={<ProtectedRoute><CoursesPage /></ProtectedRoute>} />
          <Route path="/completedCourses" element={<ProtectedRoute><CompletedCourse /></ProtectedRoute>} />

          {/* <Route path="/books" element={<ProtectedRoute><BooksPage /></ProtectedRoute>} /> */}
          <Route path="/schedule" element={<ProtectedRoute><SchedulePage /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
          <Route path="/submissionSuccess" element ={<SubmissionSuccess/>}/>
          <Route path="/carddetail" element ={<CardDetail/>}/>

          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />

          <Route path='/learningoverview' element={<LearningOverview />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
