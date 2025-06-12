import React from 'react';
import { Search, Bell, Heart } from 'lucide-react';

const ProfileTopNavbar = () => {
  return (
    <div className="bg-white p-4 flex items-center justify-between shadow-md rounded-lg mb-6">
      {/* Logo */}
      <div className="text-purple-600 font-bold text-2xl">LOGO</div>

      {/* Search Bar */}
      <div className="relative flex-grow mx-8">
        <input
          type="text"
          placeholder="Search Anything here"
          className="w-full py-2 pl-10 pr-4 rounded-full bg-gray-100 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>

      {/* User Icons */}
      <div className="flex items-center space-x-4">
        <div className="p-2 rounded-full border border-purple-300 text-purple-600 cursor-pointer hover:bg-purple-50">
          <Bell size={20} />
        </div>
        <div className="p-2 rounded-full border border-purple-300 text-purple-600 cursor-pointer hover:bg-purple-50">
          <Heart size={20} />
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500 cursor-pointer">
          <img src="/placeholder.svg" alt="User Avatar" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ProfileTopNavbar;