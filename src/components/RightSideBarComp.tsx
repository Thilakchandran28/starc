
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
        <div className='bg-gray-100 '>

             {/* fixed  top-32  right-8 */}
            {/* Today's Schedule */}
            <div className="bg-white p-6 rounded-[16px] shadow-md col-span-1 lg:h-[80vh overflow-x-auto  p-4 " style={{scrollbarWidth:'none'}}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-900">Today's Schedule</h2>
                    <select className="border rounded-md px-2 py-1 text-sm lg:text-xs xl:text-sm 2xl:text-lg 3xl:text-xl">
                        <option>Weekly</option>
                    </select>
                </div>
                <p className="text-gray-500 text-sm mb-4 lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px]">14 - May - 2025</p>
                <div className="flex space-x-2 mb-6">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'SA'].map((day, index) => (
                        <div key={index} className={`w-8 h-8 flex items-center  justify-center rounded-full ${day === 'S' ? 'bg-purple-600 text-white' : 'text-gray-600'}`}>
                            {day}
                        </div>
                    ))}
                </div>
                <div className="space-y-2  ">
                    {schedule.map((item, index) => (
                        <div key={index} className="flex items-start py-2 border-t-2 h-[80px]  ">
                            <p className="text-gray-500 text-sm w-16 flex-shrink-0 lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]  ">{item.time}</p>
                            <div className={`${item.description?"border border-purple-300":""} rounded-[10px] w-[200px] lg:text-[12px] py-1 pl-1 3xl:ml-6 text-sm`}>
                                <h3 className="font-semibold text-gray-900 lg:text-[12px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[18px]">{item.title}</h3>
                                <p className="text-gray-600 text-sm lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">{item.description} </p>
                                <p className="text-gray-500 text-xs lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">{item.duration}</p>
                            </div>
                        </div>
                    ))}
                </div>  
            </div>
        </div>
    );
};

export default RightSideBarComp;
