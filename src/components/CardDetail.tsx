import React from 'react';
import WallOfLove from './WallOfLove';
import PurpleBox from './PurpleBox';
import Footer from './Footer';
import Backarrow from '../Assets/back.png';
import Behance from '../Assets/ion_logo-behance.png';
import linkedin from '../Assets/mdi_linkedin.png';
import resume from '../Assets/pepicons-print_cv.png';
import interview from '../Assets/interview.png';
import coc from '../Assets/Group 18504.png';
import reference from '../Assets/Group 18499.png';
import skill from '../Assets/Group 18500.png';
import mentor from '../Assets/Group 18501.png';
import human from '../Assets/human.png';
import frame from '../Assets/frame.png';
import { useNavigate } from 'react-router-dom';
import Enroll from './Enroll';
import { IoArrowBack } from 'react-icons/io5'; // Importing the left arrow icon
import Navbar from './Navbar';
import SubmissionSuccess from './SubmissionSuccess';
const CardDetail: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex-col min-h-[800px] bg-gray-50 font-mont ">
        <Navbar/>
      {/* Flex Row for Main Content and Enroll Sidebar */}
      <div className="flex">
        {/* Main Content Area */}
        <div className="w-2/3 p-20">
          {/* Supervised Course Tag with Back Arrow */}
          <div className="mb-4 flex items-center space-x-3">
            
            {/* Back Button */}
            <button
              onClick={handleGoBack}
              className="flex items-center bg-[#8A63FF] text-white text-sm font-semibold px-4 py-1 rounded-full hover:bg-[#6D28D9] transition"
            >
              <IoArrowBack className="mr-1" />
              Back
            </button>
            {/* Supervised Course Tag */}
            <span className="inline-block bg-[#8A63FF] text-white text-sm font-semibold px-4 py-1 rounded-full">
              Supervised Course
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold text-black mb-6">AWS Certified Solutions Architect</h1>

          {/* Description */}
          <p className="text-gray-600 text-base mb-8">
            Lorem ipsum dolor sit amet consectetur. Ut sed non elit adipiscing bibendum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* --------------- */}
          <div className="bg-white p-6 shadow-[0_0_10px_0_rgba(0,0,0,0.2)] rounded-lg">
            {/* What You'll Learn Section */}
            <div className="mb-8">
              <div className="grid grid-cols-1 mb-4 w-full">
                <h2 className="text-xl font-semibold text-[#8A63FF] ">What You'll Learn</h2>
                <p className=''>UI/UX Design Fundamentals :</p>
                <div className="flex items-end pl-60">
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-5">
                  <li className="flex items-center text-gray-600">
                    <div className="flex items-end pl-1">
                      <img src={frame} alt="" className="w-5 h-5" />
                    </div>
                    Understanding Design Principles &<br/> User Psychology
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="flex items-end pl-1">
                      <img src={frame} alt="" className="w-5 h-5" />
                    </div>
                    Wireframing and <br/>Prototyping with Figma & Adobe XD
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="flex items-end pl-1">
                      <img src={frame} alt="" className="w-5 h-5" />
                    </div>
                    Creating High-Fidelity Designs & <br/>Interactive Mockups
                  </li>
                </ul>
                <ul className="space-y-5">
                  <li className="flex items-center text-gray-600">
                    <div className="flex items-end pl-1">
                      <img src={frame} alt="" className="w-5 h-5" />
                    </div>
                    User Research, Personas, and Journey Mapping
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="flex items-end pl-1">
                      <img src={frame} alt="" className="w-5 h-5" />
                    </div>
                    Responsive Design for Web & Mobile Interfaces
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="flex items-end pl-1">
                      <img src={frame} alt="" className="w-5 h-5" />
                    </div>
                    Usability Testing and Design Iteration
                  </li>
                </ul>
              </div>
            </div>
<div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-600"></div>
            {/* Value Beyond the Classroom Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-[#8A63FF] mb-4">VALUE BEYOND THE CLASSROOM</h2>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center space-y-2">
                  <div className=" rounded-full flex items-center justify-center">
                    <div className="flex items-end pl-1">
                      <img src={Behance} alt="" className="w-15 h-12" />
                    </div>
                  </div>
                  <p className="text-gray-600 font-mont font-semibold">Behance Profile</p>
                  <p className="text-gray-500 text-sm">
                    Showcase projects, collaborate, network, showcase skills, attract opportunities
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto mb-2 bg-white-600 flex items-center justify-center">
                    <div className="flex items-end pl-1">
                      <img src={linkedin} alt="" className="w-15 h-12" />
                    </div>
                  </div>
                  <p className="text-gray-600 font-mont font-semibold">LinkedIn Profile</p>
                  <p className="text-gray-500 text-sm">Highlight skills, projects, career growth</p>
                </div>
                <div className="text-center space-y-2">
                  <div className=" mx-auto mb-2  flex items-center justify-center">
                    <div className="flex items-end pl-1">
                      <img src={resume} alt="" className="w-12 h-12" />
                    </div>
                  </div>
                  <p className="text-gray-600 font-mont font-semibold">Resume Building</p>
                  <p className="text-gray-500 text-sm">
                    Master communication, negotiation, and interview skills
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className=" rounded-full flex items-center justify-center">
                    <div className="flex items-end pl-1">
                      <img src={interview} alt="" className="w-12 h-12" />
                    </div>
                  </div>
                  <p className="text-gray-600 font-mont font-semibold">Interview Preparation</p>
                  <p className="text-gray-500 text-sm">Guidance, mock interviews, feedback</p>
                </div>
              </div>
            </div>
<div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-600"></div>
            {/* What You'll Get Section */}
            <div className="">
              <h2 className="text-xl font-semibold text-[#8A63FF] mb-4">What You'll Get</h2>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <div className="flex items-end pl-0">
                      <img src={coc} alt="" className="w-12 h-12" />
                    </div>
                  </div>
                  <p className="text-gray-600 font-mont font-semibold">Certificate of Completion</p>
                  <p className="text-gray-500 text-sm">
                    Receive a certificate to validate your skills and enhance your profile
                  </p>
                </div>
                <div className="text-center">
                  <div className=" flex items-center justify-center">
                    <div className="flex items-end pl-0">
                      <img src={reference} alt="" className="w-12 h-12" />
                    </div>
                  </div>
                  <p className="text-gray-600 font-mont font-semibold">Reference Materials</p>
                  <p className="text-gray-500 text-sm">
                    Access comprehensive materials to support continued learning
                  </p>
                </div>
                <div className="text-center">
                  <div className=" flex items-center justify-center">
                    <div className="flex items-end pl-0">
                      <img src={skill} alt="" className="w-12 h-12" />
                    </div>
                  </div>
                  <p className="text-gray-600 font-mont font-semibold">Skill Assessment</p>
                  <p className="text-gray-500 text-sm">
                    Evaluate your expertise with in-depth skill assessments
                  </p>
                </div>
                <div className="text-center">
                  <div className=" flex items-center justify-center">
                    <div className="flex items-end pl-0">
                      <img src={mentor} alt="" className="w-12 h-12" />
                    </div>
                  </div>
                  <p className="text-gray-600 font-mont font-semibold">Mentorship Guidance</p>
                  <p className="text-gray-500 text-sm">
                    Get guidance and feedback from industry experts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Sidebar (Enroll Component) */}
        <div className="w-1/3 flex items-center justify-center p-6 sticky top-0 h-screen overflow-y-auto">
          <Enroll />
        </div>
        {/* <SubmissionSuccess/> */}
      </div>

      {/* Other Components */}
      <WallOfLove />
      <div className='flex justify-center'>

      <PurpleBox />
      </div>
      <Footer />
    </div>
  );
};

export default CardDetail;