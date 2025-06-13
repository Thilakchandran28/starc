import React from 'react';
import { ArrowLeft, Upload, BadgeCheck, Code2, Users, Sparkle } from 'lucide-react'; // Ensure all icons are imported

// Assuming these paths are correct relative to your project structure
// and that your bundler (e.g., Vite, Create React App, Next.js) handles them.
import girlpic from "../assests/girl.jpg";
import avatars from "../assests/avatar.jpg";
import chicks from "../assests/chick.jpg";
import boyz from "../assests/boy.jpg";

type Step = {
  number: string;
  icon: JSX.Element;
  title: string;
  description: string;
  bgColor: string;
};

const steps: Step[] = [
  {
    number: '01',
    icon: <ArrowLeft className="text-blue-500 w-5 h-5" />,
    title: 'Sign Up and create Account',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    bgColor: 'bg-blue-50',
  },
  {
    number: '02',
    icon: <Upload className="text-orange-500 w-5 h-5" />,
    title: 'Expression of interest',
    description: 'Lorem ipsum dolor sit amet consectr.',
    bgColor: 'bg-orange-50',
  },
  {
    number: '03',
    icon: <BadgeCheck className="text-purple-500 w-5 h-5" />,
    title: 'Get Discovered',
    description: 'Lorem ipsum dolor sit amet consectr.',
    bgColor: 'bg-purple-50',
  },
  // Added more steps to make the scroll effect noticeable
  {
    number: '04',
    icon: <Code2 className="text-green-500 w-5 h-5" />,
    title: 'Start Learning',
    description: 'Access exclusive courses and content.',
    bgColor: 'bg-green-50',
  },
  {
    number: '05',
    icon: <Users className="text-red-500 w-5 h-5" />,
    title: 'Join Community',
    description: 'Connect with other learners and experts.',
    bgColor: 'bg-red-50',
  },
  {
    number: '06',
    icon: <Sparkle className="text-yellow-500 w-5 h-5" />,
    title: 'Achieve Goals',
    description: 'Complete milestones and get certified.',
    bgColor: 'bg-yellow-50',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
        {/* Main heading */}
        <h2 className="text-4xl lg:text-5xl font-mont text-gray-900 mb-16 text-left">
          How It Works
        </h2>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Left Side Steps Container */}
          <div className="w-full lg:w-1/2 relative">
            {/* Scrollable container for steps */}
            <div
              className="space-y-20 h-[500px] w-[700px] lg:h-[600px] overflow-y-auto pr-11 pl-4 your-scrollable-div::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #a78bfa, #8b5cf6); /* Purple gradient */
  border-radius: 5px; "
              style={{
                /* Custom Scrollbar Styles for Webkit (Chrome, Safari) */
                WebkitOverflowScrolling: 'touch', // Enable momentum scrolling on iOS
                msOverflowStyle: 'none', // Hide scrollbar for IE/Edge
                scrollbarWidth: 'none', // Hide scrollbar for Firefox
              }}
            >
              {/* Webkit specific scrollbar styles (can be added to a global CSS file for cleaner separation) */}
              <style>{` 
                div::-webkit-scrollbar {
                  width: 8px;
                }
                div::-webkit-scrollbar-track {
                  background: #f0f0f0; /* Light gray track */
                  border-radius: 4px;
                }
                div::-webkit-scrollbar-thumb {
                  background: #888; /* Darker gray thumb */
                  border-radius: 4px;
                }
                div::-webkit-scrollbar-thumb:hover {
                  background: #555; /* Even darker on hover */
                }
              `}</style>

              {steps.map((step, index) => (
                <div
                  key={index} className={`relative flex items-center justify-center w-full`} // Ensure this is `relative` for the number's absolute positioning
                >
                  {/* Step Number */}
                  <div
                    className={`absolute font-mont text-purple-300 select-none`}
                    style={{
                      fontFamily: "'Qurova DEMO', sans-serif",
                      fontSize: '108px',
                      lineHeight: '100%',
                      letterSpacing: '0.03em',
                      // Positioning adjusted: now relative to the current step's div,
                      // and slightly offset to align with the cards.
                      // This ensures the number moves with the card as the container scrolls.
                      [index % 2 === 0 ? 'left' : 'right']: '-15px', // Adjusted offset
                      top: '50%', // Vertically center relative to its own container
                      transform: `translateY(-50%)`, // Correct vertical centering
                      zIndex: 0, // Behind the card
                      opacity: 1,
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Card Content */}
                  <div
                    className={`flex items-center gap-4 px-6 py-6 w-[475px] min-h-[105px] rounded-[20px] border border-gray-200 bg-white shadow-lg relative z-10 // z-10 to ensure card is above the number
                                transform transition-transform duration-300 hover:scale-[1.02]`}
                    style={{
                      // Adjusted for horizontal shift relative to the center of the step-item
                      transform: index % 2 === 0 ? 'translateX(60px)' : 'translateX(-60px)',
                    }}
                  >
                    <div className={`${step.bgColor} rounded-full p-2 shadow`}> {/* Use bgColor for icon background */}
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Image + Avatars */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between items-center lg:items-end p-4 lg:p-0"> {/* Added some padding for small screens */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-lg lg:max-w-none"> {/* Added max-w-lg for better responsiveness */}
              <div>
                <img
                  src={girlpic}
                  alt="Student working"
                  className="object-cover w-full h-[422px] rounded-[20px]"
                />
                <div className='whitebox'>
                  <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 flex items-center gap-3 shadow-md w-fit ">
                    <div className="flex -space-x-2">
                      {[avatars, chicks, boyz].map((src, index) => (
                        <img
                          key={index}
                          src={src}
                          alt={`User ${index + 1}`}
                          className="w-8 h-8 rounded-full border-2 border-white object-cover"
                        />
                      ))}
                    </div>
                    <div className="text-sm font-semibold text-blue-600">
                      10K+ <span className="text-gray-700 font-normal">Job Seekers</span>
                    </div>
                  </div>
                </div>

              </div>


              <div className="flex flex-col justify-between items-center lg:items-end">
                <img
                  src={girlpic} // You might want to use a different image for visual variety here
                  alt="Student 2"
                  className="object-cover w-full h-[565px] rounded-[20px] mb-4"
                />


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
