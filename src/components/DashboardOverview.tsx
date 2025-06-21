
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

  const courses = [
    { id: '1', image: 'https://via.placeholder.com/150', title: 'AWS Solutions Architect', progress: 50, duration: '1 Month', status: '50%' },
    { id: '2', image: 'https://via.placeholder.com/150', title: 'Azure Fundamentals', progress: 100, duration: '1 Month', status: 'Completed' },
    { id: '3', image: 'https://via.placeholder.com/150', title: 'Google Cloud Basics', progress: 75, duration: '1 Month', status: '75%' },
    { id: '4', image: 'https://via.placeholder.com/150', title: 'Google Cloud Advanced', progress: 75, duration: '1 Month', status: '75%' },
    { id: '5', image: 'https://via.placeholder.com/150', title: 'DevOps Essentials', progress: 75, duration: '1 Month', status: '75%' },
    { id: '6', image: 'https://via.placeholder.com/150', title: 'Kubernetes Basics', progress: 75, duration: '1 Month', status: '75%' },
  ];

  const progressPercentage = (user.progress / user.coursesEnrolled) * 100;

  return (
    // absolute top-28 bg-gray-100
    <div className="h-screen overflow-y-auto lg:w-[550px] xl:w-[700px] 2xl:w-[90%] 3xl:w-[1000px]" style={{scrollbarWidth:"none"}} >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Hello {user.name} 👋</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-6">
        {/* Achieve with Purpose Card */}
        <div
          className="bg-purple-600 text-white  p-6 rounded-[30px] shadow-md flex flex-col justify-between col-span-1 bg-cover bg-center"
          style={{ backgroundImage: `url(${awardbg})` }}
        >
          <div>
            <h2 className="text-xl font-bold mb-2">Achieve with purpose</h2>
            <p className="text-purple-200 text-sm mb-4">
              Achieve with purpose Achieve with purpose Achieve with purpose.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-3xl">02/10</div>
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
              <img src={hour} alt="Hour Icon" className='lg:h-5 lg:w-5 xl:h-6 xl:w-6 2xl:h-8 2xl:w-8'/>
            </div>
            <div>
              <p className="text-gray-600 lg:text-xs xl:text-sm 2xl:text-base">Learning Hour </p>
              <p className="text-2xl font-bold">
                {user.learningHours} <span className="text-sm text-gray-500">(This week)</span>
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-[30px] shadow-md flex items-center space-x-4">
            <div className="lg:py-1 lg:px-1 xl:py-2 xl:px-2 2xl:py-3 2xl:px-3 3xl:py-4 3xl:px-4   bg-gradient-to-b from-[#868CFF] to-[#8A63FF] rounded-full">
              <img src={earned} alt="Earned Icon" className='lg:h-5 lg:w-5 xl:h-6 xl:w-6 2xl:h-8 2xl:w-8'   />
            </div>
            <div>
              <p className="text-gray-600 lg:text-xs xl:text-sm 2xl:text-base">Certificates Earned</p>
              <p className="text-2xl font-bold">{user.certificatesEarned}</p>
            </div>
          </div>
        </div>

        {/* Courses Enrolled Progress */}
        <div className="flex flex-col items-center w-full bg-white rounded-[30px] shadow-md">
          <div className=" p-0 rounded-[50%] shadow-md flex flex-col items-center">
            {/* Circular Progress Indicator */}
            <div className="relative w-44 h-44">
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
              <div className="absolute inset-0 flex flex-col  items-center justify-center">
                <span className="text-gray-500 text-sm">Courses Enrolled</span>
                <span className="text-4xl font-bold">{user.coursesEnrolled}</span>
              </div>
            </div>
          </div>
          {/* Legend */}
          <div className="flex space-x-4 mt-4  ]">
            <div className="flex items-center ">
              <span className="lg:w-2 lg:h-2 xl:w-3 xl:h-3 2xl:h-4 2xl:w-4 rounded-full bg-purple-500 mr-2"></span>
              <span className='lg:text-xs xl:text-base 2xl:text-base 3xl:text-xl'>Completed</span>
            </div>
            <div className="flex items-center">
              <span className="lg:w-2 lg:h-2 xl:w-3 xl:h-3 2xl:h-4 2xl:w-4 w-4 h-4 rounded-full bg-gray-200 mr-2"></span>
              <span className='lg:text-xs xl:text-sm 2xl:text-base 3xl:text-xl'>Pending</span>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Learning Section */}
      <div className="w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {courses.map((course) => (
            <DashboardCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;