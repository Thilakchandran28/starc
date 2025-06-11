import React from 'react';

import uparrow from "../Assets/uparrow.svg"
import clock from "../Assets/clock.svg"

const DashboardCard = ({ course }) => {
    return (
        <div className="bg-white rounded-[20px] shadow-md overflow-hidden ">
            <img src={course.image} alt={course.title} className="w-full h-60 rounded-[40px] p-5" />
            <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{course.title}</h3>
                <div className="w-15 h-11  flex align-center justify-start pt-2 pb-2 gap-1 mb-2">
                    <img src={clock} />
                    <p className="text-gray-600 text-lg ">{course.duration}</p>
                </div>

                <div className="w-1/3 h-11  bg-purple-600 rounded-lg  flex align-center justify-center p-2 gap-0.5 mb-4">
                    <img src={uparrow} className=" p-1.5" />
                    <p className="text-2xl text-gray-500 text-white mb-4 font-bold">{course.progress}%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                </div>

            </div>
        </div>
    );
};

export default DashboardCard;