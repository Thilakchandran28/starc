import React from 'react';
import ProfileSidebar from '../components/ProfileSidebar';
import ProfileTopNavbar from '../components/ProfileTopNavbar';
import SettingsOverview from '../components/SettingsOverview';
import RightSideBar from '../components/RightSideBar';

import SettingsTabs from '../components/SettingsTab';

const SettingsPage = () => {
  return (
    // <div className="min-h-screen bg-gray-50 flex">
    //   <ProfileSidebar />
    //   <div className="flex-grow p-6">
    //     <ProfileTopNavbar />
    //     <SettingsOverview />
    //   </div>
    // </div>

    // <div className=" relative  bg-[#F3F3F3]">
    //   <div className='sticky top-0 z-50'>
    //     <ProfileTopNavbar />
    //   </div>

    //   <div className="flex justify-center items-center  mx-10 mt-30 pt-32 relative ">
    //     <ProfileSidebar />
    //     {/* <SettingsOverview /> */}
    //     <SettingsTabs />
    //     <RightSideBar />
    //     {/* <div className='w-[20vw] h-[80vh] '>
    //       <RightSideBar /> 
    //     </div> */}
    //   </div>
    // </div>

    
    <div className="flex flex-col h-screen  bg-gray-100 ">
      <div className=" sticky top-0 z-50  ">
        <ProfileTopNavbar />
      </div>
      <div className="flex flex-1 overflow-hidden  justify-between px-5 w-full h-screen " >
        <div className="w-1/5 sticky top-0 h-screen  pt-8">
        <ProfileSidebar />
        </div>
        <div className="w-3/5 overflow-y-auto sticky top-0 flex justify-center pt-4" style={{scrollbarWidth:'none'}}>
        <SettingsTabs />
        </div>        
        <div className="w-1/5 sticky top-0 h-screen pt-8">
        <RightSideBar /> 
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;