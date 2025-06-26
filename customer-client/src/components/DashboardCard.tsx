import React from "react";

import uparrow from "../Assets/uparrow.svg";
import clock from "../Assets/clock.svg";
import Completed from '../Assets/icons/Completed.svg';
import defaultCourseImage from '../Assets/icons/course1.svg';

interface CourseProps {
  id: string;
  title: string;
  duration: string;
  progress: number;
  image?: string;
  status: string;
}

interface DashboardCardProps {
  course: CourseProps;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ course }) => {
  // Check if course object exists
  if (!course) {
    return null;
  }

  // Get status from course or calculate it from progress
  const status = course.status || (course.progress === 100 ? "Completed" : `${course.progress}%`);

  return (
    <div className="rounded-[20px] flex justify-center items-center shadow-lg overflow-hidden border 3xl:w-[309px] 3xl:h-[335px] ">
      <div className="3xl:w-[269px] 3xl:h-[295px]">
        <div className="h-[182px] w-full">
          <img
            src={course.image || defaultCourseImage}
            alt={course.title || "Course"}
            className="w-full h-full object-cover rounded-[15px]"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = defaultCourseImage;
            }}
          />
        </div>
        <div className="3xl:h-[97px] mt-4">
          <h3 className="font-semibold text-[14px] text-gray-900">
            {course.title || "Untitled Course"}
          </h3>
          <div className="w-15 h-11 flex items-center justify-start gap-x-3">
            <img src={clock} className="3xl:h-[21px] 3xl:w-[19px] mr-1" alt="Duration" />
            <p className="text-gray-600 text-[12px]">{course.duration || "N/A"}</p>
          </div>
          {status === "Completed" ? (
            <div className="flex">
              <img src={Completed} className="mr-2 3xl:h-[24px] 3xl:w-[24px]" alt="Completed" /> 
              <p className="text-[16px] text-gray-500"> 
                Complete
              </p>
            </div>
          ) : (
            <div>
              <div className="3xl:w-[54px] 3xl:h-[20px] bg-purple-600 rounded-lg flex items-center justify-center mb-2">
                <img src={uparrow} className="p-1" alt="Progress" />
                <p className="3xl:text-[13px] text-white font-semibold">
                  {course.progress || 0}%
                </p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div
                  className="bg-purple-600 3xl:h-[8px] rounded-full"  
                  style={{ width: `${course.progress || 0}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
 