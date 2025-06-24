import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star, Clock, Users, BookOpen, Filter } from "lucide-react";
import WallOfLove from "../components/WallOfLove";
import { useNavigate } from "react-router-dom";
import heroimage from "../Assets/Vector.png";
import Recard from "@/components/Card";
import PurpleBox from "@/components/PurpleBox";
// import ScrollableCourse from "@/components/ScrollableCourse";

const BooksPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
    const [activeIndex, setActiveIndex] = useState(0);

interface Course {
  image: string;
  title: string;
  instructor: string;
  description: string;
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
  const levels = [];
  const courses = [
    {
      title: "Complete React Development Course",
      instructor: "John Doe",
      description: "Master modern front-end development with this comprehensive React course.",
      rating: 4.8,
      students: 1234,
      price: 99,
      originalPrice: 199,
      duration: "25h 30m",
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
      description:"Explore the essentials of user interface and user experience design.",
      rating: 4.9,
      students: 876,
      price: 119,
      originalPrice: 219,
      duration: "22h 10m",
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
      description:"Learn everything from SEO, SEM, and social media strategies to email marketing, content creation. ",
      rating: 4.7,
      students: 987,
      price: 89,
      originalPrice: 179,
      duration: "18h 45m",
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
      description: "Master the art of data analysis and visualization with Python. Learn to extract insights from business",
      rating: 4.6,
      students: 654,
      price: 109,
      originalPrice: 209,
      duration: "20h 00m",
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
      description:"Unlock the art and science of photography with this beginner-friendly course.",
      students: 1500,
      price: 79,
      originalPrice: 159,
      duration: "15h 30m",
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
      description:"Take your JavaScript skills to the next level with this in-depth course designed for developers.",
      rating: 4.8,
      students: 1100,
      price: 129,
      originalPrice: 249,
      duration: "28h 00m",
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
      description:"Unleash your creativity and learn to design stunning visuals using Adobe Illustrator.",
      rating: 4.7,
      students: 750,
      price: 95,
      originalPrice: 185,
      duration: "20h 00m",
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
      description:"Discover how to craft compelling content that attracts, engages, and converts your audience. ",
      rating: 4.5,
      students: 500,
      price: 85,
      originalPrice: 165,
      duration: "16h 00m",
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
      description:"Build foundational knowledge in financial modeling using Excel or Google Sheets.",
      rating: 4.6,
      students: 400,
      price: 115,
      originalPrice: 225,
      duration: "24h 00m",
      lessons: 140,
      level: "beginner",
      category: "business",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b300f0f5?w=300&h=200&fit=crop",
      badge: "Best Seller",
    },
    {
      title: "Portrait Photography Techniques",
      instructor: "James Taylor",
      description:"Master the art of capturing expressive and professional-quality portraits.",
      rating: 4.8,
      students: 900,
      price: 89,
      originalPrice: 179,
      duration: "14h 00m",
      lessons: 80,
      level: "intermediate",
      category: "photography",
      image:
        "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?w=300&h=200&fit=crop",
      badge: "Top Rated",
    },
  ];


  const categories = [
   "Backend", 
 "Web Development", 
"Cybersecurity", 
"Data Science", 
"Artificial Intelligence", 
"Cloud Computing", 
"Mobile App Development", 
"Digital Marketing", 
"Graphic Design", 
"Business Fundamentals", 
"Project Management" 
  ];


  const filterCards = (category) => {
    setSelectedCategory(category);
  };
  const filteredCourses = courses.filter((course) => {
    if (selectedCategory === "all") {
      return true;
    }
    return course.category === selectedCategory;
  });
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
   <section className=" relative bottom-20 ">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 text-center ">
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
                Discover Our Books
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Discover thousands of courses taught by expert instructors. Start
            learning today and advance your career.
              </p>
            </div>
          </div>
        </div>
      </section>     
      {/* New Design Section */}r
      <section className="bg-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6"></div>
        </div>
      </section>
      {/* Category and Card Design Section */}
      
      <div className="flex justify-center ">
       <section className="flex justify-center  py-8 mb-16 h-screen lg-[90%] xl:w-[90%] ">
          <section className="flex lg:w-[25%]  xl:w-[25%] 2xl:w-[25%] 3xl:w-[25%] overflow-y-auto px-2 " style={{scrollbarWidth:"thin"}}>
            <div className="w-full">
              <div className="max-w-c mx-auto px-4 sm:px-6 lg:px-10">
                <h2 className="text-2xl font-mont font-bold mb-4 py-2 text-gray-800 text-center">
                  Categories
                </h2>
                <ul className="w-full h-full overflow-y-auto pr-2  custom-scrollbar">
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
          <div className="flex justify-start flex-wrap lg:w-[80%]  xl:w-[85%] 2xl:w-[80%] 3xl:w-[80%] px-8 overflow-auto" style={{scrollbarWidth:'none'}}>
              {filteredCourses.map((course, index) => ( 
                <div  
                  key={index}
                  onClick={() => navigate("/carddetail", { state: { course } })}
                  className="cursor-pointer xl:[32%] xl:w-[32%] 2xl:w-[32%] lg:mx-2 xl:mx-1 2xl:mx-1 3xl:w-[32%] 3xl:mx-2 "
                >
                  <Recard course={course} key={index} />
                </div>
              ))}
        </div>       
      </section>
     </div>
      {/* Course Grid */}
          
      <div className="flex justify-center">
        <PurpleBox />
      </div>
      <WallOfLove />
      <Footer />
    </div>
  );
};
export default BooksPage;