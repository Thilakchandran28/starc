// src/components/SubmissionSuccess.tsx
import React from 'react';

const SubmissionSuccess: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-sm mx-auto my-10 text-center flex flex-col items-center justify-center min-h-[300px]">
      <h2 className="text-xl font-semibold mb-6 text-gray-700">Form Submitted</h2>
      <div className="relative w-24 h-24 mb-6">
        {/* Outer circle (light purple) */}
        <div className="absolute inset-1 bg-purple-200 rounded-full flex items-center justify-center"></div>
        {/* Middle circle (medium purple) */}
        <div className="absolute inset-4 bg-purple-500 rounded-full flex items-center justify-center"></div>
        {/* Inner circle (darker purple) */}
        <div className="absolute inset-8 bg-purple-300 rounded-full flex items-center justify-center">
          <svg
            className="w-10 h-10 text-white" // Slightly larger icon
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Double tick path */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M9 12l2 2 4-4m-6 4l2 2 4-4"
            ></path>
          </svg>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-purple-700 mb-2">
        Thank You for showing your Interest
      </h3>
      <p className="text-gray-600">Our team will get back to you soon</p>
    </div>
  );
};

export default SubmissionSuccess;