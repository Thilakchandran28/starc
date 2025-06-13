import React from "react";
import { GraduationCap, BookOpen, Globe, MessageSquare } from "lucide-react";
import star from "../assests/stargirl.jpg"; // Ensure the path is correct
import opp from "../assests/opicon.png";
import learning from "../assests/learn.png";
import glo from "../assests/global.png";
import course from "../assests/courses.png"

const WhyChoose: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden relative"> {/* Added relative and overflow-hidden for circles */}
      {/* Concentric Circles Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative w-[100%] max-w-[700px] aspect-square"> {/* Adjust w and max-w for size */}
          <div className="absolute inset-0 rounded-full" style={{ backgroundColor: "#9539E50A" }} ></div>
          <div className="absolute inset-[10%] rounded-full" style={{ backgroundColor: "#0066FF0D" }}></div>
          <div className="absolute inset-[20%] rounded-full" style={{ backgroundColor: "#9539E54A" }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10"> {/* z-10 to bring content above circles */}
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Starc?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Neque enim et non enim egestas. Etiam nec quam velit interdum at tortor velit quis.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Cards Column */}
          <div className="flex flex-col gap-6 items-end"> {/* items-end to push cards to the right (closer to center) */}
            {/* Courses Card */}
            <div className="w-full max-w-[300px] grid grid-cols-1 bg-white rounded-xl p-6 shadow-lg"> {/* Added max-w for consistency */}
              <div className="p-3 rounded-lg w-fit mb-4 flex items-center justify-center">
                {/* <GraduationCap className="w-6 h-6 text-purple-600" /> */}
                <div className="flex items-center justify-center">
                  <img src={course}></img>
                </div>
                
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2 text-center">Courses</h3>
              <p className="text-sm text-gray-600 mb-4 text-center">Lorem ipsum dolor sit amet<br></br> consectetur.</p>
              <div className="flex items-center justify-center">
                <button className="bg-purple-600 flex items-center align-center text-white px-4 py-2 rounded-lg   hover:bg-purple-700">
                  Courses
                </button>
              </div>
            </div>

            {/* 100K+ Card - Positioned below and slightly shifted based on image */}
            <div className="w-full max-w-[300px] bg-white rounded-xl p-6 shadow-lg self-start mt-6"> {/* self-start for alignment, mt-6 for vertical spacing */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3  rounded-lg w-fit">
                  {/* <Globe className="w-6 h-6 text-blue-600" /> */}
                  <img src={glo}></img>
                </div>
                <span className="text-lg font-semibold text-gray-900">100K+</span>
              </div>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet <br></br> consectetur.</p>
            </div>
          </div>

          {/* Center Video Container */}
          <div className="flex justify-center items-center">
            { <div className="relative mx-auto w-[320px] h-[480px] rounded-3xl overflow-hidden shadow-lg"> 
              <img
                src={star}
                alt="Video presenter"
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error("Error loading image:", e);
                  e.currentTarget.src = "https://via.placeholder.com/320x480";
                }}
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-md">
                <span className="text-gray-900 font-semibold">Video</span>
              </div>
            </div> }
          </div>

          {/* Right Cards Column */}
          <div className="flex flex-col gap-6 items-start"> {/* items-start to push cards to the left (closer to center) */}
            {/* Opportunities Card - Positioned above and slightly shifted based on image */}
            <div className="w-full max-w-[300px] bg-white rounded-xl p-6 shadow-lg self-end mb-6"> {/* self-end for alignment, mb-6 for vertical spacing */}
              <div className="p-3  rounded-lg w-fit mb-4">
                {/* <MessageSquare className="w-6 h-6 text-blue-600" /> */}
                <img src={opp}></img>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Opportunities</h3>

            </div>

            {/* Learning Card */}
            <div className="w-full max-w-[300px] bg-white rounded-xl p-6 shadow-lg"> {/* Added max-w for consistency */}
              <div className="p-3  rounded-lg w-fit mb-4">
                {/* <BookOpen className="w-6 h-6 text-blue-600" /> */}
                <img src={opp}></img>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2 text-center">Learning</h3>
              <p className="text-sm text-gray-600 text-center">Lorem ipsum dolor sit amet<br></br>consectetur.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
