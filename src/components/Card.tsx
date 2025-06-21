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
    <div
     
      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer  lg:w-[220px] lg:h-[350px] xl:w-[250px] xl:h-[400px] 2xl:w-[290px] 2xl:h-[500px]  3xl:h-[617px] 3xl:w-[380px] my-5" 
    > 
      <img
        src={course.image}
        alt={course.title}
        className="w-full lg:h-[45%] xl:h-[45%] 2xl:h-[45%] 3xl:h-[45%] object-cover rounded-[10%] px-4 py-4 pl-4 pr-4 "
      />
      <div className="px-4 py-3 lg:width[400px] ">
        <div className="flex items-center justify-between text-sm text-gray-400 mb-1">
          <div className="flex items-center gap-1">
            <BookOpen className=" lg:w-2 lg:h-2 xl:w-3 xl:h-3 2xl:w-4 2xl:h-4 3xl:w-6 3xl:h-6" />
            <span className="lg:text-[10px] xl:text-xs 2xl:text-sm 3xl:text-base">Design</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="lg:w-2 lg:h-2 xl:w-3 xl:h-3 2xl:w-4 2xl:h-4 3xl:w-6 3xl:h-6" />
            <span className="lg:text-[10px] xl:text-xs 2xl:text-sm 3xl:text-base">{course.duration}</span>
          </div>
        </div>
        <h3 className="text-[17px]  lg:text-sm xl:text-lg 2xl:text-2xl 3xl:text-3xl xl:mt-2 2xl:mt-4 font-normal text-gray-900 leading-tight">
          {course.title}
        </h3>
        <p className="text-sm lg:text-[10px] xl:text-[12px] 2xl:text-sm 3xl:text-lg lg:mt-2 xl:mt-4 2x:mt-6 text-gray-500  leading-snug">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </p>
      </div>
      <div className="flex items-center justify-between px-4 py-3 border-t lg:mt-0.5 xl:mt-1 2xl:mt-4 ">
        <div className="flex items-center gap-2 ">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Lina"
            className="w-7 h-7 rounded-full object-cover"
          />
          <span className="text-sm  lg:text-xs xl:text-sm  2xl:text-lg 3xl:text-xl font-medium text-gray-800">Lina</span>
        </div>
        
        <div className="text-sm lg:text-xs xl:text-sm 2xl:text-lg 3xl:text-xl  2xl:mt-4  text-gray-400 ">
          <span className="line-through mr-3 lg:text-[10px] xl:text-xs 2xl:text-sm 3xl:text-lg">${course.originalPrice}</span>
          <span className="text-[#7E74F1]  font-semibold">${course.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Recard;
