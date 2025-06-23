import React, { useState, useRef } from "react";
import { User, Lock, Bell } from "lucide-react";
import camera from "../Assets/Camera.svg";

const SettingsTabs = () => {
  const [activeTab, setActiveTab] = useState("edit");
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  // State for Edit Profile form
  const [profileForm, setProfileForm] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    location: "Tamilnadu, Chennai",
    dateOfBirth: "2003-12-17",
    phone: "+1 234 567 890",
  });

  // State for Account form (passwords and username)
  const [accountForm, setAccountForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    username: "",
    language: "English, India",
  });

  // State for Notification settings
  const [notificationForm, setNotificationForm] = useState({
    pushNotification: "All New Messages",
    emailNotification: "Send me email notifications",
    morePreferences: {
      option1: false,
      option2: false,
    },
  });

  const tabs = [
    {
      id: "edit",
      label: "Edit Profile",
      icon: <User className="w-4 h-4 mr-1" />,
    },
    {
      id: "account",
      label: "Account",
      icon: <Lock className="w-4 h-4 mr-1" />,
    },
    {
      id: "notification",
      label: "Notification",
      icon: <Bell className="w-4 h-4 mr-1" />,
    },
  ];

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  // Handle camera icon click to trigger file input
  const handleCameraClick = () => {
    fileInputRef.current.click();
  };

  // Handle form submission for Edit Profile
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Updated:", profileForm);
  };

  // Handle form submission for Account
  const handleAccountSubmit = (e) => {
    e.preventDefault();
    console.log("Account Updated:", accountForm);
  };

  // Handle form submission for Notification
  const handleNotificationSubmit = (e) => {
    e.preventDefault();
    console.log("Notification Settings Updated:", notificationForm);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "edit":
        return (
          <form className="space-y-8" onSubmit={handleProfileSubmit}>
            <div className="flex items-center mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden mr-4 relative">
                <img
                  src={selectedImage || "/placeholder.svg"}
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
                <img
                  src={camera}
                  alt="Camera Icon"
                  className="w-[50%] h-[50%] absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer"
                  onClick={handleCameraClick}
                />
                {/* <input
                  type="png"
                  accept="image/*"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleImageChange}
                /> */}

                <input
                  type="file" // Changed from type="png" to type="file"
                  accept="image/png, image/jpeg" // Specify allowed image types
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>
              <div>
                <p className="text-gray-900 text-sm">Upload Photo</p>
                <p className="text-sm text-gray-400">1000 x 1000</p>
                <p className="text-sm text-gray-400">
                  Image size should be under 1MB and image ratio needs to be 1:1
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                className="mt-1 block w-[40%] px-3 py-2 border rounded-[30px] bg-gray-100 text-gray-400 focus:ring-purple-500 focus:border-purple-500"
                value={profileForm.fullName}
                onChange={(e) =>
                  setProfileForm({ ...profileForm, fullName: e.target.value })
                }
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <input
                id="location"
                type="text"
                className="mt-1 block w-[40%] px-3 py-2 border rounded-[30px] bg-gray-100 text-gray-400 focus:ring-purple-500 focus:border-purple-500"
                value={profileForm.location}
                onChange={(e) =>
                  setProfileForm({ ...profileForm, location: e.target.value })
                }
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-medium text-gray-700"
              >
                Date Of Birth
              </label>
              <input
                id="dateOfBirth"
                type="date"
                className="mt-1 block w-[40%] px-3 py-2 border rounded-[30px] bg-gray-100 text-gray-400 focus:ring-purple-500 focus:border-purple-500"
                value={profileForm.dateOfBirth}
                onChange={(e) =>
                  setProfileForm({
                    ...profileForm,
                    dateOfBirth: e.target.value,
                  })
                }
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                className="mt-1 block w-[40%] px-3 py-2 border rounded-[30px] bg-gray-100 text-gray-400 focus:ring-purple-500 focus:border-purple-500"
                value={profileForm.phone}
                onChange={(e) =>
                  setProfileForm({ ...profileForm, phone: e.target.value })
                }
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 block w-[40%] px-3 py-2 border rounded-[30px] bg-gray-100 text-gray-400 focus:ring-purple-500 focus:border-purple-500"
                value={profileForm.email}
                onChange={(e) =>
                  setProfileForm({ ...profileForm, email: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-[30px] hover:bg-purple-700"
            >
              Save Changes
            </button>
          </form>
        );
      case "account":
        return (
          <div className="space-y-8">
            <form onSubmit={handleAccountSubmit} className="space-y-5">
              <div className="space-y-4">
                <label
                  htmlFor="currentPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Current Password
                </label>
                <input
                  id="currentPassword"
                  type="password"
                  className="mt-1 block w-[40%] px-3 py-2 border rounded-[30px] bg-gray-100 text-gray-400"
                  value={accountForm.currentPassword}
                  onChange={(e) =>
                    setAccountForm({
                      ...accountForm,
                      currentPassword: e.target.value,
                    })
                  }
                />
              </div>
              <div className="space-y-4">
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <input
                  id="newPassword"
                  type="password"
                  className="mt-1 block w-[40%] px-3 py-2 border rounded-[30px] bg-gray-100 text-gray-400"
                  value={accountForm.newPassword}
                  onChange={(e) =>
                    setAccountForm({
                      ...accountForm,
                      newPassword: e.target.value,
                    })
                  }
                />
              </div>
              <div className="space-y-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm New Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  className="mt-1 block w-[40%] px-3 py-2 border rounded-[30px] bg-gray-100 text-gray-400"
                  value={accountForm.confirmPassword}
                  onChange={(e) =>
                    setAccountForm({
                      ...accountForm,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-[30px] hover:bg-purple-700">
                Save Changes
              </button>
            </form>
            <div className="space-y-3">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                New Username
              </label>
              <input
                id="username"
                type="text"
                className="mt-1 block w-[40%] rounded-[30px] bg-gray-100 text-gray-300 px-3 py-2"
                placeholder="Username"
                value={accountForm.username}
                onChange={(e) =>
                  setAccountForm({ ...accountForm, username: e.target.value })
                }
              />
              <button
                className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-[30px] hover:bg-purple-700"
                onClick={() =>
                  console.log("Username Updated:", accountForm.username)
                }
              >
                Save Username
              </button>
            </div>
            <div className="space-y-3">
              <label
                htmlFor="language"
                className="block text-sm font-medium text-gray-700"
              >
                Select Language
              </label>
              <select
                id="language"
                className="mt-1 block w-[40%] px-3 py-2 border rounded-[30px] bg-gray-100 text-gray-400"
                value={accountForm.language}
                onChange={(e) =>
                  setAccountForm({ ...accountForm, language: e.target.value })
                }
              >
                <option value="English, India">English (India)</option>
                <option value="English, US">English (US)</option>
              </select>
              <button
                className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-[30px] hover:bg-purple-700"
                onClick={() =>
                  console.log("Language Updated:", accountForm.language)
                }
              >
                Save Language
              </button>
            </div>
            <div className="pt-4 border-t space-y-3">
              <p className="text-sm text-gray-700">
                Delete your account permanently
              </p>
              <label className="flex items-center mt-2 space-x-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm">Confirm Delete your account</span>
              </label>
              <button
                className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-[30px] hover:bg-purple-700"
                onClick={() => console.log("Account Deletion Requested")}
              >
                Delete My Account
              </button>
            </div>
          </div>
        );
      case "notification":
        return (
          <form className="space-y-10" onSubmit={handleNotificationSubmit}>
            <div className="space-y-4">
              <label
                htmlFor="pushNotification"
                className="block text-md font-medium text-gray-700"
              >
                Mobile push notification
              </label>
              <select
                id="pushNotification"
                className="mt-1 block w-full text-grey-700 rounded-lg px-3 py-2 border border-gray-300"
                value={notificationForm.pushNotification}
                onChange={(e) =>
                  setNotificationForm({
                    ...notificationForm,
                    pushNotification: e.target.value,
                  })
                }
              >
                <option value="All New Messages">All New Messages</option>
                <option value="Important Only">Important Only</option>
              </select>
            </div>
            <div className="space-y-4">
              <h3 className="text-md font-semibold text-gray-800">
                Email Notifications
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Control the types of email notifications you receive. You can choose to be notified about account activity, promotional offers, or important updates. We'll only send you relevant information based on your selections.
              </p>
            </div>
            <fieldset className="space-y-4">
              <legend className="text-md font-medium text-gray-700">
                Send me Email Notifications
              </legend>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="emailNotify"
                  className="text-purple-600"
                  value="Send me email notifications"
                  checked={
                    notificationForm.emailNotification ===
                    "Send me email notifications"
                  }
                  onChange={(e) =>
                    setNotificationForm({
                      ...notificationForm,
                      emailNotification: e.target.value,
                    })
                  }
                />
                <span className="text-sm">Send me email notifications</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="emailNotify"
                  className="text-purple-600"
                  value="Once an hour at most"
                  checked={
                    notificationForm.emailNotification ===
                    "Once an hour at most"
                  }
                  onChange={(e) =>
                    setNotificationForm({
                      ...notificationForm,
                      emailNotification: e.target.value,
                    })
                  }
                />
                <span className="text-sm">Once an hour at most</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="emailNotify"
                  className="text-purple-600"
                  value="Never"
                  checked={notificationForm.emailNotification === "Never"}
                  onChange={(e) =>
                    setNotificationForm({
                      ...notificationForm,
                      emailNotification: e.target.value,
                    })
                  }
                />
                <span className="text-sm">Never</span>
              </label>
            </fieldset>
            <div className="space-y-4">
              <h3 className="text-md font-semibold text-gray-800">
                More Email Preferences
              </h3>
              <p className="text-sm text-gray-600">
                Further customize your email preferences. Select specific categories or types of emails you wish to receive or opt-out of. Manage your subscription to ensure you get the most out of your experience
              </p>
              <label className="flex items-center mt-2 space-x-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-purple-600"
                  checked={notificationForm.morePreferences.option1}
                  onChange={(e) =>
                    setNotificationForm({
                      ...notificationForm,
                      morePreferences: {
                        ...notificationForm.morePreferences,
                        option1: e.target.checked,
                      },
                    })
                  }
                />
                <span className="text-sm">Title text goes here</span>
              </label>
              <label className="flex items-center mt-2 space-x-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-purple-600"
                  checked={notificationForm.morePreferences.option2}
                  onChange={(e) =>
                    setNotificationForm({
                      ...notificationForm,
                      morePreferences: {
                        ...notificationForm.morePreferences,
                        option2: e.target.checked,
                      },
                    })
                  }
                />
                <span className="text-sm">Title text goes here</span>
              </label>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-[30px] hover:bg-purple-700"
            >
              Save Changes
            </button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-10 min-h-screen w-[60vw] top-32">
      {/* Avatar Preview Above Tabs */}

      <div className="w-full mx-auto bg-white rounded-[40px] shadow-md">
        {/* Tabs */}
        <div className="flex border-b px-6 pt-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 mr-4 text-sm font-medium ${
                activeTab === tab.id
                  ? "border-b-2 border-purple-600 text-purple-600"
                  : "text-gray-500 hover:text-purple-600"
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
