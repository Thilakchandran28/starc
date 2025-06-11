import React from 'react';
import trophy from '../Assets/trophy.svg';
function RightSideBar() {
  return (
    // <div className="w-full lg:w-[300px] ml-auto space-y-8 flex flex-1 justify-center">
    <div className='grid grid-cols-1 lg:grid-cols-1 gap-10 mb-6'>
      {/* Complete Few Courses Card */}
      {/* <div className="relative p-6 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg shadow-lg text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://www.transparenttextures.com/patterns/hexagons.png)',
            backgroundSize: '100px',
          }}
        ></div>
        <div className="relative z-10">
          <h2 className="text-xl font-semibold mb-2">Complete Few Courses</h2>
          <p className="text-sm text-purple-200 mb-4">To Unlock over all Certificate</p>
          <p className="text-4xl font-bold mb-4">02/10</p>
          <div className="w-full bg-purple-400 h-2 rounded-full mb-6">
            <div className="bg-white h-full rounded-full" style={{ width: '20%' }}></div>
          </div>
          <button className="px-6 py-2 bg-white text-purple-700 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Start Now
          </button>
          <img
            src="https://i.imgur.com/8Q9P7Lg.png"
            alt="Trophy"
            className="absolute bottom-0 right-0 w-32 h-32 opacity-80"
          />
          <img
            src="https://i.imgur.com/Q2y2c6M.png"
            alt="Trophy"
            className="absolute bottom-0 right-16 w-24 h-24 opacity-80"
          />
        </div>
      </div> */}

      <div className="bg-purple-600 text-white p-6 rounded-lg shadow-md flex flex-col justify-between col-span-1 bg-[url('../Assets/cardaward.png')] bg-cover bg-center">
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
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <img
            src="https://via.placeholder.com/400x200/333333/ff0000?text=Hexagon+Pattern"
            alt="AWS Certified solutions Architect"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h4 className="text-lg font-semibold text-gray-900 mb-2">AWS Certified solutions Architect</h4>
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>3 Month</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="text-green-500 font-bold text-sm mr-2">↑ 50%</span>
            <div className="flex-grow bg-gray-200 h-2 rounded-full">
              <div className="bg-purple-600 h-full rounded-full" style={{ width: '50%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSideBar;
