import React from "react";

const ScrollableCourse=()=>{

  return(

<section className="flex px-8">
  <div className="w-1/4">
    <div className="max-w-xs mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-mont font-bold mb-4 text-gray-800">Categories</h2>
      <ul className="w-96 h-96 font-mont font-medium overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#7C3AED] scrollbar-track-gray-200">
        {[
          "Lorem Ipsum",
          "Electronics",
          "Lorem",
          "Placeholder",
          "Placeholder text",
          "Placeholder text",
          "Lorem Ipsum",
          "Electronics",
          "Lorem",
          "Placeholder",
          "Placeholder text",
          "Placeholder text",
        ].map((category, index) => (
          <li
            key={index}
            className={`py-2 border-b text-sm cursor-pointer ${
              index === 0
                ? "text-[#7C3AED] font-medium"
                : "text-gray-800 hover:text-[#7C3AED]"
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>)}

export default ScrollableCourse;