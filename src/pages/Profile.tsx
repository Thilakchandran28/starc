import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProfileSidebar from '../components/ProfileSidebar';
import ProfileTopNavbar from '../components/ProfileTopNavbar';
import DashboardOverview from '../components/DashboardOverview';

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
    <div className="min-h-screen bg-gray-50 flex">
      <ProfileSidebar />
      <div className="flex-grow p-6">
        <ProfileTopNavbar />
        <DashboardOverview />
      </div>
    </div>
  );
};

export default Profile;