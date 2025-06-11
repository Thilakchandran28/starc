import React from 'react';
import { Search, Bell, Heart, LayoutDashboard, Award, TrendingUp } from 'lucide-react';

const DashboardOverview = () => {
  const user = {
    name: 'Jack',
    learningHours: 22,
    certificatesEarned: 7,
    coursesEnrolled: 50,
    progress: 50
  };

  const courses = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      duration: '3 Month',
      progress: 50,
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'AWS Certified Solutions Architect',
      duration: '3 Month',
      progress: 50,
      image: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'AWS Certified Solutions Architect',
      duration: '3 Month',
      progress: 50,
      image: '/placeholder.svg'
    },
    {
      id: 4,
      title: 'AWS Certified Solutions Architect',
      duration: '3 Month',
      progress: 50,
      image: '/placeholder.svg'
    },
    {
      id: 5,
      title: 'AWS Certified Solutions Architect',
      duration: '3 Month',
      progress: 50,
      image: '/placeholder.svg'
    },
    {
      id: 6,
      title: 'AWS Certified Solutions Architect',
      duration: '3 Month',
      progress: 50,
      image: '/placeholder.svg'
    },
  ];

  const schedule = [
    { time: '10 AM', title: 'Meeting', description: 'Introduction class', duration: '10 AM - 11 AM' },
    { time: '12 PM', title: 'Module 2', description: 'Fundamentals and basics', duration: '10 AM - 11 AM' },
    { time: '03 PM', title: 'Module 4', description: 'AWS Basics', duration: '10 AM - 11 AM' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Hello {user.name} 👋</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Achieve with purpose card */}
        <div className="bg-purple-600 text-white p-6 rounded-lg shadow-md flex flex-col justify-between col-span-1">
          <div>
            <h2 className="text-xl font-bold mb-2">Achieve with purpose</h2>
            <p className="text-purple-200 text-sm mb-4">Achieve with purpose Achieve with purposeAchieve with purpose.</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold">02/10</div>
            <img src="/placeholder.svg" alt="Trophy" className="h-16 w-16" />
          </div>
          <button className="mt-4 bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100">Start Now</button>
        </div>

        {/* Learning Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <LayoutDashboard className="text-purple-600" size={24} />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Learning Hour</p>
              <p className="text-2xl font-bold">{user.learningHours} <span className="text-sm text-gray-500">(This week)</span></p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Award className="text-purple-600" size={24} />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Certificates Earned</p>
              <p className="text-2xl font-bold">{user.certificatesEarned}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center col-span-2">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-purple-100" strokeWidth="2"></circle>
                <circle
                  cx="18" cy="18" r="16" fill="none"
                  className="stroke-current text-purple-600"
                  strokeWidth="2"
                  strokeDasharray={`${user.coursesEnrolled} 100`}
                ></circle>
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-xl font-bold text-gray-900">{user.coursesEnrolled}</p>
                <p className="text-sm text-gray-500">Courses Enrolled</p>
              </div>
            </div>
            <div className="ml-4">
              <div className="flex items-center text-sm text-gray-600 mb-1">
                <span className="w-3 h-3 rounded-full bg-purple-600 mr-2"></span> Completed
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-3 h-3 rounded-full bg-gray-300 mr-2"></span> Pending
              </div>
            </div>
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="bg-white p-6 rounded-lg shadow-md col-span-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Today's Schedule</h2>
            <select className="border rounded-md px-2 py-1 text-sm">
              <option>Weekly</option>
            </select>
          </div>
          <p className="text-gray-500 text-sm mb-4">14 - May - 2025</p>
          <div className="flex space-x-2 mb-6">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
              <div key={index} className={`w-8 h-8 flex items-center justify-center rounded-full ${day === 'S' ? 'bg-purple-600 text-white' : 'text-gray-600'}`}>
                {day}
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div key={index} className="flex items-start">
                <p className="text-gray-500 text-sm w-16 flex-shrink-0">{item.time}</p>
                <div className="border-l-2 border-purple-300 pl-4 ml-2">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <p className="text-gray-500 text-xs">{item.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Continue Learning Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{course.duration}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                  <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                </div>
                <p className="text-xs text-gray-500">{course.progress}% Complete</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;