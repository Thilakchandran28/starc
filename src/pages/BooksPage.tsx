import React from 'react';
import ProfileSidebar from '../components/ProfileSidebar';
import ProfileTopNavbar from '../components/ProfileTopNavbar';
import BooksOverview from '../components/BooksOverview';

const BooksPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <ProfileSidebar />
      <div className="flex-grow p-6">
        <ProfileTopNavbar />
        <BooksOverview />
      </div>
    </div>
  );
};

export default BooksPage;