import React, { useState } from "react";

import uparrow from "../Assets/uparrow.svg";
import clock from "../Assets/clock.svg";
import Completed from '../Assets/icons/Completed.svg'

const DashboardCard = ({ course }) => {
  return (
    <div className="bg-white rounded-[20px] shadow-lg overflow-hidden border w-[100%] h-[100%] ">
      <img
        src={course?.image}
        alt={course?.title}
        className="w-full h-36 rounded-[40px] p-5"
      />
      <div className="p-5">
        <h3 className="font-semibol d text-lg text-gray-900 mb-1 mt-2">
          {course?.title}
        </h3>
        <div className="w-15 h-11  flex align-center justify-start pt-2 pb-2 gap-1 mb-2">
          <img src={clock} />
          <p className="text-gray-600 text-md ">{course?.duration}</p>
        </div>
        {course.status === "Completed" ? (
         <div className="flex mt-6">
                <img src={Completed} className="mr-2" alt="" /> 
            <p className="text-lg ext-grey-500 ">
               Complete
            </p>
          </div>
        ) : (
          <div>
            <div className="w-16 h-10  bg-purple-600 rounded-lg  flex align-center justify-center p-2  mb-4">
              <img src={uparrow} className=" p-1" />
              <p className="text-lg text-white mb-4 font-bold">
                {course?.progress}%
              </p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
              <div
                className="bg-purple-600 h-2.5 rounded-full"  
                style={{ width: `${course?.progress}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
 