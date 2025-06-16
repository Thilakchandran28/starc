import React, { useState } from 'react';
import NavDashboardPage from './AssesNav';
import CoursePageLayout from './ui/CoursePageLayout';
import SideSchedule from './Schedulebar';
import LearningOverview from './LearningOverview';
import CourseDashboardPage from './CompletedCourse';
import OngoingCourseDashboardPage from './OngoingCourse';
import DashboardCard from './DashboardCard';

type Course = {
  id: string;
  image: string;
  title: string;
  progress: number;
  duration: string;
  status: string;
};

interface childProps {
  sendMessage: (course:Course)=>void;
}

const CoursesOverview: React.FC <childProps> = ({sendMessage}) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const courses: Course[] = [
    { id: '1', image: 'https://via.placeholder.com/150', title: 'AWS Solutions Architect', progress: 50, duration: '1 Month', status: '50%' },
    { id: '2', image: 'https://via.placeholder.com/150', title: 'Azure Fundamentals', progress: 100, duration: '1 Month', status: 'Completed' },
    { id: '3', image: 'https://via.placeholder.com/150', title: 'Google Cloud Basics', progress: 75, duration: '1 Month', status: '75%' },
    { id: '4', image: 'https://via.placeholder.com/150', title: 'Google Cloud Advanced', progress: 75, duration: '1 Month', status: '75%' },
    { id: '5', image: 'https://via.placeholder.com/150', title: 'DevOps Essentials', progress: 75, duration: '1 Month', status: '75%' },
    { id: '6', image: 'https://via.placeholder.com/150', title: 'Kubernetes Basics', progress: 75, duration: '1 Month', status: '75%' },
  ];

  if (selectedCourse) {
    if (selectedCourse.status === 'Completed') {
      return <CourseDashboardPage course={selectedCourse} onBack={() => setSelectedCourse(null)} />;
    } else {
      return <OngoingCourseDashboardPage course={selectedCourse} onBack={() => setSelectedCourse(null)} />;
    }
  }

  const handleSelectedCourse = (course: Course) => {
    setSelectedCourse(course);
    sendMessage(course);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 w-full pr-8">
      <h1 className="text-2xl font-bold mb-6">My Courses ({courses.length})</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => handleSelectedCourse(course)}
            className="cursor-pointer"
          >
            <DashboardCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesOverview;