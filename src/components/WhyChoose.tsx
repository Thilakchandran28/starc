import React from "react";
import { GraduationCap, BookOpen, Globe, MessageSquare } from "lucide-react";
import star from "../Assets/stargirl.jpg"; // Ensure the path is correct
import opp from "../Assets/opicon.png";
import learning from "../assests/learn.png";
import global from "../Assets/global.png";
import course from "../Assets/courses.png"

const WhyChoose: React.FC = () => {
  return (
    <section className="py-10 bg-white overflow-hidden relative"> {/* Added relative and overflow-hidden for circles */}
      {/* Concentric Circles Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 ">
        <div className="relative w-[38%]  aspect-square"> {/* Adjust w and max-w for size */}
          <div className="absolute inset-0 rounded-full" style={{ backgroundColor: "#9539E50A" }} ></div>
          <div className="absolute inset-[10%] rounded-full" style={{ backgroundColor: "#0066FF0D" }}></div>
          <div className="absolute inset-[20%] rounded-full" style={{ backgroundColor: "#9539E54A" }}></div>
        </div>
      </div>

      <div className="w-[70%] mx-auto px-4 sm:px-6 lg:px-8 pb-2 h-[100%] relative z-10"> {/* z-10 to bring content above circles */}


        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center w-[100%]  h-[100%]">
          {/* Left Cards Column */}
          <div className="flex flex-col gap-6  h-full  justify-end pb-[20%] items-end "> {/* items-end to push cards to the right (closer to center) */}
            {/* Courses Card */}
            <div className="w-[70%] grid grid-cols-1 bg-white rounded-3xl lg:p-1 3xl:p-2 shadow-2xl lg:text-xs xl:text-sm 2xl:text-base"> {/* Added max-w for consistency */}
              <div className="p-1 rounded-lg   flex items-center justify-center">
                {/* <GraduationCap className="w-6 h-6 text-purple-600" /> */}
                <div className="flex items-center justify-center">
                  <img src={course} className="lg:w-7 h-7" />
                </div>

              </div>
              <h3 className="font-semibold lg:text-[10px] xl:text-sm 2xl:text-base text-gray-900 mb-2 text-center">Courses</h3>
              <p className="lg:text-[8px] xl:text-sm 2xl:text-base text-gray-600 lg:mb-2 3xl:mb-4 text-center">Access a wide array of meticulously crafted  <br></br>courses.</p>
              <div className="flex items-center justify-center">
                <button className="bg-purple-600 flex items-center align-center text-white px-4 py-2 rounded-3xl  lg:text-[8px] xl:text-sm 2xl:text-base hover:bg-purple-700">
                  Courses
                </button>
              </div>
            </div>

            {/* 100K+ Card - Positioned below and slightly shifted based on image */}
            <div className="w-[70%] bg-white rounded-3xl p-1 shadow-2xl  mt-6"> {/* self-start for alignment, mt-6 for vertical spacing */}
              <div className="flex items-center  gap-1 p-1 ">
                <div className="p-3  rounded-lg w-fit">
                  {/* <Globe className="w-6 h-6 text-blue-600" /> */}
                  <img src={global} className="lg:w-7 h-7" />
                </div>
                <div >
                  <span className="lg:text-[10px] xl:text-sm 2xl:text-base font-semibold text-gray-900 text-left">100K+</span>
                  <p className="lg:text-[8px] xl:text-sm 2xl:text-base text-gray-600">Join 100,000+ learners globally.<br></br></p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Video Container */}
          <div className="flex justify-center items-center">
            {<div className="relative mx-auto w-[100%] h-[100%] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={star}
                alt="Video presenter"
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error("Error loading image:", e);
                  e.currentTarget.src = "https://via.placeholder.com/320x480";
                }}
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:text-lg xl:text-xl 2xl:text-2xl text-white px-4 py-2 rounded-lg shadow-md">
                {/* <span className="text-white font-semibold">Video</span> */}
              </div>
            </div>}
          </div>

          {/* Right Cards Column */}
          <div className="flex flex-col justify-start h-full pt-[20%] gap-6 items-start "> {/* items-start to push cards to the left (closer to center) */}
            {/* Opportunities Card - Positioned above and slightly shifted based on image */}
            <div className="w-[70%] bg-white rounded-xl lg:p-3 xl:p-4 3xl:p-6 shadow-2xl  mb-6 flex "> {/* self-end for alignment, mb-6 for vertical spacing */}
              <div className="p-1 flex justify-center items-center   rounded-lg w-fit">
                {/* <MessageSquare className="w-6 h-6 text-blue-600" /> */}
                <img src={opp} className="lg:w-7 h-7" />
              </div>
              <div className="flex justify-center items-center">
                <h3 className="font-semibold  text-gray-900  lg:text-[10px] xl:text-sm 2xl:text-base">Opportunities</h3>
              </div>

            </div>

            {/* Learning Card */}
            <div className="w-[70%] bg-white rounded-2xl lg:p-3 xl:p-4 3xl:p-6 shadow-2xl "> {/* Added max-w for consistency */}


              <div className="p-1 rounded-lg   flex items-center justify-center">
                {/* <GraduationCap className="w-6 h-6 text-purple-600" /> */}
                <div className="flex items-center justify-center">
                  <img src={opp} className="lg:w-7 h-7"></img>
                </div>

              </div>

              <h3 className="font-semibold  text-gray-900 mb-2 text-center lg:text-[10px] xl:text-sm 2xl:text-base">Learning</h3>
              <p className=" text-gray-600 text-center lg:text-[8px] xl:text-sm 2xl:text-base">Engage with interactive content,<br></br>expert instructors.</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
