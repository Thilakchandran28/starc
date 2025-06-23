
import React, { useState } from 'react';
import { Search, Bell, Heart, LayoutDashboard, Award, TrendingUp } from 'lucide-react';
import DashboardCard from './DashboardCard';

// Import assets
import hour from '../Assets/hour.svg';
import earned from '../Assets/earned.svg';
import trophy from '../Assets/trophy.svg';
import awardbg from '../Assets/card-award.png';
import course1 from '../Assets/icons/course1.svg'
import course2 from '../Assets/icons/course2.svg'
import course3 from '../Assets/icons/course3.svg'
import course4 from '../Assets/icons/course4.svg'
import course5 from '../Assets/icons/course5.svg'
import course6 from '../Assets/icons/course6.svg'
import OngoingCourseDashboardPage from './OngoingCourse';
import CourseDashboardPage from './CompletedCourse';

interface Course {
  id: string;
  title: string;
  duration: string;
  progress: number;
  image: string;
  status: string;
}

interface User {
  name: string;
  learningHours: number;
  certificatesEarned: number;
  coursesEnrolled: number;
  progress: number;
}

interface childProps {
  sendMessage: (course: Course) => void;
}

const DashboardOverview: React.FC<childProps> = ({ sendMessage }) => {
  const user: User = {
    name: 'Jack',
    learningHours: 22,
    certificatesEarned: 7,
    coursesEnrolled: 50,
    progress: 50,
  };
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  

  const courses: Course[] = [
    {
      id: "1",
      image: course1,
      title: "AWS Solutions Architect",
      progress: 50,
      duration: "1 Month",
      status: "50%",
    },
    {
      id: "2",
      image: course2,
      title: "Azure Fundamentals",
      progress: 100,
      duration: "1 Month",
      status: "Completed",
    },
    {
      id: "3",
      image: course3,
      title: "Google Cloud Basics",
      progress: 75,
      duration: "1 Month",
      status: "75%",
    },
    {
      id: "4",
      image: course4,
      title: "Google Cloud Advanced",
      progress: 75,
      duration: "1 Month",
      status: "75%",
    },
    {
      id: "5",
      image: course5,
      title: "DevOps Essentials",
      progress: 75,
      duration: "1 Month",
      status: "75%",
    },
    {
      id: "6",
      image: course6,
      title: "Kubernetes Basics",
      progress: 75,
      duration: "1 Month",
      status: "75%",
    },
  ];

  const progressPercentage = (user.progress / user.coursesEnrolled) * 100;


  const progress = 50;

  const filteredCourses = courses    

  if (selectedCourse) {
    if (selectedCourse.status === "Completed") {
      return (
        <CourseDashboardPage
          course={selectedCourse}
          onBack={() => setSelectedCourse(null)}
        />
      );
    } else {
      return (
        <OngoingCourseDashboardPage
          course={selectedCourse}
          onBack={() => setSelectedCourse(null)}
        />
      );
    }}

  const handleSelectedCourse = (course: Course) => {
    setSelectedCourse(course);
    sendMessage(course);
  };

  return (
    // absolute top-28 bg-gray-100
    <div className="h-[80vh] lg:ml-3 xl:ml-0 overflow-y-auto lg:w-[530px] xl:w-[700px] 2xl:w-[775px] 3xl:w-[1008px]  py-1" style={{ scrollbarWidth: "none" }} >
      <h1 className="text-3xl font-bold text-gray-900 lg:mb-3 xl:mb-6">Hello {user.name} 👋</h1>

      <div className="flex justify-between  ">
        {/* Achieve with Purpose Card */}
        <div
          className="bg-black lg:h-[150px] lg:w-[322px] xl:h-[185px] xl:w-[300px] 2xl:h-[223px] 2xl:w-[372px] 3xl:h-[243px] 3xl:w-[412px] text-white lg:p-3 xl:p-3 2xl:p-4 rounded-[30px] shadow-md  lg:m-1 xl:m-2  flex flex-col justify-between  bg-cover bg-center"
          style={{ backgroundImage: `url(${awardbg})`}}
        >
          <div className=''>
            <h2 className="lg:text-sm xl:text-lg 2xl:text-xl font-bold mb-2">Achieve with purpose</h2>
            <p className="text-purple-200 lg:text-[10px] xl:text-[12px] 2xl:text-xs">
              Achieve with purpose Achieve with purpose Achieve with purpose.
            </p>
          </div>
          <div className="flex items-start justify-center lg:h-[50px] xl:h-[60px] 2xl:h-[70px] 3xl:h-[80px]  ">
            <div className="flex justify-center text-3xl font-bold lg:text-[20px] xl:text-[22px] xl:w-[148px]  2xl:text-[28px] 2xl:w-[198px] 3xl:text-[32px] 3xl:w-[218px] 3xl:h-[45px] lg:mt-2 xl:mt-4">02/10</div>
            <img src={trophy} alt="Trophy" className="relative lg:left-9 lg:bottom-3  xl:left-4 xl:bottom-7 2xl:left-4 2xl:bottom-6 3xl:left-2 3xl:bottom-8 lg:h-16 lg:w-16 xl:h-[106px] xl:w-[106px] 2xl:h-[126px] 2xl:w-[126px] 3xl:h-[146px] 3xl:w-[146px]" />
          </div>
          <button className="lg:mt-2 xl:mt-2 bg-white text-purple-600 lg:px-2 xl:px-4 xl:py-1 2xl:py-2 rounded-full font-semibold  hover:bg-gray-100 lg:text-[8px] lg:h-[22px] lg:w-[70px] xl:text-[10px] xl:h-[24px] xl:w-[90px]  2xl:text-[12px] 2xl:h-[28px] 2xl:w-[100px] 3xl:text-[14px] 3xl:h-[35px] 3xl:w-[122px]">
            Start Now
          </button>
        </div>

        {/* Learning Stats */}
        <div className="flex flex-col justify-between items-center lg:m-1 xl:m-2 ">
          <div className="bg-white 2xl:p-4 3xl:p-4 rounded-[30px] shadow-md flex items-center justify-center space-x-4 border border- lg:h-[65px] lg:w-[150px] xl:h-[80px] xl:w-[188px] 2xl:h-[90px] 2xl:w-[198px] 3xl:h-[106px] 3xl:w-[258px] ">
            <div className="lg:py-1 lg:px-1 xl:py-2 xl:px-2 2xl:py-3 2xl:px-2 3xl:py-4 3xl:px-4  bg-gradient-to-b from-[#868CFF] to-[#8A63FF] rounded-full ">
              <img src={hour} alt="Hour Icon" className='lg:h-4 lg:w-4 xl:h-5 xl:w-5 2xl:h-5 2xl:w-5 3xl:h-6 3xl:w-6' />
            </div>  
            <div className='flex flex-col justify-center lg:w-[50%] xl:w-[50%]  2xl:w-[60%]  3xl:w-[60%] '>
              <p className="text-gray-600 lg:text-[10px] xl:text-[12px] 2xl:text-xs 3xl:text-base">Learning Hour </p>
              <p className="lg:text-sm xl:text-lg 2xl:text-xl 3xl:text-2xl font-bold">
                {user.learningHours} <span className= "lg:text-[8px] xl:text-[10px] 2xl:text-[10px] 3xl:text-sm text-gray-500">(This week)</span>
              </p>
            </div>
          </div>

          <div className="bg-white 2xl:p-4 3xl:p-4 rounded-[30px] shadow-md flex items-center justify-center space-x-4 border border- lg:h-[65px] lg:w-[150px] xl:h-[80px] xl:w-[188px] 2xl:h-[90px] 2xl:w-[198px] 3xl:h-[106px] 3xl:w-[258px] ">
            <div className="lg:py-1 lg:px-1 xl:py-2 xl:px-2 2xl:py-3 2xl:px-2 3xl:py-4 3xl:px-4  bg-gradient-to-b from-[#868CFF] to-[#8A63FF] rounded-full">
              <img src={earned} alt="Earned Icon" className='lg:h-4 lg:w-4 xl:h-5 xl:w-5 2xl:h-5 2xl:w-5 3xl:h-6 3xl:w-6' />
            </div>
            <div className='flex flex-col justify-center lg:w-[50%] xl:w-[50%]  2xl:w-[60%]  3xl:w-[60%] '>
              <p className="text-gray-600  lg:text-[10px] xl:text-[12px] 2xl:text-xs 3xl:text-base">Certificates</p>
              <p className="lg:text-sm xl:text-lg 2xl:text-xl 3xl:text-2xl font-bold">{user.certificatesEarned}</p>
            </div>
          </div>
        </div>

        {/* Courses Enrolled Progress */}

        <div className="flex flex-col items-center justify-center lg:m-1 xl:m-2 lg:h-[150px] lg:w-[150px] xl:h-[190px] xl:w-[190px] 2xl:h-[220px] 2xl:w-[220px] 3xl:h-[250px] 3xl:w-[250px]  p-4 bg-white rounded-lg shadow-md ">
          {/* Circular Progress Bar Container */}
          <div className="relative lg:h-[100px] lg:w-[100px]  xl:h-[125px] xl:w-[125px]  2xl:h-[140px] 2xl:w-[140px] 3xl:h-[166px] 3xl:w-[166px]  flex justify-center items-center ">
            {/* Background Circle (Gray for Pending) */}
            <svg className="absolute l w-full h-full" viewBox="0 0 100 100">
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
            <div className="absolute flex flex-col items-center justify-center lg:h-[48px] lg:w-[48px] xl:h-[78px] xl:w-[78px] 2xl:h-[98px] 2xl:w-[98px] 3xl:h-[108px] 3xl:w-[108px]  rounded-full shadow-2xl ">
              <span className="text-gray-500  lg:text-[7px] xl:text-[8px] 2xl:text-[8px] 3xl:text-[9px]">
                Courses Enrolled
              </span>
              <span className="lg:text-[20px] xl:text-[22px] 2xl:text-[22px] 3xl:text-[26px] font-bold">
                {progress}
              </span>
            </div>
          </div>
          {/* Legend */}
          <div className="flex space-x-3  mt-3 px-2 ">
            <div className="flex items-center">
              <div className=" lg:w-3 lg:h-3 xl:w-4 xl:h-4 2xl:w-6 2xl:h-6 3xl:w-6 3xl:h-6 bg-purple-500 rounded-full mr-1 "></div>
              <span className=" lg:text-[9px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[13px]">
                Completed
              </span>
            </div>
            <div className="flex items-center ">
              <div className="lg:w-3 lg:h-3 xl:w-4 xl:h-4 2xl:w-6 2xl:h-6 3xl:w-6 3xl:h-6 bg-gray-300 rounded-full mr-1 sm:mr-2   "></div>
              <span className="lg:text-[9px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[13px]">
                Pending
              </span>
            </div>
          </div>
        </div>



      </div>

      {/* Continue Learning Section */}
      <div className="w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Learning</h2>
        <div className="flex flex-wrap justify-between p-1 " >
          {filteredCourses.map((course) => (
            <div onClick={() => handleSelectedCourse(course)}>

            <DashboardCard key={course.id} course={course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;