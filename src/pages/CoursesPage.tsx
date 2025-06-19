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
    // <div className="min-h-screen  bg-gray-100 flex justify-center ">
    //   <ProfileTopNavbar />
    //   <div className="items-center align-top mx-20 mt-24 lg:w-1/2 2xl:w-[850px] 3xl:w-1/2">
    //     <ProfileSidebar  />
    //     <CoursesOverview sendMessage={handleChildMessage}  />
    //     <div className="w-1/4 min-w-[300px] max-w-[350px]">
    //       {messageFromChild?.status === "Completed" ? (
    //         <RightSideBar />
    //       ) : (
    //         <RightSideBarComp />
    //       )}
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col h-screen  bg-white-100 ">
      <div className=" sticky top-0 z-50  ">
        <ProfileTopNavbar />
      </div>
      <div className="flex flex-1 overflow-hidden  justify-between px-5 w-full h-screen " >
        <div className="w-1/5 sticky top-0 h-screen  pt-8">
        <ProfileSidebar />
        </div>
        <div className="w-3/5 overflow-y-auto sticky top-0 flex justify-center pt-8 " style={{scrollbarWidth:'none'}}>
        <CoursesOverview sendMessage={handleChildMessage}/>
        </div>        
        <div className="w-1/5 sticky top-0 h-screen pt-8">
        {messageFromChild?.status ==='Completed'?(
          <RightSideBar/>
        ):(
          <RightSideBarComp /> 
          
        )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;



