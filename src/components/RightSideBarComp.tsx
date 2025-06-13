import React from 'react';

const RightSideBarComp = () => {


    const schedule = [
        { time: '10 AM', title: 'Meeting', description: 'Introduction class', duration: '10 AM - 11 AM' },
        { time: '11 PM', title: '', description: '', duration: '' },
        { time: '12 PM', title: 'Module 4', description: 'AWS Basics', duration: '12 PM - 01 PM' },
        { time: '01 PM', title: '', description: '', duration: '' },

        { time: '02 PM', title: '', description: '', duration: '' },
        { time: '03 PM', title: 'Module 4', description: 'AWS Basics', duration: '03 PM - 04 PM' },
        { time: '04 PM', title: '', description: '', duration: '' },



    ];


    return (
        <div>
            {/* Today's Schedule */}
            <div className="bg-white p-6 rounded-[16px] shadow-md col-span-1 lg:h-[80vh] w-[20%] fixed  top-32 right-11 overflow-x-auto h-auto" style={{scrollbarWidth:'none'}}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-900">Today's Schedule</h2>
                    <select className="border rounded-md px-2 py-1 text-sm">
                        <option>Weekly</option>
                    </select>
                </div>
                <p className="text-gray-500 text-sm mb-4">14 - May - 2025</p>
                <div className="flex space-x-2 mb-6">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                        <div key={index} className={`w-8 h-8 flex items-center justify-center rounded-full ${day === 'S' ? 'bg-purple-600 text-white' : 'text-gray-600'}`}>
                            {day}
                        </div>
                    ))}
                </div>
                <div className="space-y-2  ">
                    {schedule.map((item, index) => (
                        <div key={index} className="flex items-start py-2 border-t-2 h-[80px]">
                            <p className="text-gray-500 text-sm w-16 flex-shrink-0 ">{item.time}</p>
                            <div className={`${item.description?"border border-purple-300":""} rounded-[10px] w-[200px] py-1 pl-4 ml-2text-sm`}>
                                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                                <p className="text-gray-500 text-xs">{item.duration}</p>
                            </div>
                        </div>
                    ))}
                </div>  
            </div>
        </div>
    );
};

export default RightSideBarComp;
