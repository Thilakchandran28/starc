import React from 'react';
import ProfileSidebar from '../components/ProfileSidebar';
import ProfileTopNavbar from '../components/ProfileTopNavbar';
import SettingsOverview from '../components/SettingsOverview';

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <ProfileSidebar />
      <div className="flex-grow p-6">
        <ProfileTopNavbar />
        <SettingsOverview />
      </div>
    </div>
  );
};

export default SettingsPage;