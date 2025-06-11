import React, { useState } from 'react';
import { User, Lock, Bell } from 'lucide-react';
const SettingsTabs = () => {
  const [activeTab, setActiveTab] = useState('edit');
  const tabs = [
    { id: 'edit', label: 'Edit Profile', icon: <User className="w-4 h-4 mr-1" /> },
    { id: 'account', label: 'Account', icon: <Lock className="w-4 h-4 mr-1" /> },
    { id: 'notification', label: 'Notification', icon: <Bell className="w-4 h-4 mr-1" /> },
  ];
  const renderContent = () => {
    switch (activeTab) {
      case 'edit':
        return (
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                defaultValue="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                defaultValue="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                defaultValue="Tamilnadu,Chennai"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date Of Birth</label>
              <input
                type="date"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                defaultValue="Dec,17,2003"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                defaultValue="+1 234 567 890"
              />
            </div>
            <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
              Save Changes
            </button>
          </form>
        );
      case 'account':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Current Password</label>
              <input
                type="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                type="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
              <input
                type="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
              Save Changes
            </button>
            <div>
              <label className="block text-sm font-medium text-gray-700">New Username</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Username"
              />
              <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                Save Username
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Language</label>
              <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>English, India</option>
                <option>English, US</option>
              </select>
              <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                Save Language
              </button>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-gray-700">Delete your account permanently</p>
              <label className="flex items-center mt-2 space-x-2">
                <input type="checkbox" className="h-4 w-4 text-purple-600 focus:ring-purple-500" />
                <span className="text-sm">Confirm Delete your account</span>
              </label>
              <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                Delete My Account
              </button>
            </div>
          </div>
        );
      case 'notification':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile push notification</label>
              <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>All New Messages</option>
                <option>Important Only</option>
              </select>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800">Email Notifications</h3>
              <p className="text-sm text-gray-600 mt-1">
                Lorem ipsum dolor sit amet consectetur. Tincidunt sed enim mi proin fermentum.
              </p>
            </div>
            <fieldset className="space-y-2">
              <legend className="text-sm font-medium text-gray-700">Send me Email Notifications</legend>
              <label className="flex items-center space-x-2">
                <input type="radio" name="emailNotify" className="text-purple-600" defaultChecked />
                <span className="text-sm">Send me email notifications</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="emailNotify" className="text-purple-600" />
                <span className="text-sm">Once an hour at most</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="emailNotify" className="text-purple-600" />
                <span className="text-sm">Never</span>
              </label>
            </fieldset>
            <div>
              <h3 className="text-sm font-semibold text-gray-800">More Email Preferences</h3>
              <p className="text-sm text-gray-600">
                You can select more detailed options below.
              </p>
              <label className="flex items-center mt-2 space-x-2">
                <input type="checkbox" className="h-4 w-4 text-purple-600" />
                <span className="text-sm">Title text goes here</span>
              </label>
              <label className="flex items-center mt-2 space-x-2">
                <input type="checkbox" className="h-4 w-4 text-purple-600" />
                <span className="text-sm">Title text goes here</span>
              </label>
            </div>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
              Delete My Account
            </button>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md">
        {/* Tabs */}
        <div className="flex border-b px-6 pt-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 mr-4 text-sm font-medium ${
                activeTab === tab.id
                  ? 'border-b-2 border-purple-600 text-purple-600'
                  : 'text-gray-500 hover:text-purple-600'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
        {/* Content */}
        <div className="p-6">{renderContent()}</div>
      </div>
    </div>
  );
};
export default SettingsTabs;