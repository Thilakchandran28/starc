import React from "react";
import { useNavigate } from "react-router-dom";
import { Clock, BookOpen } from "lucide-react";


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
   navigate('/carddetail', { state: { course } });
   };
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer w-[280px]  ">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-[180px] object-cover rounded-3xl  px-4 py-4 pl-4 pr-4 "
      />
      <div className="px-4 py-3 lg:width[400px] ">
        <div className="flex items-center justify-between text-sm text-gray-400 mb-1">
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>Design</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
        </div>
        <h3 className="text-[17px] font-semibold text-gray-900 leading-tight">
          {course.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1 leading-snug">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </p>
      </div>
      <div className="flex items-center justify-between px-4 py-3 border-t">
        <div className="flex items-center gap-2">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Lina"
            className="w-7 h-7 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-800">Lina</span>
        </div>
        
        <div className="text-sm text-gray-400">
          <span className="line-through mr-1">${course.originalPrice}</span>
          <span className="text-[#7E74F1] font-semibold">${course.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Recard;
