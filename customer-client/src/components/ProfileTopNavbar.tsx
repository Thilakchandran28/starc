import React from 'react';
import { Search, Bell, Heart, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProfileTopNavbar = () => {
  return (
    <div className="bg-white p-1 px-16 flex items-center justify-around shadow-md rounded-lg w-full h-20 ">
      {/* Logo */}
      <Link to="/" className="text-[#8A63FF] font-bold text-[36px]">LOGO</Link>

      {/* Search Bar */}
      <div className="relative flex-grow mx-[25%] ">
        <input
          type="text"
          placeholder="Search Anything here"
          className="w-full py-3 pl-10 pr-4 rounded-full  border border-purple-300 focus:outline-none focus:ring-2 focus:ring-[#8A63FF] focus:border-transparent"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>

      {/* User Icons */}
      <div className="flex items-center space-x-4">
        {/* <div className="p-2 rounded-full border border-purple-300 text-purple-600 cursor-pointer hover:bg-purple-50">
          <Link to="/notifications"><Bell size={20} /></Link>
        </div>
        <div className="p-2 rounded-full border border-purple-300 text-purple-600 cursor-pointer hover:bg-purple-50">
          <Link to="/wishlist"><Heart size={20} /></Link>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500 cursor-pointer">
          <img src="/placeholder.svg" alt="User Avatar" className="w-full h-full object-cover" />
        </div> */}
        <Link to="/notifications">
          <Button variant="ghost" size="icon" className="text-[#8A63FF]  border rounded-[50%] border-[#8A63FF] hover:text-white hover:bg-[#8A63FF]">
            <Bell className="h-6 w-6" />
          </Button>
        </Link>
        <Link to="/wishlist">
          <Button variant="ghost" size="icon" className="text-[#8A63FF]  border rounded-[50%] border-[#8A63FF] hover:bg-[#8A63FF] hover:text-white">
            <Heart className="h-6 w-6" />
          </Button>
        </Link>

        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#8A63FF] cursor-pointer">
          <img src="/placeholder.svg" alt="User Avatar" className="w-full h-full object-cover" />
        </div>


      </div>
    </div>
  );
};

export default ProfileTopNavbar;