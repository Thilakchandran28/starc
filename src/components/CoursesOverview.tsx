import React, { useState } from 'react';
import NavDashboardPage  from './AssesNav'
import CoursePageLayout from './ui/CoursePageLayout'
import SideSchedule from './Schedulebar';
import LearningModule from './LearningModule';
import LearningOverview from './LearningOverview';
type Course = {
  image: string;
  title: string;
  progress: number;
  duration: string;
  status: string;
};

const CoursesOverview: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const courses: Course[] = [
    { image: 'https://via.placeholder.com/150', title: 'AWS Solutions Architect', progress: 50, duration: '1 Month', status: '50%' },
    { image: 'https://via.placeholder.com/150', title: 'Azure Fundamentals', progress: 100, duration: '1 Month', status: 'Completed' },
    { image: 'https://via.placeholder.com/150', title: 'Google Cloud Basics', progress: 75, duration: '1 Month', status: '75%' },
    { image: 'https://via.placeholder.com/150', title: 'Google Cloud Basics', progress: 75, duration: '1 Month', status: '75%' },
    { image: 'https://via.placeholder.com/150', title: 'Google Cloud Basics', progress: 75, duration: '1 Month', status: '75%' },
    { image: 'https://via.placeholder.com/150', title: 'Google Cloud Basics', progress: 75, duration: '1 Month', status: '75%' },

  ];

  if (selectedCourse) {
    // Course Details View
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <button
          onClick={() => setSelectedCourse(null)}
          className="mb-4 text-purple-600 hover:underline"
        >
          ← Back to Courses
        </button>
        <NavDashboardPage/>
        <CoursePageLayout/>
      </div>
    );
  }

  // Course List View
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">My Courses ({courses.length})</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{height:"330px",width:"920px"}}>
        {courses.map((course, index) => (
          <div
            key={index}
            onClick={() => setSelectedCourse(course)}
            className="cursor-pointer bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <img src={course.image} alt={course.title} className="w-full h-32 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
              <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
            </div>
            <p className="text-sm text-gray-600 mb-2">{course.duration}</p>
            <p className="text-sm text-gray-600">{course.status}</p>
          </div>
        ))}
      </div>
      <SideSchedule/>
      <LearningOverview/>
     </div>
  );
};

export default CoursesOverview;
