import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProfileSidebar from "../components/ProfileSidebar";
import ProfileTopNavbar from "../components/ProfileTopNavbar";
import DashboardOverview from "../components/DashboardOverview";
import RightSideBarComp from "@/components/RightSideBarComp";

const Profile = () => {
  const [user] = useState({
    name: "Jackson Durai",
    learningHours: 22,
    certificatesEarned: 7,
    progress: 50,
  });

  const courses = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      progress: 35,
      duration: "3 Month",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "AWS Certified Solutions Architect",
      progress: 50,
      duration: "3 Month",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "AWS Certified Solutions Architect",
      progress: 80,
      duration: "3 Month",
      image: "/placeholder.svg",
    },
  ];

  return (
    // <div className=" h-full w-full flex justify-center relative border border-blue-500 bg-red-400">
    //   <div className="absolute z-10 flex justify-center">
    //     <ProfileTopNavbar />
    //   </div>
    //   <div className="pt-20 flex justify-center items-center ">
    //     <ProfileSidebar />
    //     <DashboardOverview />
    //     <RightSideBarComp />
    //   </div>
    // </div>
    //   <div className="border border-blue-500 bg-green-400 justify-center ">
    //     <div className="sticky  z-50  ">
    //       <ProfileTopNavbar />
    //     </div>

    //     <div className="flex justify-center items-center border absolute inset-0 bg-red-500 border-red-500 p-20 min-h-full ">
    //         <ProfileSidebar />
    //         <DashboardOverview />
    //         <RightSideBarComp />
    //   </div>
    // </div>

    <div className="flex flex-col h-screen bg-gray-100 ">
      <div className=" sticky top-0 z-50 ">
        <ProfileTopNavbar />
      </div>
      <div className="flex flex-1 overflow-hidden  justify-between  w-full h-screen " >
        <div className="w-1/5 sticky top-0 h-[90vh] lg:pl-7 xl:pl-9 2xl:pl-16 3xl:pl-20  pt-8">
        <ProfileSidebar />
        </div>
        <div className="overflow-y-auto h-screen pt-8 sticky top-0 flex justify-center" style={{scrollbarWidth:'none'}}>
        <DashboardOverview />
        </div>        
        <div className="sticky top-0 h-screen pt-8 lg:mr-[28px] xl:mr-[38px] 2xl:mr-[68px] 3xl:mr-[88px]">
        <RightSideBarComp /> 
        </div>
      </div>
    </div>
  );
};

export default Profile;
