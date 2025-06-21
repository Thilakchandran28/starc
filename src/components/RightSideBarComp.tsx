const RightSideBarComp = () => {
  const schedule = [
    {
      time: "10 AM",
      title: "Meeting",
      description: "Introduction class",
      duration: "10 AM - 11 AM",
    },
    { time: "11 PM", title: "", description: "", duration: "" },
    {
      time: "12 PM",
      title: "Module 4",
      description: "AWS Basics",
      duration: "12 PM - 01 PM",
    },
    { time: "01 PM", title: "", description: "", duration: "" },

    { time: "02 PM", title: "", description: "", duration: "" },
    {
      time: "03 PM",
      title: "Module 4",
      description: "AWS Basics",
      duration: "03 PM - 04 PM",
    },
    { time: "04 PM", title: "", description: "", duration: "" },
  ];

  return (
    <div className="2xl:w-[300px] 3xl:w-[380px] 3xl:h-[80vh]">
      {/* fixed  top-32  right-8 */}
      {/* Today's Schedule */}
      <div
        className="bg-white p-6 rounded-[16px] shadow-md col-span-1 2xl:h-[80vh] 3xl:h-[80vh] overflow-y-auto   "
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#8A63FF] 2xl:text-base 3xl:text-xl">
            Today's Schedule
          </h2>
          <select className="text-[#8A63FF] border border-[#8A63FF] rounded-md px-2 py-1 text-sm lg:text-xs xl:text-sm 2xl:text-lg 3xl:text-sm">
            <option>Weekly</option>
          </select>
        </div>
        <p className="text-gray-500 text-sm mb-4 lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[14px]">
          14 - May - 2025
        </p>
        <div className="flex space-x-2 mb-6 bg-[#F3F3F3] w-fit p-2 rounded-md">
          {["S", "M", "T", "W", "T", "F", "SA"].map((day, index) => (
            <div
              key={index}
              className={`w-8 h-8 flex items-center  justify-center rounded-sm ${
                day === "S" ? "bg-[#8A63FF] text-white" : "text-black"
              }`}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="space-y-2  ">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="flex items-start py-2 h-[80px] "
            > 
              <div className="w-[15%] ">
                <p className="text-black text-sm w-16 flex-shrink-0 lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[14px]  ">
                  {item.time}
                </p>
              </div>
              <div className="border-t border-gray-400 ml-4 py-1  mt-2  w-[85%]">
                <div
                className={`${
                  item.description ? "border  border-purple-300" : ""
                } rounded-[20px] w-[223px] lg:text-[12px] py-2 px-4 3xl:ml-6 text-sm  `}
              >
                <h3 className="font-semibold text-black lg:text-[12px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[11px]">
                  {item.title}
                </h3>
                <p className="text-black text-sm lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[14px] w-fit">
                  {item.description}{" "}
                </p>
                <p className="text-gray-500 text-xs lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[11px]">
                  {item.duration}
                </p>
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
