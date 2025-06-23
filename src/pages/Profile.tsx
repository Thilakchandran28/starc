import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProfileSidebar from "../components/ProfileSidebar";
import ProfileTopNavbar from "../components/ProfileTopNavbar";
import DashboardOverview from "../components/DashboardOverview";
import RightSideBarComp from "@/components/RightSideBarComp";
import RightSideBar from "@/components/RightSideBar";

const Profile = () => {
  // const [user] = useState({
  //   name: "Jackson Durai",
  //   learningHours: 22,
  //   certificatesEarned: 7,
  //   progress: 50,
  // });

    type Course = {
    id: string;
    image: string;
    title: string;
    progress: number;
    duration: string;
    status: string;
  };
  
  // const courses = [
  //   {
  //     id: 1,
  //     title: "AWS Certified Solutions Architect",
  //     progress: 35,
  //     duration: "3 Month",
  //     image: "/placeholder.svg",
  //   },
  //   {
  //     id: 2,
  //     title: "AWS Certified Solutions Architect",
  //     progress: 50,
  //     duration: "3 Month",
  //     image: "/placeholder.svg",
  //   },
  //   {
  //     id: 3,
  //     title: "AWS Certified Solutions Architect",
  //     progress: 80,
  //     duration: "3 Month",
  //     image: "/placeholder.svg",
  //   },
  // ];
  const [messageFromChild, setMessageFromChild] = useState<Course | null>(null);
  
  const handleChildMessage = (course: Course) => {
    setMessageFromChild(course);
  };
  
  return (
    <div className="flex flex-col h-screen bg-gray-100 ">
      <div className=" sticky top-0 z-50 ">
        <ProfileTopNavbar />
      </div>
      <div className="flex flex-1 overflow-hidden  justify-between  w-full h-screen " >
        <div className="w-1/5 sticky top-0 h-[90vh] lg:pl-7 xl:pl-9 2xl:pl-16 3xl:pl-24  pt-8">
        <ProfileSidebar />
        </div>
        <div className="overflow-y-auto h-screen pt-8 sticky top-0 flex justify-center" style={{scrollbarWidth:'none'}}>
        <DashboardOverview  sendMessage={handleChildMessage}/>
        </div>        
        <div className="sticky top-0 h-screen pt-8 lg:mr-[22px] xl:mr-[38px] 2xl:mr-[68px] 3xl:mr-[88px]">
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

export default Profile;
