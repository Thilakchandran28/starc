import React from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import ProfileTopNavbar from "../components/ProfileTopNavbar";
import ScheduleOverview from "../components/ScheduleOverview";

const SchedulePage = () => {
  return (
    // <div className="min-h-screen bg-gray-50 flex">
    //   <ProfileSidebar />
    //   <div className="flex-grow p-6">
    //     <ProfileTopNavbar />
    //     <ScheduleOverview />
    //   </div>
    // </div>

    <div className=" relative bg-[#F3F3F3]">
      <div className="sticky top-0 z-0">
       <ProfileSidebar />
      </div>

      <div className="flex justify-end  ml-20 mt-30 relative   ">
        <ProfileTopNavbar />
        <ScheduleOverview />
      </div>
    </div>
  );
};

export default SchedulePage;
