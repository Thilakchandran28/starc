import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Book, Calendar, Settings } from 'lucide-react';

const ProfileSidebar = () => {
  return (
    <div className="w-64 bg-white rounded-lg shadow-md p-6">
      {/* User Profile Section */}
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <img src="/placeholder.svg" alt="User Avatar" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-gray-600 text-sm">Hello!</p>
          <h2 className="text-lg font-semibold text-gray-900">Jackson Durai</h2>
        </div>
      </div>

      <hr className="border-gray-200 mb-6" />

      {/* Navigation Items */}
      <div className="mt-8 space-y-4">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors duration-200 ${isActive
              ? 'bg-purple-600 text-white'
              : 'text-gray-700 hover:bg-gray-200'}`
          }
        >
          <LayoutDashboard className="w-5 h-5 mr-3" />
          Overview
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors duration-200 ${isActive
              ? 'bg-purple-600 text-white'
              : 'text-gray-700 hover:bg-gray-200'}`
          }
        >
          <BookOpen className="w-5 h-5 mr-3" />
          Courses
        </NavLink>
        <NavLink
          to="/books"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors duration-200 ${isActive
              ? 'bg-purple-600 text-white'
              : 'text-gray-700 hover:bg-gray-200'}`
          }
        >
          <Book className="w-5 h-5 mr-3" />
          Books
        </NavLink>
        <NavLink
          to="/schedule"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors duration-200 ${isActive
              ? 'bg-purple-600 text-white'
              : 'text-gray-700 hover:bg-gray-200'}`
          }
        >
          <Calendar className="w-5 h-5 mr-3" />
          Schedule
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors duration-200 ${isActive
              ? 'bg-purple-600 text-white'
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