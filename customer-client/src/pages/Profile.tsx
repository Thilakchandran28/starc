import { useState, useEffect } from "react";
import { getUserProfile } from "@/services/profileService";
import { Button } from "@/components/ui/button";
import ProfileSidebar from "../components/ProfileSidebar";
import ProfileTopNavbar from "../components/ProfileTopNavbar";
import DashboardOverview from "../components/DashboardOverview";
import RightSideBarComp from "@/components/RightSideBarComp";

interface UserData {
  name: string;
  email?: string;
  role?: string;
}

const Profile = () => {
  const [user, setUser] = useState<UserData>({
    name: "Student",
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        const userData = await getUserProfile();
        if (userData) {
          setUser({
            name: userData.name || "Student",
            email: userData.email,
            role: userData.role
          });
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  
// const Profile = () => {
//   // const [user] = useState({
//   //   name: "Jackson Durai",
//   //   learningHours: 22,
//   //   certificatesEarned: 7,
//   //   progress: 50,
//   // });

//     type Course = {
//     id: string;
//     image: string;
//     title: string;
//     progress: number;
//     duration: string;
//     status: string;
//   };

// const [messageFromChild, setMessageFromChild] = useState<Course | null>(null);
  
//   const handleChildMessage = (course: Course) => {
//     setMessageFromChild(course);
//   };

  return (
    <div className="flex flex-col h-screen bg-gray-100 ">
      <div className=" sticky top-0 z-50 ">
        <ProfileTopNavbar userName={user.name} />
      </div>
      <div className="flex flex-1 overflow-hidden  justify-between  w-full h-screen " >
        <div className="w-1/5 sticky top-0 h-[90vh] lg:pl-7 xl:pl-9 2xl:pl-16 3xl:pl-24  pt-8">
        <ProfileSidebar user={user} />
        </div>
        <div className="overflow-y-auto h-screen pt-8 sticky top-0 flex justify-center" style={{scrollbarWidth:'none'}}>
        <DashboardOverview />
        </div>        
        <div className="sticky top-0 h-screen pt-8 lg:mr-[22px] xl:mr-[38px] 2xl:mr-[68px] 3xl:mr-[88px]">
        <RightSideBarComp /> 

    {/* <div className="flex flex-col h-screen bg-gray-100 ">
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
          
        )} */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
