import React from 'react';
import { ArrowLeft, Upload, BadgeCheck } from 'lucide-react';

// Import your image assets
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
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center">
          How It Works
        </h2>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Left Side Steps Container */}
          <div className="w-full lg:w-1/2 relative">
            <div className="space-y-20" style={{paddingLeft:"60px" }}>
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center w-full ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }` }
                >
                  {/* Step Number */}
                  <div
                    className={`absolute font-bold text-purple-300 select-none`} // Changed to text-purple-300 for better visibility
                    style={{
                      fontFamily: "'Qurova DEMO', sans-serif", // Fallback font
                      fontSize: '108px',
                      lineHeight: '100%',
                      letterSpacing: '0.03em',
                      [index % 2 === 0 ? 'left' : 'right']: '0px',
                      top: `${index * (105 + 80) + 30}px`, // Aligns with cards
                      zIndex: 0, // Behind the card but above background
                      opacity: 1,
                      paddingLeft:"20px" // Ensure visibility
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Card Content */}
                  <div
                    className={`flex items-center gap-4 px-6 py-6 w-[475px] min-h-[105px] rounded-[20px] border border-gray-200 bg-white shadow-lg
                               transform transition-transform duration-300 hover:scale-[1.02]`}
                    style={{
                      transform: index % 2 === 0 ? 'translateX(60px)' : 'translateX(-60px)',
                      zIndex: 1, // Ensure card is above the number
                    }}
                  >
                    <div className="bg-white rounded-full p-2 shadow">
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
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={girlpic}
                alt="Student working"
                className="object-cover"
                style={{ width: "198px", height: "422px", marginLeft: "16px", borderRadius: "20px" }}
              />

              <div className="flex flex-col justify-between">
                <img
                  src={girlpic}
                  alt="Student 2"
                  className="object-cover"
                  style={{ width: "341px", height: "565px", marginLeft: "16px", borderRadius: "20px" }}
                />

                <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 flex items-center gap-3 shadow-md">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;