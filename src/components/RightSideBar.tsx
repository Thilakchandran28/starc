import React from 'react';
import trophy from '../Assets/trophy.svg';
import DashboardCard from './DashboardCard';
function RightSideBar() {

  const suggestedItems = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      image: '/placeholder.svg',
      imageAlt: 'AWS Certified Solutions Architect',
      duration: '3 Month',
      progress: 50,
    },

  ];

  return (
    // <div className="w-full lg:w-[300px] ml-auto space-y-8 flex flex-1 justify-center">
    // <div className="  px-8 lg:h-[80vh] lg:w-[30vw] fixed top-32 right-10">
      <div className='grid grid-cols-1  gap-10 mb-6 shadow-md bg-white w-[19%] p-6 mx-0 h-[90vh] rounded-[20px] fixed top-32 right-6'>
        {/* Complete Few Courses Card */}

        <div className="bg-purple-600 text-white p-6 pt-6 rounded-lg shadow-md  lg:h-[100%]  flex flex-col justify-between col-span-1 bg-[url('../Assets/cardaward.png')] bg-cover bg-center">
          <div>
            <h2 className="text-xl font-bold mb-2">Achieve with purpose</h2>
            <p className="text-purple-200 text-sm mb-4">Achieve with purpose Achieve with purpose Achieve with purpose.</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold">02/10</div>
            <img src={trophy} alt="Trophy" className="h-16 w-16" />
          </div>
          <button className="mt-4 bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 w-[10vw]">
            Start Now
          </button>
        </div>


        {/* Suggested Next Section */}

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Suggested Next</h3>
          <div className="flex flex-col-1 overflow-x-auto space-x-4 pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            {/* Mapping over the data array */}
            {suggestedItems.map((course) => (
              <div key={course.id}>
                <DashboardCard course={course} />
              </div>
            ))}
          </div>
        </div>
      </div>

    // </div>

  );
}

export default RightSideBar;
