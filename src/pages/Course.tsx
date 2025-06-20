// import { useState } from "react";
// import Navbar from "@/components/Navbar";
// import PurpleBox from "@/components/PurpleBox";
// import Footer from "@/components/Footer";
// import WallOfLove from "../components/WallOfLove";
// import { useNavigate } from "react-router-dom";
// import heroimage from "../Assets/Vector.png";
// import Recard from "@/components/Card";
// import ScrollableCourse from "@/components/ScrollableCourse";
// // Define TypeScript interface for a Course
// interface Course {
//   title: string;
//   instructor: string;
//   rating: number;
//   students: number;
//   price: number;
//   originalPrice: number;
//   duration: string;
//   lessons: number;
//   level: string;
//   category: string;
//   image: string;
//   badge: string;
// }

// // Define TypeScript interface for FilterSection props
// interface FilterSectionProps {
//   initialActiveButton?: "supervised" | "unsupervised";
//   description?: string;
//   onToggle?: (activeButton: "supervised" | "unsupervised") => void;
// }

// const FilterSection: React.FC<FilterSectionProps> = ({
//   initialActiveButton = "supervised",
//   description = "Scheduled live Google Meet classes with calendar/email alerts, seasonal batches, and fixed enrollment deadlines.",
//   onToggle,
// }) => {
//   const [activeButton, setActiveButton] = useState<"supervised" | "unsupervised">(initialActiveButton);

//   const handleToggle = (button: "supervised" | "unsupervised") => {
//     setActiveButton(button);
//     if (onToggle) {
//       onToggle(button);
//     }
//   };

//   const SortDropdown: React.FC = () => {
//   const [sortOption, setSortOption] = useState('Latest');

//   const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSortOption(e.target.value);
//   };
//   return (
//     <div>
//       <label className="block text-gray-700 text-sm font-semibold mb-1">
//         Sort by:
//       </label>
//       <div className="relative">
//         <select
//           value={sortOption}
//           onChange={handleSortChange}
//           className="w-48 p-2.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none text-gray-700"
//         >
//           <option value="Latest">Latest</option>
//           <option value="Most Popular">Most Popular</option>
//           <option value="Highest Rated">Highest Rated</option>
//           <option value="Newest">Newest</option>
//         </select>
//         {/* Custom dropdown arrow */}
//         <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//           <svg
//             className="w-4 h-4 text-gray-500"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </div>
//       </div>
//       {/* Custom dropdown styling for options */}
//       <style>{`
//         select option:checked {
//           background-color: #8A63FF;
//           color: white;
//         }
//         select option {
//           padding: 8px;
//         }
//       `}</style>
//     </div>
//   );
// };

//   return (
//     <section className="bg-white py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center mb-6">
//           <div className="flex items-center gap-4">
//             <button
//               onClick={() => handleToggle("supervised")}
//               className={`px-4 py-2 rounded-full font-semibold transition-colors ${
//                 activeButton === "supervised"
//                   ? "bg-[#7C3AED] text-white"
//                   : "bg-white text-gray-600"
//               }`}
//             >
//               Supervised
//             </button>
//             <button
//               onClick={() => handleToggle("unsupervised")}
//               className={`px-4 py-2 rounded-full font-semibold transition-colors ${
//                 activeButton === "unsupervised"
//                   ? "bg-[#7C3AED] text-white"
//                   : "bg-white text-[#9539E5]"
//               }`}
//             >
//               Unsupervised
//             </button>
//           </div>
//           <span className="text-sm text-gray-500 max-w-md text-right">
//             {description}
//           </span>
//         </div>

//         <div className="p-6">
//           <h2 className="text-2xl font-semibold mb-6">Courses (957)</h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             <div>
//               <label
//                 htmlFor="search"
//                 className="block text-sm font-medium mb-1 text-gray-700"
//               >
//                 Search:
//               </label>
//               <div className="relative">
//                 <input
//                   type="text"
//                   id="search"
//                   placeholder="Search in your courses..."
//                   className="w-full rounded-full border: 20px solid border border-[#00000040] px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
//                 />
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                   />
//                 </svg>
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="sort"
//                 className="block text-sm font-medium mb-1 text-gray-700"
//               >
//                 Sort by:
//               </label>
//               <select
//                 id="sort"
//                   className="w-full rounded-full border: 20px solid border border-[#00000040] px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
//               >
//                 <option>Latest</option>
//                 <option>Most Popular</option>
//                 <option>Highest Rated</option>
//                 <option>Newest</option>
//               </select>
//             </div>

//             <div>
//               <label
//                 htmlFor="status"
//                 className="block text-sm font-medium mb-1 text-gray-700"
//               >
//                 Status:
//               </label>
//               <select
//                 id="status"
//                 className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
//               >
//                 <option>All Courses</option>
//                 <option>In Progress</option>
//                 <option>Completed</option>
//                 <option>Not Started</option>
//               </select>
//             </div>

//             <div>
//               <label
//                 htmlFor="teacher"
//                 className="block text-sm font-medium mb-1 text-gray-700"
//               >
//                 Teacher:
//               </label>
//               <select
//                 id="teacher"
//                 className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
//               >
//                 <option>All Teachers</option>
//                 <option>John Doe</option>
//                 <option>Alex Chen</option>
//                 <option>Sarah Green</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Course: React.FC = () => {
//   const navigate = useNavigate();
//   const [selectedCategory, setSelectedCategory] = useState<string>("all");

//   const courses: Course[] = [
//     {
//       title: "Complete React Development Course",
//       instructor: "John Doe",
//       rating: 4.8,
//       students: 1234,
//       price: 99,
//       originalPrice: 199,
//       duration: "2 months",
//       lessons: 156,
//       level: "beginner",
//       category: "development",
//       image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
//       badge: "Best Seller",
//     },
//     {
//       title: "UI/UX Design Fundamentals",
//       instructor: "Alex Chen",
//       rating: 4.9,
//       students: 876,
//       price: 119,
//       originalPrice: 219,
//       duration: "3 months",
//       lessons: 145,
//       level: "beginner",
//       category: "design",
//       image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
//       badge: "Popular",
//     },
//     {
//       title: "Digital Marketing Masterclass",
//       instructor: "Sarah Green",
//       rating: 4.7,
//       students: 987,
//       price: 89,
//       originalPrice: 179,
//       duration: "2 months",
//       lessons: 110,
//       level: "intermediate",
//       category: "marketing",
//       image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop",
//       badge: "New",
//     },
//     {
//       title: "Business Analytics with Python",
//       instructor: "David Lee",
//       rating: 4.6,
//       students: 654,
//       price: 109,
//       originalPrice: 209,
//       duration: "2 months",
//       lessons: 130,
//       level: "advanced",
//       category: "business",
//       image: "https://images.unsplash.com/photo-1521737711867-ee1713320799?w=300&h=200&fit=crop",
//       badge: "Trending",
//     },
//     {
//       title: "Photography Fundamentals",
//       instructor: "Emily White",
//       rating: 4.9,
//       students: 1500,
//       price: 79,
//       originalPrice: 159,
//       duration: "1 month",
//       lessons: 90,
//       level: "beginner",
//       category: "photography",
//       image: "https://images.unsplash.com/photo-1502943693-33f546880070?w=300&h=200&fit=crop",
//       badge: "Top Rated",
//     },
//     {
//       title: "Advanced JavaScript Concepts",
//       instructor: "Michael Brown",
//       rating: 4.8,
//       students: 1100,
//       price: 129,
//       originalPrice: 249,
//       duration: "2 months",
//       lessons: 180,
//       level: "advanced",
//       category: "development",
//       image: "https://images.unsplash.com/photo-1550439062-cd036594bbcd?w=300&h=200&fit=crop",
//       badge: "Popular",
//     },
//     {
//       title: "Graphic Design with Adobe Illustrator",
//       instructor: "Olivia Davis",
//       rating: 4.7,
//       students: 750,
//       price: 95,
//       originalPrice: 185,
//       duration: "3 months",
//       lessons: 120,
//       level: "intermediate",
//       category: "design",
//       image: "https://images.unsplash.com/photo-1522199755839-fd24598a6d85?w=300&h=200&fit=crop",
//       badge: "New",
//     },
//     {
//       title: "Content Marketing Strategy",
//       instructor: "Daniel Wilson",
//       rating: 4.5,
//       students: 500,
//       price: 85,
//       originalPrice: 165,
//       duration: "3 months",
//       lessons: 100,
//       level: "intermediate",
//       category: "marketing",
//       image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=200&fit=crop",
//       badge: "Trending",
//     },
//     {
//       title: "Financial Modeling for Beginners",
//       instructor: "Sophia Miller",
//       rating: 4.6,
//       students: 400,
//       price: 115,
//       originalPrice: 225,
//       duration: "2 months",
//       lessons: 140,
//       level: "beginner",
//       category: "business",
//       image: "https://images.unsplash.com/photo-1554224155-6726b300f0f5?w=300&h=200&fit=crop",
//       badge: "Best Seller",
//     },

//   ];

//   const filterCards = (category: string) => {
//     setSelectedCategory(category);
//   };

//   const filteredCourses = courses.filter((course) => {
//     if (selectedCategory === "all") {
//       return true;
//     }
//     return course.category === selectedCategory;
//   });

//   return (
//     <div className="min-h-screen bg-white font-mont">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="bg-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div>
//             <img
//               src={heroimage}
//               alt="Hero Image"
//               className="mx-auto"
//               style={{
//                 width: "500px",
//                 height: "auto",
//                 position: "relative",
//                 left: "0",
//                 top: "40px",
//               }}
//             />
//           </div>
//           <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
//             Discover Our Starc Courses
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
//             Discover thousands of courses taught by expert instructors. Start
//             learning today and advance your career.
//           </p>
//         </div>
//       </section>

//       {/* Filter Section */}
//       <FilterSection
//         initialActiveButton="supervised"
//         description="Scheduled live Google Meet classes with calendar/email alerts, seasonal batches, and fixed enrollment deadlines."
//         onToggle={(button) => console.log(`Toggled to: ${button}`)} // Example callback
//       />

//       {/* Category and Course Cards Section */}
//       <section className="flex py-8">
//         <div className="w-1/4">
//           {/* <div className="max-w-xs mx-auto px-4 sm:px-6 lg:px-8">
//             <h2 className="text-2xl font-bold mb-4 text-gray-900">
//               Categories
//             </h2>
//             <ul className="space-y-2 h-96 overflow-y-auto">
//               <li
//                 className={`cursor-pointer ${
//                   selectedCategory === "all"
//                     ? "text-[#7C3AED] font-semibold"
//                     : "text-gray-900"
//                 } hover:text-[#7C3AED]`}
//                 onClick={() => filterCards("all")}
//               >
//                 All Categories
//               </li>
//               <li
//                 className={`cursor-pointer ${
//                   selectedCategory === "development"
//                     ? "text-[#7C3AED] font-semibold"
//                     : "text-gray-900"
//                 } hover:text-[#7C3AED]`}
//                 onClick={() => filterCards("development")}
//               >
//                 Development
//               </li>
//               <li
//                 className={`cursor-pointer ${
//                   selectedCategory === "design"
//                     ? "text-[#7C3AED] font-semibold"
//                     : "text-gray-900"
//                 } hover:text-[#7C3AED]`}
//                 onClick={() => filterCards("design")}
//               >
//                 Design
//               </li>
//               <li
//                 className={`cursor-pointer ${
//                   selectedCategory === "marketing"
//                     ? "text-[#7C3AED] font-semibold"
//                     : "text-gray-900"
//                 } hover:text-[#7C3AED]`}
//                 onClick={() => filterCards("marketing")}
//               >
//                 Marketing
//               </li>
//               <li
//                 className={`cursor-pointer ${
//                   selectedCategory === "business"
//                     ? "text-[#7C3AED] font-semibold"
//                     : "text-gray-900"
//                 } hover:text-[#7C3AED]`}
//                 onClick={() => filterCards("business")}
//               >
//                 Business
//               </li>
//               <li
//                 className={`cursor-pointer ${
//                   selectedCategory === "photography"
//                     ? "text-[#7C3AED] font-semibold"
//                     : "text-gray-900"
//                 } hover:text-[#7C3AED]`}
//                 onClick={() => filterCards("photography")}
//               >
//                 Photography
//               </li>
//             </ul> */}
          
//           <ScrollableCourse/>
//         </div>

//         <div className=" pl-28 w-50 pb-14">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-14">
//               {filteredCourses.map((course, index) => (
//                 <div
//                   key={index}
//                   onClick={() => navigate("/carddetail", { state: { course } })}
//                   className="cursor-pointer"
//                 >
//                   <Recard course={course} key={index} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Join Us Section */}
//       {/* <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-[#8A63FF] rounded-xl p-10 text-center shadow-lg mb-20">
//             <h2 className="text-4xl font-bold text-white mb-4">
//               Join ambitious professionals and unlock your dream career today
//             </h2>
//             <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
//               Unlock your true potential and discover a world of opportunities
//               that align with your skills, interests, and aspirations
//             </p>
//             <div className="flex justify-center items-center gap-4">
//               <div className="relative">
//                 <input
//                   type="email"
//                   placeholder="Your mail address"
//                   className="pl-10 pr-4 py-3 rounded-full w-80 focus:outline-none focus:ring-2 focus:ring-purple-300"
//                 />
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                   />
//                 </svg>
//               </div>
//               <button className="bg-white text-[#7C3AED] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
//                 Join Us
//               </button>
//             </div>
//           </div>

//           <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
//             <div className="lg:w-1/2">
//               <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
//                 "Learn today, lead tomorrow"
//               </h2>
//               <div className="flex gap-10">
//                 <div>
//                   <p className="text-5xl font-bold text-[#7C3AED]">200+</p>
//                   <p className="text-gray-600">People</p>
//                 </div>
//                 <div>
//                   <p className="text-5xl font-bold text-[#7C3AED]">50+</p>
//                   <p className="text-gray-600">Courses</p>
//                 </div>
//                 <div>
//                   <p className="text-5xl font-bold text-[#7C3AED]">20+</p>
//                   <p className="text-gray-600">Experience Staff's</p>
//                 </div>
//               </div>
//             </div>
//             <div className="lg:w-1/2">
//               <h3 className="text-3xl font-bold text-[#7C3AED] mb-4">STARC</h3>
//               <p className="text-gray-700 leading-relaxed">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
//                 nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
//                 amet, consectetur adipiscing elit. Sed do eiusmod tempor
//                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//                 veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Sed do eiusmod tempor incididunt ut labore et dolore magna
//                 aliqua.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section> */}
//       <div className="flex justify-center"> 
//       <PurpleBox/>
//       </div>
//       <WallOfLove />
//       <Footer />
//     </div>
//   );
// };

// export default Course;

import { useState } from "react";
import Navbar from "@/components/Navbar";
import PurpleBox from "@/components/PurpleBox";
import Footer from "@/components/Footer";
import WallOfLove from "../components/WallOfLove";
import { useNavigate } from "react-router-dom";
import heroimage from "../Assets/Vector.png";
import Recard from "@/components/Card";

// import ScrollableCourse from "@/components/ScrollableCourse";
// Define TypeScript interface for a Course

interface Course {
  title: string;
  instructor: string;
  rating: number;
  students: number;
  price: number;
  originalPrice: number;
  duration: string;
  lessons: number;
  level: string;
  category: string;
  image: string;
  badge: string;
}

// Define TypeScript interface for FilterSection props
interface FilterSectionProps {
  initialActiveButton?: "supervised" | "unsupervised";
  description?: string;
  onToggle?: (activeButton: "supervised" | "unsupervised") => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  initialActiveButton = "supervised",
  description = "Scheduled live Google Meet classes with calendar/email alerts, seasonal batches, and fixed enrollment deadlines.",
  onToggle,
}) => {
  const [activeButton, setActiveButton] = useState<
    "supervised" | "unsupervised"
  >(initialActiveButton);

  const handleToggle = (button: "supervised" | "unsupervised") => {
    setActiveButton(button);
    if (onToggle) {
      onToggle(button);
    }
  };

  const SortDropdown: React.FC = () => {
    const [sortOption, setSortOption] = useState("Latest");

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSortOption(e.target.value);
    };
    return (
      <div>
        <label className="block text-gray-700 text-sm font-semibold mb-1">
          Sort by:
        </label>
        <div className="relative">
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="w-48 p-2.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none text-gray-700"
          >
            <option value="Latest">Latest</option>
            <option value="Most Popular">Most Popular</option>
            <option value="Highest Rated">Highest Rated</option>
            <option value="Newest">Newest</option>
          </select>
          {/* Custom dropdown arrow */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        {/* Custom dropdown styling for options */}
        <style>{`
        select option:checked {
          background-color: #8A63FF;
          color: white;
        }
        select option {
          padding: 8px;
        }
      `}</style>
      </div>
    );
  };

  return (
    <section className="bg-white  ">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
        <div className=" flex flex-col  ">
          <div className="flex items-center gap-4 flex-col  ">
            <div className="flex items-center  bg-white-500 p-1   rounded-full  shadow-md">
              <button
                onClick={() => handleToggle("supervised")}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  activeButton === "supervised"
                    ? "bg-[#7C3AED] text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                Supervised
              </button>
              <button
                onClick={() => handleToggle("unsupervised")}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  activeButton === "unsupervised"
                    ? "bg-[#7C3AED] text-white"
                    : "bg-white text-[#9539E5]"
                }`}
              >
                Unsupervised
              </button>
            </div>
            <span className="text-sm text-gray-500 max-w-sm  ">
              {description}
            </span>
          </div>
        </div>

        <div className="p-20 ">
          <h2 className="text-2xl font-semibold mb-6">Courses (957)</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label
                htmlFor="search"
                className="block text-sm font-medium mb-1 text-gray-700"
              >
                Search:
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  placeholder="Search in your courses..."
                  className="w-full rounded-full border: 20px solid border border-[#00000040] px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <div>
              <label
                htmlFor="sort"
                className="block text-sm font-medium mb-1 text-gray-700"
              >
                Sort by:
              </label>
              <select
                id="sort"
                className="w-full rounded-full border: 20px solid border border-[#00000040] px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              >
                <option>Latest</option>
                <option>Most Popular</option>
                <option>Highest Rated</option>
                <option>Newest</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium mb-1 text-gray-700"
              >
                Status:
              </label>
              <select
                id="status"
                className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              >
                <option>All Courses</option>
                <option>In Progress</option>
                <option>Completed</option>
                <option>Not Started</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="teacher"
                className="block text-sm font-medium mb-1 text-gray-700"
              >
                Teacher:
              </label>
              <select
                id="teacher"
                className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              >
                <option>All Teachers</option>
                <option>John Doe</option>
                <option>Alex Chen</option>
                <option>Sarah Green</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Course: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const courses: Course[] = [
    {
      title: "Complete React Development Course",
      instructor: "John Doe",
      rating: 4.8,
      students: 1234,
      price: 99,
      originalPrice: 199,
      duration: "2 months",
      lessons: 156,
      level: "beginner",
      category: "development",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
      badge: "Best Seller",
    },
    {
      title: "UI/UX Design Fundamentals",
      instructor: "Alex Chen",
      rating: 4.9,
      students: 876,
      price: 119,
      originalPrice: 219,
      duration: "3 months",
      lessons: 145,
      level: "beginner",
      category: "design",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
      badge: "Popular",
    },
    {
      title: "Digital Marketing Masterclass",
      instructor: "Sarah Green",
      rating: 4.7,
      students: 987,
      price: 89,
      originalPrice: 179,
      duration: "2 months",
      lessons: 110,
      level: "intermediate",
      category: "marketing",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop",
      badge: "New",
    },
    {
      title: "Business Analytics with Python",
      instructor: "David Lee",
      rating: 4.6,
      students: 654,
      price: 109,
      originalPrice: 209,
      duration: "2 months",
      lessons: 130,
      level: "advanced",
      category: "business",
      image:
        "https://images.unsplash.com/photo-1521737711867-ee1713320799?w=300&h=200&fit=crop",
      badge: "Trending",
    },
    {
      title: "Photography Fundamentals",
      instructor: "Emily White",
      rating: 4.9,
      students: 1500,
      price: 79,
      originalPrice: 159,
      duration: "1 month",
      lessons: 90,
      level: "beginner",
      category: "photography",
      image:
        "https://images.unsplash.com/photo-1502943693-33f546880070?w=300&h=200&fit=crop",
      badge: "Top Rated",
    },
    {
      title: "Advanced JavaScript Concepts",
      instructor: "Michael Brown",
      rating: 4.8,
      students: 1100,
      price: 129,
      originalPrice: 249,
      duration: "2 months",
      lessons: 180,
      level: "advanced",
      category: "development",
      image:
        "https://images.unsplash.com/photo-1550439062-cd036594bbcd?w=300&h=200&fit=crop",
      badge: "Popular",
    },
    {
      title: "Graphic Design with Adobe Illustrator",
      instructor: "Olivia Davis",
      rating: 4.7,
      students: 750,
      price: 95,
      originalPrice: 185,
      duration: "3 months",
      lessons: 120,
      level: "intermediate",
      category: "design",
      image:
        "https://images.unsplash.com/photo-1522199755839-fd24598a6d85?w=300&h=200&fit=crop",
      badge: "New",
    },
    {
      title: "Content Marketing Strategy",
      instructor: "Daniel Wilson",
      rating: 4.5,
      students: 500,
      price: 85,
      originalPrice: 165,
      duration: "3 months",
      lessons: 100,
      level: "intermediate",
      category: "marketing",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=200&fit=crop",
      badge: "Trending",
    },
    {
      title: "Financial Modeling for Beginners",
      instructor: "Sophia Miller",
      rating: 4.6,
      students: 400,
      price: 115,
      originalPrice: 225,
      duration: "2 months",
      lessons: 140,
      level: "beginner",
      category: "business",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b300f0f5?w=300&h=200&fit=crop",
      badge: "Best Seller",
    },
  ];

    const [activeIndex, setActiveIndex] = useState(0);

    const categories = [
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
      "Placeholder text",
      "Placeholder text",
      "Placeholder text",
    ];

  const filterCards = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredCourses = courses.filter((course) => {
    if (selectedCategory === "all") {
      return true;
    }
    return course.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-white font-mont">
      <Navbar />

      {/* Hero Section */}
      <section className=" relative bottom-20 ">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className=" flex flex-col justify-center items-center">
            <img
              src={heroimage}
              alt="Hero Image"
              className="mx-auto"
              style={{
                width: "500px",
                height: "auto",
                position: "relative",
                left: "0",
                top: "90px",
              }}
            />
            <div className="">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
                Discover Our Starc Courses
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Discover thousands of courses taught by expert instructors.
                Start learning today and advance your career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <FilterSection
        initialActiveButton="supervised"
        description="Scheduled live Google Meet classes with calendar/email alerts, seasonal batches, and fixed enrollment deadlines."
        onToggle={(button) => console.log(`Toggled to: ${button}`)} // Example callback
      />

      {/* Category and Course Cards Section */}
     <div className="flex justify-center  mb-20">
       <section className="flex justify-center py-8 mb-16 h-screen lg-[90%] xl:w-[90%]">
        {/* <div className="w-1/4">           */}
          <section className="flex lg:w-[25%]  xl:w-[25%] 2xl:w-[25%] 3xl:w-[25%] overflow-y-auto px-2 " style={{scrollbarWidth:"thin"}}>
            <div className="w-full">
              <div className="max-w-c mx-auto px-4 sm:px-6 lg:px-10">
                <h2 className="text-2xl font-mont font-bold mb-4 py-2 text-gray-800 text-center">
                  Categories
                </h2>
                <ul className="w-full h-full overflow-y-auto pr-2 border-r-2 custom-scrollbar">
                  {categories.map((category, index) => (
                    <li
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`py-4 px-4 lg:text-[10px] xl:text-sm 2xl:text-base 3xl:text-lg cursor-pointer items-start w-[95%] border-gray-200 border-b-[0.1px] transition-all duration-200 ${
                        index === activeIndex
                          ? "text-[#7C3AED] font-semibold"
                          : "text-gray-800"
                      }`}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <div className="flex justify-start pl-10 items-center flex-wrap lg:w-[80%]  xl:w-[85%] 2xl:w-[80%] 3xl:w-[80%] px-8 overflow-auto" style={{scrollbarWidth:'none'}}>
              {filteredCourses.map((course, index) => ( 
                <div  
                  key={index}
                  onClick={() => navigate("/carddetail", { state: { course } })}
                  className="cursor-pointer xl:[32%] xl:w-[32%] 2xl:w-[32%] lg:mx-2 xl:mx-1 2xl:mx-1 3xl:w-[32%] 3xl:mx-2 "
                >
                  <Recard course={course} key={index} />
                </div>
              ))}
            {/* </div> */}
        </div>

        {/* <div className=" w-50 py-10 lg:p-31 bg-blue-400  "> */}
          {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-yellow-500"> */}
            
          {/* </div> */}
        {/* </div> */}
      </section>
     </div>

      {/* Join Us Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#8A63FF] rounded-xl p-10 text-center shadow-lg mb-20">
            <h2 className="text-4xl font-bold text-white mb-4">
              Join ambitious professionals and unlock your dream career today
            </h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Unlock your true potential and discover a world of opportunities
              that align with your skills, interests, and aspirations
            </p>
            <div className="flex justify-center items-center gap-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your mail address"
                  className="pl-10 pr-4 py-3 rounded-full w-80 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <button className="bg-white text-[#7C3AED] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Join Us
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            <div className="lg:w-1/2">
              <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
                "Learn today, lead tomorrow"
              </h2>
              <div className="flex gap-10">
                <div>
                  <p className="text-5xl font-bold text-[#7C3AED]">200+</p>
                  <p className="text-gray-600">People</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#7C3AED]">50+</p>
                  <p className="text-gray-600">Courses</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#7C3AED]">20+</p>
                  <p className="text-gray-600">Experience Staff's</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold text-[#7C3AED] mb-4">STARC</h3>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <div className="flex justify-center">
        <PurpleBox />
      </div>
      <WallOfLove />
      <Footer />
    </div>
  );
};

export default Course;
