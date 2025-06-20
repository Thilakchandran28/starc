import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Book, Calendar, Settings } from 'lucide-react';

const ProfileSidebar = () => {
  // fixed top-32 left-8
  return (
    <div className=" bg-white rounded-[16px] h-[80vh]  shadow-md p-4 lg:w-[190px]  xl:w-[220px]  2xl:w-[250px] 3xl:w-[274px] ">
      {/* User Profile Section */}
      <div className="flex items-center mb-6">  
        <div className="lg:w-12 lg:h-12 xl:w-16 xl:h-16 rounded-full overflow-hidden mr-4">
          <img src="/placeholder.svg" alt="User Avatar" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-gray-600 lg:text-[9px] xl:text-[11px] 2xl:text-sm">Hello!</p>
          <h2 className="lg:text-xs xl:text-sm 2xl:text-base 3xl:text-lg font-semibold text-gray-900">Jackson Durai</h2>
        </div>
      </div>  

      <hr className="border-gray-200 mb-6" />

      {/* Navigation Items */}
      <div className="mt-8 space-y-4">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg lg:text-xs xl:text-sm 2xl:text-base 3xl:text-lg transition-colors duration-200 ${isActive
              ? ' text-purple-600'
              : 'text-gray-700 hover:bg-gray-200'}`
          }
        >
          <LayoutDashboard className="w-5 h-5 mr-3" />
          Overview
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg lg:text-xs xl:text-sm 2xl:base 3xl:text-lg transition-colors duration-200 ${isActive
              ? ' text-purple-600'
              : 'text-gray-700 hover:bg-gray-200'}`
          }
        >
          <BookOpen className="w-5 h-5 mr-3" />
          Courses
        </NavLink>
        <NavLink
          to="/book"
          className={({ isActive }) =>
            `flex items-center py-3 px-3  rounded-lg lg:text-xs xl:text-sm 2xl:base 3xl:text-lg transition-colors duration-200 ${isActive
              ? ' text-purple-600'
              : 'text-gray-700 hover:bg-gray-200'}`
          }
        >
          <Book className="w-5 h-5 mr-3" />
          Books
        </NavLink>
        <NavLink
          to="/schedule"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg lg:text-xs xl:text-sm 2xl:base 3xl:text-lg transition-colors duration-200 ${isActive
              ? 'text-purple-600'
              : 'text-gray-700 hover:bg-gray-200'}`
          }
        >
          <Calendar className="w-5 h-5 mr-3" />
          Schedule
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg lg:text-xs xl:text-sm 2xl:base 3xl:text-lg transition-colors duration-200 ${isActive
              ? 'text-purple-600'
              : 'text-gray-700 hover:bg-gray-200'}`
          }
        >
          <Settings className="w-5 h-5 mr-3" />
          Settings
        </NavLink>
      </div>
    </div>
  );
};

export default ProfileSidebar;