import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProfileSidebar from '../components/ProfileSidebar';
import ProfileTopNavbar from '../components/ProfileTopNavbar';
import DashboardOverview from '../components/DashboardOverview';
import RightSideBarComp from '@/components/RightSideBarComp';

const Profile = () => {
  const [user] = useState({
    name: 'Jackson Durai',
    learningHours: 22,
    certificatesEarned: 7,
    progress: 50
  });

  const courses = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      progress: 35,
      duration: '3 Month',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'AWS Certified Solutions Architect',
      progress: 50,
      duration: '3 Month',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'AWS Certified Solutions Architect',
      progress: 80,
      duration: '3 Month',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className=" bg-gray-50">
      <ProfileTopNavbar />
      <div className="flex justify-center align-top mx-20 mt-10">
        <ProfileSidebar />
        <DashboardOverview />
        <RightSideBarComp />
      </div>
    </div>
  );
};

export default Profile;