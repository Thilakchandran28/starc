import React from "react";

const RightSideBarComp = () => {
  const schedule = [
    {
      time: "10 AM",
      title: "Meeting",
      description: "Introduction class",
      duration: "10 AM - 11 AM",
    },
    {
      time: "11 AM",
      title: "Module 2",
      description: "Fundamentals and basics",
      duration: "10 AM - 11 AM",
    },
    {
      time: "12 PM",
      title: "Module 4",
      description: "AWS Basics",
      duration: "10 AM - 11 AM",
    },
    {
      time: "01 PM",
      title: "Module 4",
      description: "AWS Basics",
      duration: "10 AM - 11 AM",
    },
    {
      time: "02 PM",
      title: "Module 4",
      description: "AWS Basics",
      duration: "10 AM - 11 AM",
    },
    {
      time: "03 PM",
      title: "Module 4",
      description: "AWS Basics",
      duration: "10 AM - 11 AM",
    },
    {
      time: "04 PM",
      title: "Module 4",
      description: "AWS Basics",
      duration: "10 AM - 11 AM",
    }
  ];

  return (
    <div>
      {/* Today's Schedule */}
      <div className="bg-white p-4 rounded-lg shadow-md col-span-1 lg:h-[915px] w-[380px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Today's Schedule</h2>
          <select className="border border-violet-5 00 text-violet-500 rounded-md px-2 py-1 text-sm">
            <option className="">Weekly</option>
          </select>
        </div>
        <p className="text-gray-500 text-sm mb-4">14 - May - 2025</p>
        <div className="flex justify-center rounded-md p-2 space-x-2 mb-6 bg-gray-200 w-[331px] ">
          {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
            <div
              key={index}
              className={`w-[40px] h-[40px] flex items-center justify-center rounded-md ${
                day === "M" ? "bg-purple-600 text-white" : "text-gray-600"
              }`}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {/* <hr /> */}
          {schedule.map((item, index) => (
            <div key={index} className="flex items-start">
              <p className="text-gray-500 text-sm w-16 flex-shrink-0">
                {item.time}
              </p>
              <div className="w-full pl-4 ml-2">
                <hr className="w-full" />
                <div className="border border-violet-300 w-[223px] p-2 rounded-2xl m-2">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <p className="text-gray-500 text-xs">{item.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSideBarComp;
