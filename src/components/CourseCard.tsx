import React from 'react';
import { Course } from './CardDetail';

const CourseCard: React.FC<Course> = ({ title, learnings, badge }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 space-y-4 border border-gray-200">
      <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-purple-100 text-purple-700">
        {badge}
      </span>
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      <h3 className="text-sm text-purple-700 font-semibold">What You'll Learn</h3>
      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
        {learnings.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseCard;