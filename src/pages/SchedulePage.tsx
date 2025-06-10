import React from 'react';
import ProfileSidebar from '../components/ProfileSidebar';
import ProfileTopNavbar from '../components/ProfileTopNavbar';
import ScheduleOverview from '../components/ScheduleOverview';

const SchedulePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <ProfileSidebar />
      <div className="flex-grow p-6">
        <ProfileTopNavbar />
        <ScheduleOverview />
      </div>
    </div>
  );
};

export default SchedulePage;