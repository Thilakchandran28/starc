import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Clock, Star, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const CoursesSection = () => {
  const [selectedType, setSelectedType] = useState("supervised");
  const [selectedCategory, setSelectedCategory] = useState("development");

  const categories = [
    { id: "development", label: "Development" },
    { id: "design", label: "Design" },
    { id: "business", label: "Business" },
    { id: "marketing", label: "Marketing" },
    { id: "photography", label: "Photography" },
    { id: "acting", label: "Acting" }
  ];

  const courseTypes = [
    { id: "supervised", label: "Supervised" },
    { id: "unsupervised", label: "Unsupervised" }
  ];

const courses = {
    development: [
      { 
        title: "AWS Certified solutions Architect", 
        instructor: "Lina", 
        duration: "2 Month",
        price: 80,
        image: "/placeholder.svg"
      },
      { 
        title: "AWS Certified solutions Architect", 
        instructor: "Lina", 
        duration: "2 Month",
        price: 80,
        image: "/placeholder.svg"
      },
      { 
        title: "AWS Certified solutions Architect", 
        instructor: "Lina", 
        duration: "2 Month",
        price: 80,
        image: "/placeholder.svg"
      },
      { 
        title: "AWS Certified solutions Architect", 
        instructor: "Lina", 
        duration: "2 Month",
        price: 80,
        image: "/placeholder.svg"
      },
    ],
    // ... keep existing code for other categories
    design: [
      { title: "UI/UX Design Fundamentals", instructor: "Alex Chen", rating: 4.9, students: 876, price: 119, originalPrice: 219, duration: "22h 10m", lessons: 145, level: "Beginner", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop", badge: "Popular" },
      { title: "Advanced Graphic Design", instructor: "Emma Davis", rating: 4.7, students: 654, price: 99, originalPrice: 179, duration: "19h 30m", lessons: 112, level: "Intermediate", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop" },
      { title: "Web Design Masterclass", instructor: "Tom Brown", rating: 4.8, students: 1123, price: 139, originalPrice: 249, duration: "26h 45m", lessons: 178, level: "Intermediate", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop" },
      { title: "Brand Identity Design", instructor: "Lisa Wang", rating: 4.6, students: 789, price: 149, originalPrice: 279, duration: "24h 15m", lessons: 156, level: "Advanced", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop" },
    ],
    business: [
      { title: "Business Strategy & Analytics", instructor: "Robert Lee", rating: 4.8, students: 1456, price: 199, originalPrice: 349, duration: "35h 20m", lessons: 234, level: "Intermediate", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop", badge: "Featured" },
      { title: "Entrepreneurship Bootcamp", instructor: "Maria Garcia", rating: 4.9, students: 987, price: 179, originalPrice: 299, duration: "28h 45m", lessons: 189, level: "Beginner", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop" },
      { title: "Project Management Pro", instructor: "David Kim", rating: 4.7, students: 1234, price: 159, originalPrice: 279, duration: "22h 30m", lessons: 145, level: "Intermediate", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop" },
      { title: "Leadership & Team Building", instructor: "Jennifer Liu", rating: 4.8, students: 876, price: 189, originalPrice: 329, duration: "26h 15m", lessons: 167, level: "Advanced", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop" },
    ],
    marketing: [
      { title: "Digital Marketing Complete Guide", instructor: "Chris Martinez", rating: 4.9, students: 2134, price: 149, originalPrice: 259, duration: "30h 45m", lessons: 198, level: "Beginner", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop", badge: "Trending" },
      { title: "Social Media Marketing Pro", instructor: "Anna Thompson", rating: 4.7, students: 1567, price: 119, originalPrice: 209, duration: "20h 30m", lessons: 134, level: "Beginner", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop" },
      { title: "SEO & Content Strategy", instructor: "Kevin Park", rating: 4.8, students: 987, price: 129, originalPrice: 229, duration: "24h 15m", lessons: 156, level: "Intermediate", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop" },
      { title: "Email Marketing Mastery", instructor: "Rachel Green", rating: 4.6, students: 1123, price: 139, originalPrice: 239, duration: "18h 45m", lessons: 123, level: "Beginner", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop" },
    ],
    photography: [
      { title: "Portrait Photography Masterclass", instructor: "Mark Taylor", rating: 4.8, students: 765, price: 169, originalPrice: 299, duration: "26h 30m", lessons: 178, level: "Intermediate", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop" },
      { title: "Landscape Photography Secrets", instructor: "Sophie Miller", rating: 4.9, students: 543, price: 159, originalPrice: 279, duration: "22h 45m", lessons: 145, level: "Beginner", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop" },
      { title: "Wedding Photography Business", instructor: "James Wilson", rating: 4.7, students: 432, price: 199, originalPrice: 349, duration: "28h 15m", lessons: 189, level: "Advanced", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop" },
      { title: "Street Photography Essentials", instructor: "Emily Davis", rating: 4.8, students: 678, price: 149, originalPrice: 259, duration: "20h 30m", lessons: 134, level: "Beginner", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop" },
    ],
    acting: [
      { title: "Method Acting Intensive", instructor: "Daniel Craig", rating: 4.9, students: 456, price: 299, originalPrice: 499, duration: "40h 15m", lessons: 267, level: "Advanced", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop", badge: "Premium" },
      { title: "Voice Acting for Beginners", instructor: "Isabella Stone", rating: 4.8, students: 321, price: 249, originalPrice: 429, duration: "32h 45m", lessons: 198, level: "Beginner", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop" },
      { title: "Stage Performance Mastery", instructor: "Michael Brooks", rating: 4.7, students: 234, price: 279, originalPrice: 479, duration: "36h 30m", lessons: 234, level: "Intermediate", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop" },
      { title: "Screen Acting Techniques", instructor: "Natalie Reed", rating: 4.8, students: 567, price: 319, originalPrice: 549, duration: "42h 15m", lessons: 278, level: "Advanced", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop" },
    ],
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Discover</h2>
          <h3 className="text-2xl font-semibold mb-2">Our Nexora Courses</h3>
          <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur. Et sed</p>
          <p className="text-gray-500 text-sm">erat sit adipiscing libero tum</p>
        </div>

        {/* Learning Type Toggle */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "text-sm font-medium transition-colors",
                  selectedCategory === category.id
                    ? "text-purple-600 border-b-2 border-purple-600 pb-1"
                    : "text-gray-500 hover:text-purple-600"
                )}
              >
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {courseTypes.map((type) => (
              <Button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                variant={selectedType === type.id ? "default" : "outline"}
                className={cn(
                  "rounded-full px-6",
                  selectedType === type.id ? "bg-purple-600" : "text-gray-500"
                )}
              >
                {type.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                selectedCategory === category.id
                  ? "bg-purple-600 text-white border-purple-600 shadow-md"
                  : "border-gray-200 text-gray-600 hover:border-purple-300 hover:text-purple-600 bg-white"
              }`}
            >
              {/* Removed icon span since icon property doesn't exist in category type */}
              {category.label}
            </Button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses[selectedCategory as keyof typeof courses].map((course, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-sm font-medium flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="absolute top-4 right-4 bg-purple-100 text-purple-600 text-xs font-medium px-2 py-1 rounded">
                  {course.level}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  By {course.instructor}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span>{course.students ? course.students.toLocaleString() : "N/A"} students</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex items-center justify-between">
                <div className="text-purple-600 font-semibold">
                  ${course.price}
                </div>
                <Button variant="outline" className="hover:bg-purple-600 hover:text-white transition-colors">
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 py-3 rounded-xl font-semibold border-purple-200 text-purple-600 hover:bg-purple-50">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
