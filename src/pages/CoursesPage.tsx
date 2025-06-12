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
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <ProfileTopNavbar />
      <div className="items-center align-top mx-20 mt-24 border lg:w-1/2 2xl:w-1/2 3xl:w-1/2">
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


// Responsive
// import React, { useState } from 'react';
// import ProfileSidebar from '../components/ProfileSidebar';
// import ProfileTopNavbar from '../components/ProfileTopNavbar';
// import CoursesOverview from '../components/CoursesOverview';
// import RightSideBarComp from '@/components/RightSideBarComp';
// import RightSideBar from '@/components/RightSideBar';

// const CoursesPage = () => {
//   type Course = {
//     id: string;
//     image: string;
//     title: string;
//     progress: number;
//     duration: string;
//     status: string;
//   };

//   const [messageFromChild, setMessageFromChild] = useState<Course | null>(null);

//   const handleChildMessage = (course: Course) => {
//     setMessageFromChild(course);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 top-0">
//       <ProfileTopNavbar />
//       <div className="flex justify-center align-top mx-4 lg:mx-8 xl:mx-20 mt-6 lg:mt-8 xl:mt-10 space-x-4 lg:space-x-6 xl:space-x-8">
//         <ProfileSidebar />
//         <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl">
//           <CoursesOverview sendMessage={handleChildMessage} />
//         </div>
//         <div className="w-64 lg:w-72 xl:w-80 min-w-[240px] lg:min-w-[280px] xl:min-w-[320px] max-w-[320px] lg:max-w-[360px] xl:max-w-[400px]">
//           {messageFromChild?.status === "Completed" ? (
//             <RightSideBar />
//           ) : (
//             <RightSideBarComp />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoursesPage;
