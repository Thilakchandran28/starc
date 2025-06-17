import React, { useState } from 'react';
import user from "../Assets/Duplicateuser.png";
import Navbar from '@/components/Navbar';
import PurpleBox from '@/components/PurpleBox';
import Footer from '@/components/Footer';

const initialNotifications = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet consectetur. Dapibus placerat ornare ornare blandit morbi eget senectus tempus iaculis. Posuere bibendum lacinia pulvinar pharetra et.',
    date: 'March 1, 2025',
  },
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet consectetur. Diam eleifend erat hendrerit varius aliquet donec pulvinar. Tincidunt at malesuada viverra nibh consequat pellentesque nibh et libero.',
    date: 'February 26, 2025',
  },
  {
    id: 3,
    text: 'Lorem ipsum dolor sit amet consectetur. Consectetur sit quam sapien hendrerit eu eu vitae eget mauris. Lectus proin a tempus turpis.',
    date: 'April 25, 2025',
  },
  {
    id: 4,
    text: 'Lorem ipsum dolor sit amet consectetur. Id neque mattis lacus a adipiscing non. Aliquam amet venenatis eu maecenas mauris.',
    date: 'March 6, 2025',
  },
  {
    id: 5,
    text: 'Lorem ipsum dolor sit amet consectetur. Aliquam viverra ut placerat est vitae elit maecenas nibh. In senectus fermentum integer enim lobortis at.',
    date: 'March 1, 2025',
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleDelete = (id: number) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return (
    <div className=''>
        <Navbar/>
    <div className="m-4 p-6 pb-36 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold font-mont mb-6 pt-7 pb-5">Notifications</h1>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-start border-b pb-4">
            <img
              src={user}
              alt="user"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="flex-1">
              <p className="text-sm text-gray-700">{notification.text}</p>
              <p className="text-xs text-gray-500 mt-2">{notification.date}</p>
            </div>
            <button
              className="text-3xl pl-4 pt-2 font-light text-gray-600 ml-4 hover:text-red-500"
              onClick={() => handleDelete(notification.id)}
            >
              ×
            </button>
          </div>
        ))}
        {notifications.length === 0 && (
          <p className="text-center text-gray-400">No notifications left</p>
        )}
      </div>
    </div>
    <div className='flex justify-center'>
    <PurpleBox/>

    </div>
    <Footer/>
    </div>
  );
};

export default Notifications;
