import React from "react";
import { useNavigate } from "react-router-dom";
import { Star, Clock, BookOpen } from "lucide-react";

export interface Course {
  image: string;
  title: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  lessons: number;
  price: number;
  originalPrice: number;
  badge?: string;
}

interface CardProps {
  course: Course;
}

const Recard: React.FC<CardProps> = ({ course }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/book', { state: { course } });
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <div className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
        <div className="relative">
          <img
            src={course.image}
            alt={course?.title}
            className="w-full h-40 object-cover"
          />
          {course?.badge && (
            <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              {course?.badge}
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{course?.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{course?.instructor}</p>
          <div className="flex items-center mb-2">
            <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
            <span className="text-gray-700 text-sm">
              {course?.rating} ({course?.students} students)
            </span>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{course?.duration}</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-1" />
              <span>{course?.lessons} lessons</span>
            </div>
          </div>
        </div>
        <div className="p-4 bg-gray-50 flex justify-between items-center">
          <div className="text-lg font-bold text-purple-600">${course?.price}</div>
          <div className="text-sm text-gray-500 line-through">${course?.originalPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default Recard;
