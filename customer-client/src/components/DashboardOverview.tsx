import React, { useState, useEffect } from 'react';
import { getUserProfile, getUserActivity } from '@/services/profileService';
import ContinueLearning from './ContinueLearning';

// Import assets
import hour from '../Assets/hour.svg';
import earned from '../Assets/earned.svg';
import trophy from '../Assets/trophy.svg';
import awardbg from '../Assets/card-award.png';

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

interface UserActivity {
  learningHours: number;
  certificatesEarned: number;
  coursesEnrolled: number;
  progress: number;
  recentActivity: any[];
}

const DashboardOverview: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [activity, setActivity] = useState<UserActivity | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch user profile
        const userProfileData = await getUserProfile();
        setUser(userProfileData);
        
        // Fetch user activity
        const userActivityData = await getUserActivity();
        setActivity(userActivityData);
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching profile data:', err);
        setError('Failed to fetch profile data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading dashboard data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <p className="text-red-500 mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-purple-600 text-white rounded-md"
        >
          Retry
        </button>
      </div>
    );
  }

  // Default values if data isn't available
  const userName = user?.name || 'Student';
  const learningHours = activity?.learningHours || 0;
  const certificatesEarned = activity?.certificatesEarned || 0;
  const coursesEnrolled = activity?.coursesEnrolled || 0;
  const progress = activity?.progress || 0;

  return (
    <div className="h-screen overflow-y-auto lg:w-[550px] xl:w-[700px] 2xl:w-[90%] 3xl:w-[1008px] 3xl:h-[80vh]" style={{ scrollbarWidth: "none" }} >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Hello {userName} 👋</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-6">
        {/* Achieve with Purpose Card */}
        <div
          className="bg-purple-600 text-white p-6 rounded-[30px] shadow-md flex flex-col justify-between col-span-1 bg-cover bg-center"
          style={{ backgroundImage: `url(${awardbg})` }}
        >
          <div>
            <h2 className="text-xl font-bold mb-2">Achieve with purpose</h2>
            <p className="text-purple-200 text-sm mb-4">
              Track your progress and complete courses to earn certificates.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-3xl">
              {certificatesEarned}/{coursesEnrolled || 1}
            </div>
            <img src={trophy} alt="Trophy" className="h-20 w-20 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 3xl:h-28 3xl:w-28" />
          </div>
          <button className="mt-4 bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 w-[10vw]">
            Start Now
          </button>
        </div>

        {/* Learning Stats */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <div className="bg-white p-6 rounded-[30px] shadow-md flex items-center space-x-4">
            <div className="lg:py-1 lg:px-1 xl:py-2 xl:px-2 2xl:py-3 2xl:px-3 3xl:py-4 3xl:px-4 bg-gradient-to-b from-[#868CFF] to-[#8A63FF] rounded-full">
              <img src={hour} alt="Hour Icon" className='lg:h-5 lg:w-5 xl:h-6 xl:w-6 2xl:h-8 2xl:w-8' />
            </div>
            <div>
              <p className="text-gray-600 lg:text-xs xl:text-sm 2xl:text-base">Learning Hour </p>
              <p className="text-2xl font-bold">
                {learningHours} <span className="text-sm text-gray-500">(This week)</span>
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-[30px] shadow-md flex items-center space-x-4">
            <div className="lg:py-1 lg:px-1 xl:py-2 xl:px-2 2xl:py-3 2xl:px-3 3xl:py-4 3xl:px-4 bg-gradient-to-b from-[#868CFF] to-[#8A63FF] rounded-full">
              <img src={earned} alt="Earned Icon" className='lg:h-5 lg:w-5 xl:h-6 xl:w-6 2xl:h-8 2xl:w-8' />
            </div>
            <div>
              <p className="text-gray-600 lg:text-xs xl:text-sm 2xl:text-base">Certificates Earned</p>
              <p className="text-2xl font-bold">{certificatesEarned}</p>
            </div>
          </div>
        </div>

        {/* Courses Enrolled Progress */}
        <div className="flex flex-col items-center justify-center p-4 sm:p-6 bg-white rounded-lg shadow-md">
          {/* Circular Progress Bar Container */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 xl:w-[14vw] xl:h-[14vw] flex justify-center items-center">
            {/* Background Circle (Gray for Pending) */}
            <svg className="absolute w-full h-full" viewBox="0 0 100 100">
              <circle
                className="stroke-gray-300"
                cx="50"
                cy="50"
                r="45"
                strokeWidth="10"
                fill="none"
              />
            </svg>
            {/* Progress Circle (Purple for Completed) */}
            <svg className="absolute w-full h-full" viewBox="0 0 100 100">
              <circle
                className="stroke-purple-500"
                cx="50"
                cy="50"
                r="45"
                strokeWidth="10"
                fill="none"
                strokeDasharray="283"
                strokeDashoffset={283 * (1 - progress / 100)}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
            {/* Center Text */}
            <div className="absolute flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 xl:w-[10vw] xl:h-[10vw] 2xl:w-[8vw] 2xl:h-[8vw] bg-white rounded-full shadow-2xl ">
              <span className="text-gray-500 text-xs sm:text-sm lg:text-sm xl:text-[0.9vw] 2xl:text-[0.7vw]">
                Courses Enrolled
              </span>
              <span className="text-3xl sm:text-4xl lg:text-4xl xl:text-[2.5vw] font-bold">
                {coursesEnrolled}
              </span>
            </div>
          </div>
          {/* Legend */}
          <div className="flex space-x-3 sm:space-x-4 mt-3 sm:mt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4 xl:w-[1vw] xl:h-[1vw] bg-purple-500 rounded-full mr-1 sm:mr-2"></div>
              <span className="text-xs sm:text-sm lg:text-sm xl:text-[0.9vw]">
                Completed
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4 xl:w-[1vw] xl:h-[1vw] bg-gray-300 rounded-full mr-1 sm:mr-2"></div>
              <span className="text-xs sm:text-sm lg:text-sm xl:text-[0.9vw]">
                Pending
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Learning Section - Now using the dedicated component */}
      <ContinueLearning />
    </div>
  );
};

export default DashboardOverview;