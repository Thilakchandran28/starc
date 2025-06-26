import { useState, useEffect } from "react";
import { getUserProfile } from "@/services/profileService";
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

  return (
    <div className="flex flex-col h-screen bg-gray-100 ">
      <div className=" sticky top-0 z-50 ">
        <ProfileTopNavbar userName={user.name} />
      </div>
      <div className="flex flex-1 overflow-hidden  justify-between  w-full h-screen " >
        <div className="w-1/5 sticky top-0 h-[90vh] 2xl:pl-16 3xl:pl-20  pt-8">
        <ProfileSidebar user={user} />
        </div>
        <div className="overflow-y-auto h-screen pt-8 sticky top-0 flex justify-center" style={{scrollbarWidth:'none'}}>
        <DashboardOverview />
        </div>        
        <div className="sticky top-0 h-screen pt-8 2xl:mr-[68px] 3xl:mr-[88px]">
        <RightSideBarComp /> 
        </div>
      </div>
    </div>
  );
};

export default Profile;
