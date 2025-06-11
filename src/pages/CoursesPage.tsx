// CoursesPage.tsx
import React, { useState } from 'react';
import ProfileSidebar from '../components/ProfileSidebar';
import ProfileTopNavbar from '../components/ProfileTopNavbar';
import CoursesOverview from '../components/CoursesOverview';
import RightSideBarComp from '@/components/RightSideBarComp';
import RightSideBar from '@/components/RightSideBar';

const CoursesPage = () => {
  type Course = {
    id: string;
    image: string;
    title: string;
    progress: number;
    duration: string;
    status: string;
  };

  const [messageFromChild, setMessageFromChild] = useState<Course | null>(null);

  const handleChildMessage = (course: Course) => {
    setMessageFromChild(course);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ProfileTopNavbar />
      <div className="flex justify-center align-top mx-20 mt-10 space-x-6">
        <ProfileSidebar  />
        <CoursesOverview sendMessage={handleChildMessage} />
        <div className="w-1/4 min-w-[300px] max-w-[350px]">
          {messageFromChild?.status === "Completed" ? (
            <RightSideBar />
          ) : (
            <RightSideBarComp />
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;