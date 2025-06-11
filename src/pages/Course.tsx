
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star, Clock, Users, BookOpen, Filter } from "lucide-react";
import WallOfLove from "../components/WallOfLove";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const categories = [
   
  ];

  const levels = [
    
  ];

  const courses = [
    {
      title: "Complete React Development Course",
      instructor: "John Doe",
      rating: 4.8,
      students: 1234,
      price: 99,
      originalPrice: 199,
      duration: "25h 30m",
      lessons: 156,
      level: "beginner",
      category: "development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
      badge: "Best Seller"
    },
    {
      title: "UI/UX Design Fundamentals",
      instructor: "Alex Chen",
      rating: 4.9,
      students: 876,
      price: 119,
      originalPrice: 219,
      duration: "22h 10m",
      lessons: 145,
      level: "beginner",
      category: "design",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
      badge: "Popular"
    },
    {
      title: "Digital Marketing Masterclass",
      instructor: "Sarah Green",
      rating: 4.7,
      students: 987,
      price: 89,
      originalPrice: 179,
      duration: "18h 45m",
      lessons: 110,
      level: "intermediate",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop",
      badge: "New"
    },
    {
      title: "Business Analytics with Python",
      instructor: "David Lee",
      rating: 4.6,
      students: 654,
      price: 109,
      originalPrice: 209,
      duration: "20h 00m",
      lessons: 130,
      level: "advanced",
      category: "business",
      image: "https://images.unsplash.com/photo-1521737711867-ee1713320799?w=300&h=200&fit=crop",
      badge: "Trending"
    },
    {
      title: "Photography Fundamentals",
      instructor: "Emily White",
      rating: 4.9,
      students: 1500,
      price: 79,
      originalPrice: 159,
      duration: "15h 30m",
      lessons: 90,
      level: "beginner",
      category: "photography",
      image: "https://images.unsplash.com/photo-1502943693-33f546880070?w=300&h=200&fit=crop",
      badge: "Top Rated"
    },
    {
      title: "Advanced JavaScript Concepts",
      instructor: "Michael Brown",
      rating: 4.8,
      students: 1100,
      price: 129,
      originalPrice: 249,
      duration: "28h 00m",
      lessons: 180,
      level: "advanced",
      category: "development",
      image: "https://images.unsplash.com/photo-1550439062-cd036594bbcd?w=300&h=200&fit=crop",
      badge: "Popular"
    },
    {
      title: "Graphic Design with Adobe Illustrator",
      instructor: "Olivia Davis",
      rating: 4.7,
      students: 750,
      price: 95,
      originalPrice: 185,
      duration: "20h 00m",
      lessons: 120,
      level: "intermediate",
      category: "design",
      image: "https://images.unsplash.com/photo-1522199755839-fd24598a6d85?w=300&h=200&fit=crop",
      badge: "New"
    },
    {
      title: "Content Marketing Strategy",
      instructor: "Daniel Wilson",
      rating: 4.5,
      students: 500,
      price: 85,
      originalPrice: 165,
      duration: "16h 00m",
      lessons: 100,
      level: "intermediate",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=200&fit=crop",
      badge: "Trending"
    },
    {
      title: "Financial Modeling for Beginners",
      instructor: "Sophia Miller",
      rating: 4.6,
      students: 400,
      price: 115,
      originalPrice: 225,
      duration: "24h 00m",
      lessons: 140,
      level: "beginner",
      category: "business",
      image: "https://images.unsplash.com/photo-1554224155-6726b300f0f5?w=300&h=200&fit=crop",
      badge: "Best Seller"
    },
    {
      title: "Portrait Photography Techniques",
      instructor: "James Taylor",
      rating: 4.8,
      students: 900,
      price: 89,
      originalPrice: 179,
      duration: "14h 00m",
      lessons: 80,
      level: "intermediate",
      category: "photography",
      image: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?w=300&h=200&fit=crop",
      badge: "Top Rated"
    }
  ];

  const filterCards = (category) => {
    setSelectedCategory(category);
  };

  const filteredCourses = courses.filter(course => {
    if (selectedCategory === 'all') {
      return true;
    }
    return course.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Explore Our
            <span className="text-purple-600"> Courses</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover thousands of courses taught by expert instructors. Start learning today and advance your career.
          </p>
        </div>
      </section>

      {/* New Design Section */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-full">Supervised</button>
              <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-full">Unsupervised</button>
            </div>
            <span className="text-sm text-gray-500">Scheduled live Google Meet classes with calendar/email alerts, seasonal batches, and fixed enrollment deadlines.</span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Courses (957)</h2>
            <div className="flex items-center gap-4">
              <input type="text" placeholder="Search in your courses..." className="border border-gray-300 rounded-full px-4 py-2" />
              <select className="border border-gray-300 rounded-full px-4 py-2">
                <option>Latest</option>
              </select>
              <select className="border border-gray-300 rounded-full px-4 py-2">
                <option>All Courses</option>
              </select>
              <select className="border border-gray-300 rounded-full px-4 py-2">
                <option>All Teachers</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Category and Card Design Section */}
      <section className="flex">
        <div className="w-1/4 py-8">
          <div className="max-w-xs mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <ul className="space-y-2 h-96 overflow-y-auto">
              <li className={`cursor-pointer ${selectedCategory === 'all' ? 'text-purple-600' : 'text-black'}`} onClick={() => filterCards('all')}>All Categories</li>
              <li className={`cursor-pointer ${selectedCategory === 'development' ? 'text-purple-600' : 'text-black'}`} onClick={() => filterCards('development')}>Development</li>
              <li className={`cursor-pointer ${selectedCategory === 'design' ? 'text-purple-600' : 'text-black'}`} onClick={() => filterCards('design')}>Design</li>
              <li className={`cursor-pointer ${selectedCategory === 'marketing' ? 'text-purple-600' : 'text-black'}`} onClick={() => filterCards('marketing')}>Marketing</li>
              <li className={`cursor-pointer ${selectedCategory === 'business' ? 'text-purple-600' : 'text-black'}`} onClick={() => filterCards('business')}>Business</li>
              <li className={`cursor-pointer ${selectedCategory === 'photography' ? 'text-purple-600' : 'text-black'}`} onClick={() => filterCards('photography')}>Photography</li>
            </ul>
          </div>
        </div>
        <div className="w-3/4 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* {filteredCourses.map((course, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.instructor}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-600 font-bold">${course.price}</span>
                      <button className="bg-purple-600 text-white px-4 py-2 rounded-full">Enroll Now</button>
                    </div>
                  </div>
                </div>
              ))} */}
                {filteredCourses.map((course, index) => (
              <div key={index} onClick={() => navigate('/book', { state: { course } })} className="cursor-pointer">
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-40 object-cover"
                    />
                    {course.badge && (
                      <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                        {course.badge}
                      </span>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{course.instructor}</p>
                    <div className="flex items-center mb-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                      <span className="text-gray-700 text-sm">{course.rating} ({course.students} students)</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-1" />
                        <span>{course.lessons} lessons</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 bg-gray-50 flex justify-between items-center">
                    <div className="text-lg font-bold text-purple-600">${course.price}</div>
                    <div className="text-sm text-gray-500 line-through">${course.originalPrice}</div>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
                      Enroll Now
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* {filteredCourses.map((course, index) => (
              <div key={index} onClick={() => navigate('/book', { state: { course } })} className="cursor-pointer">
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-40 object-cover"
                    />
                    {course.badge && (
                      <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                        {course.badge}
                      </span>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{course.instructor}</p>
                    <div className="flex items-center mb-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                      <span className="text-gray-700 text-sm">{course.rating} ({course.students} students)</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-1" />
                        <span>{course.lessons} lessons</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 bg-gray-50 flex justify-between items-center">
                    <div className="text-lg font-bold text-purple-600">${course.price}</div>
                    <div className="text-sm text-gray-500 line-through">${course.originalPrice}</div>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
                      Enroll Now
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))} */}
          </div>
        </div>
      </section>

      {/* New Section from Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-purple-600 rounded-xl p-10 text-center shadow-lg mb-20">
            <h2 className="text-4xl font-bold text-white mb-4">Join ambitious professionals and unlock your dream career today</h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">Unlock your true potential and discover a world of opportunities that align with your skills, interests, and aspirations</p>
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
              <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">Join Us</button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            <div className="lg:w-1/2">
              <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">"Learn today, lead tomorrow"</h2>
              <div className="flex gap-10">
                <div>
                  <p className="text-5xl font-bold text-purple-600">200+</p>
                  <p className="text-gray-600">People</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-purple-600">50+</p>
                  <p className="text-gray-600">Courses</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-purple-600">20+</p>
                  <p className="text-gray-600">Experience Staff's</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold text-purple-600 mb-4">STARC</h3>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WallOfLove />

      <Footer />
    </div>
  );
};

export default Course;

