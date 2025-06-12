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

    <div className=" relative  bg-[#F3F3F3]">
      <div className='sticky top-0 z-50'>
        <ProfileTopNavbar />
      </div>

      <div className="flex justify-center items-center  mx-10 mt-30 pt-32 relative ">
        <ProfileSidebar />
        {/* <SettingsOverview /> */}
        <SettingsTabs />
        <RightSideBar />
        {/* <div className='w-[20vw] h-[80vh] '>
          <RightSideBar /> 
        </div> */}
      </div>
    </div>
  );
};

export default SettingsPage;