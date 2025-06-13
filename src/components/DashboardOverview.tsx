
import React from 'react';
import { Search, Bell, Heart, LayoutDashboard, Award, TrendingUp } from 'lucide-react';
import DashboardCard from './DashboardCard';

// Import assets
import hour from '../Assets/hour.svg';
import earned from '../Assets/earned.svg';
import trophy from '../Assets/trophy.svg';
import awardbg from '../Assets/card-award.png';

interface Course {
  id: number;
  title: string;
  duration: string;
  progress: number;
  image: string;
}

interface User {
  name: string;
  learningHours: number;
  certificatesEarned: number;
  coursesEnrolled: number;
  progress: number;
}

const DashboardOverview: React.FC = () => {
  const user: User = {
    name: 'Jack',
    learningHours: 22,
    certificatesEarned: 7,
    coursesEnrolled: 50,
    progress: 50,
  };

  const courses: Course[] = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      duration: '3 Month',
      progress: 50,
      image: '/placeholder.svg',
    },
    {
      id: 2,
      title: 'AWS Certified Solutions Architect',
      duration: '3 Month',
      progress: 50,
      image: '/placeholder.svg',
    },
    {
      id: 3,
      title: 'AWS Certified Solutions Architect',
      duration: '3 Month',
      progress: 50,
      image: '/placeholder.svg',
    },
    {
      id: 4,
      title: 'AWS Certified Solutions Architect',
      duration: '3 Month',
      progress: 50,
      image: '/placeholder.svg',
    },
    {
      id: 5,
      title: 'AWS Certified Solutions Architect',
      duration: '3 Month',
      progress: 50,
      image: '/placeholder.svg',
    },
    {
      id: 6,
      title: 'AWS Certified Solutions Architect',
      duration: '3 Month',
      progress: 50,
      image: '/placeholder.svg',
    },
  ];

  const progressPercentage = (user.progress / user.coursesEnrolled) * 100;

  return (
    <div className="px-10 min-h-screen w-[60vw] absolute top-32">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Hello {user.name} 👋</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-6">
        {/* Achieve with Purpose Card */}
        <div
          className="bg-purple-600 text-white p-6 rounded-[30px] shadow-md flex flex-col justify-between col-span-1 bg-cover bg-center"
          style={{ backgroundImage: `url(${awardbg})` }}
        >
          <div>
            <h2 className="text-xl font-bold mb-2">Achieve with purpose</h2>
            <p className="text-purple-200 text-sm mb-4">
              Achieve with purpose Achieve with purpose Achieve with purpose.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold">02/10</div>
            <img src={trophy} alt="Trophy" className="h-20 w-20" />
          </div>
          <button className="mt-4 bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 w-[10vw]">
            Start Now
          </button>
        </div>

        {/* Learning Stats */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <div className="bg-white p-6 rounded-[30px] shadow-md flex items-center space-x-4">
            <div className="py-4 px-5 bg-gradient-to-b from-[#868CFF] to-[#8A63FF] rounded-full">
              <img src={hour} alt="Hour Icon" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Learning Hour</p>
              <p className="text-2xl font-bold">
                {user.learningHours} <span className="text-sm text-gray-500">(This week)</span>
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-[30px] shadow-md flex items-center space-x-4">
            <div className="py-4 px-5 bg-gradient-to-b from-[#868CFF] to-[#8A63FF] rounded-full">
              <img src={earned} alt="Earned Icon" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Certificates Earned</p>
              <p className="text-2xl font-bold">{user.certificatesEarned}</p>
            </div>
          </div>
        </div>

        {/* Courses Enrolled Progress */}
        <div className="flex flex-col items-center w-full bg-white rounded-[30px] shadow-md">
          <div className=" p-0 rounded-[50%] shadow-md flex flex-col items-center">
            {/* Circular Progress Indicator */}
            <div className="relative w-48 h-48">
              <svg className="w-full h-full" viewBox="0 0 100 100">

                <circle
                  cx="50"
                  cy="50"   
                  r="40"
                  strokeWidth="10"
                  fill="none"
                  className="stroke-gray-200"
                />

                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={`${25 * 2.51}, 251`} // 251 is the circumference (2 * π * 40)
                  strokeDashoffset="0"
                  className="stroke-purple-500 transform -rotate-90 origin-center"
                />
              </svg>
              {/* Text Inside Circle */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-gray-500 text-sm">Courses Enrolled</span>
                <span className="text-4xl font-bold">{user.coursesEnrolled}</span>
              </div>
            </div>
          </div>
          {/* Legend */}
          <div className="flex space-x-4 mt-4">
            <div className="flex items-center">
              <span className="w-4 h-4 rounded-full bg-purple-500 mr-2"></span>
              <span>Completed</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 rounded-full bg-gray-200 mr-2"></span>
              <span>Pending</span>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Learning Section */}
      <div className="w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course) => (
            <DashboardCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;