import React from 'react';

const CourseCard = ({ image, title, progress, duration, status }) => (
  <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
    <img src={image} alt={title} className="w-full h-32 object-cover rounded-md mb-4" />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
      <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
    </div>
    <p className="text-sm text-gray-600 mb-2">{duration}</p>
    <p className="text-sm text-gray-600">{status}</p>
  </div>
);

const CoursesOverview = () => {
  const courses = [
    {
      image: 'https://via.placeholder.com/150',
      title: 'AWS Certified solutions Architect',
      progress: 50,
      duration: '1 Month',
      status: '50%'
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'AWS Certified solutions Architect',
      progress: 100,
      duration: '1 Month',
      status: 'completed'
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'AWS Certified solutions Architect',
      progress: 50,
      duration: '1 Month',
      status: '50%'
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'AWS Certified solutions Architect',
      progress: 50,
      duration: '1 Month',
      status: '50%'
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'AWS Certified solutions Architect',
      progress: 100,
      duration: '1 Month',
      status: 'completed'
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'AWS Certified solutions Architect',
      progress: 50,
      duration: '1 Month',
      status: '50%'
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">My Courses (8)</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search in your courses.."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <svg
              className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <button className="flex items-center px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4h13M3 8h9m-9 4h9m5-4a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            Sort By
          </button>
        </div>
      </div>

      <div className="flex space-x-4 mb-6">
        <button className="px-6 py-2 rounded-lg bg-purple-600 text-white font-semibold">All Courses</button>
        <button className="px-6 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">Ongoing Courses</button>
        <button className="px-6 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">Completed Courses</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesOverview;