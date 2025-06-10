import React from 'react';
import ProfileSidebar from '../components/ProfileSidebar';
import ProfileTopNavbar from '../components/ProfileTopNavbar';
import CoursesOverview from '../components/CoursesOverview';

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <ProfileSidebar />
      <div className="flex-grow p-6">
        <ProfileTopNavbar />
        <CoursesOverview />
      </div>
    </div>
  );
};

export default CoursesPage;