"use client";

import { useState } from "react";
import {
  Monitor,
  PenTool,
  Briefcase,
  Megaphone,
  Camera,
  PlayCircle,
  ArrowUp,
} from "lucide-react";
import { cn } from "@/lib/utils"; // Adjust based on your setup (e.g., clsx or tailwind-merge)

// Dummy category data
const categories = [
  { id: "development", label: "Development", icon: <Monitor className="w-5 h-5" /> },
  { id: "design", label: "Design", icon: <PenTool className="w-5 h-5" /> },
  { id: "business", label: "Business", icon: <Briefcase className="w-5 h-5" /> },
  { id: "marketing", label: "Marketing", icon: <Megaphone className="w-5 h-5" /> },
  { id: "photography", label: "Photography", icon: <Camera className="w-5 h-5" /> },
  { id: "acting", label: "Acting", icon: <PlayCircle className="w-5 h-5" /> },
];

// Dummy course data
const courses = {
  development: [
    {
      title: "AWS Certified Solutions Architect",
      instructor: "Lina",
      duration: "2 Month",
      price: 80,
      image: "/placeholder.svg",
    },
    {
      title: "Full Stack Web Development",
      instructor: "Mark",
      duration: "3 Month",
      price: 120,
      image: "/placeholder.svg",
    },
    {
      title: "Python for Data Science",
      instructor: "Sophie",
      duration: "1.5 Month",
      price: 90,
      image: "/placeholder.svg",
    },
    {
      title: "DevOps Essentials",
      instructor: "James",
      duration: "2.5 Month",
      price: 110,
      image: "/placeholder.svg",
    },
    {
      title: "JavaScript Mastery",
      instructor: "Emily",
      duration: "2 Month",
      price: 95,
      image: "/placeholder.svg",
    },
    {
      title: "React for Beginners",
      instructor: "Tom",
      duration: "1 Month",
      price: 70,
      image: "/placeholder.svg",
    },
    {
      title: "Node.js in Action",
      instructor: "Lisa",
      duration: "2 Month",
      price: 85,
      image: "/placeholder.svg",
    },
    {
      title: "Cloud Computing Basics",
      instructor: "Alex",
      duration: "1.5 Month",
      price: 100,
      image: "/placeholder.svg",
    },
  ],
  design: [
    {
      title: "UI/UX Design Fundamentals",
      instructor: "Alex Chen",
      rating: 4.9,
      students: 876,
      price: 119,
      originalPrice: 219,
      duration: "22h 10m",
      lessons: 145,
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
      badge: "Popular",
    },
    {
      title: "Advanced Graphic Design",
      instructor: "Emma Davis",
      rating: 4.7,
      students: 654,
      price: 99,
      originalPrice: 179,
      duration: "19h 30m",
      lessons: 112,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
    },
    {
      title: "Web Design Masterclass",
      instructor: "Tom Brown",
      rating: 4.8,
      students: 1123,
      price: 139,
      originalPrice: 249,
      duration: "26h 45m",
      lessons: 178,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
    },
    {
      title: "Brand Identity Design",
      instructor: "Lisa Wang",
      enough: 4.6,
      students: 789,
      price: 149,
      originalPrice: 279,
      duration: "24h 15m",
      lessons: 156,
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
    },
    {
      title: "Motion Graphics Basics",
      instructor: "Sarah Kim",
      rating: 4.5,
      students: 432,
      price: 129,
      originalPrice: 199,
      duration: "18h 20m",
      lessons: 98,
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop",
    },
    {
      title: "Typography Mastery",
      instructor: "John Lee",
      rating: 4.8,
      students: 567,
      price: 109,
      originalPrice: 189,
      duration: "16h 40m",
      lessons: 85,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1545231027-637d2f6211f8?w=300&h=200&fit=crop",
    },
    {
      title: "3D Design Fundamentals",
      instructor: "Anna White",
      rating: 4.7,
      students: 321,
      price: 159,
      originalPrice: 259,
      duration: "20h 50m",
      lessons: 134,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d41?w=300&h=200&fit=crop",
    },
    {
      title: "Illustration for Designers",
      instructor: "Mike Brown",
      rating: 4.6,
      students: 654,
      price: 139,
      originalPrice: 229,
      duration: "22h 30m",
      lessons: 145,
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=300&h=200&fit=crop",
    },
  ],
  business: [
    {
      title: "Business Strategy & Analytics",
      instructor: "Robert Lee",
      rating: 4.8,
      students: 1456,
      price: 199,
      originalPrice: 349,
      duration: "35h 20m",
      lessons: 234,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
      badge: "Featured",
    },
    {
      title: "Entrepreneurship Bootcamp",
      instructor: "Maria Garcia",
      rating: 4.9,
      students: 987,
      price: 179,
      originalPrice: 299,
      duration: "28h 45m",
      lessons: 189,
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
    },
    {
      title: "Project Management Pro",
      instructor: "David Kim",
      rating: 4.7,
      students: 1234,
      price: 159,
      originalPrice: 279,
      duration: "22h 30m",
      lessons: 145,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
    },
    {
      title: "Leadership & Team Building",
      instructor: "Jennifer Liu",
      rating: 4.8,
      students: 876,
      price: 189,
      originalPrice: 329,
      duration: "26h 15m",
      lessons: 167,
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
    },
    {
      title: "Financial Modeling",
      instructor: "Chris Evans",
      rating: 4.6,
      students: 543,
      price: 169,
      originalPrice: 289,
      duration: "24h 10m",
      lessons: 156,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop",
    },
    {
      title: "Startup Funding Guide",
      instructor: "Laura Adams",
      rating: 4.9,
      students: 765,
      price: 199,
      originalPrice: 349,
      duration: "30h 20m",
      lessons: 198,
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1556740714-5f8e4e1e5c0b?w=300&h=200&fit=crop",
    },
    {
      title: "Corporate Finance Basics",
      instructor: "Michael Scott",
      rating: 4.7,
      students: 432,
      price: 149,
      originalPrice: 259,
      duration: "20h 45m",
      lessons: 134,
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21a1c7?w=300&h=200&fit=crop",
    },
    {
      title: "Negotiation Skills",
      instructor: "Emily Clark",
      rating: "4.8",
      students: 987,
      price: 179,
      originalPrice: 299,
      duration: "25h 30m",
      lessons: 167,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=300&h=200&fit=crop",
    },
  ],
  marketing: [
    {
      title: "Digital Marketing Complete Guide",
      instructor: "Chris Martinez",
      rating: 4.9,
      students: 2134,
      price: 149,
      originalPrice: 259,
      duration: "30h 45m",
      lessons: 198,
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
      badge: "Trending",
    },
    {
      title: "Social Media Marketing Pro",
      instructor: "Anna Thompson",
      rating: 4.7,
      students: 1567,
      price: 119,
      originalPrice: 209,
      duration: "20h 30m",
      lessons: 134,
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
    },
    {
      title: "SEO & Content Strategy",
      instructor: "Kevin Park",
      rating: 4.8,
      students: 987,
      price: 129,
      originalPrice: 229,
      duration: "24h 15m",
      lessons: 156,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
    },
    {
      title: "Email Marketing Mastery",
      instructor: "Rachel Green",
      rating: 4.6,
      students: 1123,
      price: 139,
      originalPrice: 239,
      duration: "18h 45m",
      lessons: 123,
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
    },
    {
      title: "Influencer Marketing 101",
      instructor: "Tom Harris",
      rating: 4.7,
      students: 876,
      price: 159,
      originalPrice: 269,
      duration: "22h 20m",
      lessons: 145,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=300&h=200&fit=crop",
    },
    {
      title: "Google Ads Mastery",
      instructor: "Lisa Brown",
      rating: 4.8,
      students: 543,
      price: 169,
      originalPrice: 289,
      duration: "26h 10m",
      lessons: 167,
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
    },
    {
      title: "Branding Strategies",
      instructor: "Mike Davis",
      rating: 4.6,
      students: 432,
      price: 129,
      originalPrice: 219,
      duration: "20h 50m",
      lessons: 134,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=300&h=200&fit=crop",
    },
    {
      title: "Marketing Analytics",
      instructor: "Sarah Lee",
      rating: 4.9,
      students: 987,
      price: 179,
      originalPrice: 299,
      duration: "28h 30m",
      lessons: 189,
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1551288049-b5f3a7a970c5?w=300&h=200&fit=crop",
    },
  ],
  photography: [
    {
      title: "Portrait Photography Masterclass",
      instructor: "Mark Taylor",
      rating: 4.8,
      students: 765,
      price: 169,
      originalPrice: 299,
      duration: "26h 30m",
      lessons: 178,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
    },
    {
      title: "Landscape Photography Secrets",
      instructor: "Sophie Miller",
      rating: 4.9,
      students: 543,
      price: 159,
      originalPrice: 279,
      duration: "22h 45m",
      lessons: 145,
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=350&h=200&fit=crop",
    },
    {
      title: "Wedding Photography Business",
      instructor: "James Wilson",
      rating: 4.7,
      students: 432,
      price: 199,
      originalPrice: 349,
      duration: "28h 15m",
      lessons: 189,
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
    },
    {
      title: "Street Photography Essentials",
      instructor: "Emily Davis",
      rating: 4.8,
      students: 678,
      price: 149,
      originalPrice: 259,
      duration: "20h 30m",
      lessons: 134,
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
    },
    {
      title: "Wildlife Photography",
      instructor: "John Harris",
      rating: 4.7,
      students: 321,
      price: 179,
      originalPrice: 299,
      duration: "24h 20m",
      lessons: 156,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=200&fit=crop",
    },
    {
      title: "Night Photography Techniques",
      instructor: "Anna Lee",
      rating: 4.8,
      students: 543,
      price: 169,
      originalPrice: 289,
      duration: "22h 10m",
      lessons: 145,
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=200&fit=crop",
    },
    {
      title: "Food Photography Basics",
      instructor: "Mike Smith",
      rating: 4.6,
      students: 432,
      price: 139,
      originalPrice: 239,
      duration: "18h 50m",
      lessons: 123,
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1551214012-84f95e060dee?w=300&h=200&fit=crop",
    },
    {
      title: "Travel Photography Pro",
      instructor: "Sarah Brown",
      rating: 4.9,
      students: 876,
      price: 189,
      originalPrice: 329,
      duration: "26h 30m",
      lessons: 167,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=300&h=200&fit=crop",
    },
  ],
  acting: [
    {
      title: "Method Acting Intensive",
      instructor: "Daniel Craig",
      rating: 4.9,
      students: 456,
      price: 299,
      originalPrice: 499,
      duration: "40h 15m",
      lessons: 267,
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
      badge: "Premium",
    },
    {
      title: "Voice Acting for Beginners",
      instructor: "Isabella Stone",
      rating: 4.8,
      students: 321,
      price: 249,
      originalPrice: 429,
      duration: "32h 45m",
      lessons: 198,
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
    },
    {
      title: "Stage Performance Mastery",
      instructor: "Michael Brooks",
      rating: 4.7,
      students: 234,
      price: 279,
      originalPrice: 479,
      duration: "36h 30m",
      lessons: 234,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
    },
    {
      title: "Screen Acting Techniques",
      instructor: "Natalie Reed",
      rating: 4.8,
      students: 567,
      price: 319,
      originalPrice: 549,
      duration: "42h 15m",
      lessons: 278,
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
    },
    {
      title: "Improv Acting Skills",
      instructor: "Tom Harris",
      rating: 4.7,
      students: 432,
      price: 269,
      originalPrice: 459,
      duration: "34h 20m",
      lessons: 212,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=300&h=200&fit=crop",
    },
    {
      title: "Acting for Film",
      instructor: "Sarah Lee",
      rating: 4.8,
      students: 543,
      price: 289,
      originalPrice: 489,
      duration: "38h 10m",
      lessons: 245,
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=200&fit=crop",
    },
    {
      title: "Theater Acting Basics",
      instructor: "Mike Davis",
      rating: 4.6,
      students: 321,
      price: 239,
      originalPrice: 399,
      duration: "30h 50m",
      lessons: 189,
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1551214012-84f95e060dee?w=300&h=200&fit=crop",
    },
    {
      title: "Acting Audition Prep",
      instructor: "Anna White",
      rating: 4.9,
      students: 765,
      price: 279,
      originalPrice: 469,
      duration: "36h 30m",
      lessons: 234,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=300&h=200&fit=crop",
    },
  ],
};

export default function CategoryTabsPage() {
  const [selected, setSelected] = useState("marketing"); // Default to marketing
  const [learningMode, setLearningMode] = useState("supervised"); // Toggle between supervised and unsupervised
  const [showAllMarketing, setShowAllMarketing] = useState(false); // Toggle for marketing View All/View Less
  const selectedLabel = categories.find((c) => c.id === selected)?.label || "Category";

  // Simulate filtering courses based on learning mode (since data doesn't have this field)
  const allCourses = courses[selected];
  const filteredCourses =
    learningMode === "supervised"
      ? allCourses.slice(0, Math.ceil(allCourses.length / 2)) // First half for supervised
      : allCourses.slice(Math.ceil(allCourses.length / 2)); // Second half for unsupervised

  // For marketing: Show filtered courses with a limit of 4 unless showAllMarketing is true
  const displayedCourses =
    selected === "marketing" && showAllMarketing
      ? courses["marketing"] // Show all marketing courses when View All is clicked
      : filteredCourses.slice(0, 4); // Otherwise, apply learning mode filter and limit to 4

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Supervised/Unsupervised Toggle */}
      <div className="flex justify-end mb-6">
        <div className="relative flex w-[200px] h-10 bg-white rounded-full overflow-hidden shadow-sm">
          {/* Gradient Border */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(to right, #A78BFA, #C084FC)",
              padding: "2px", // Border width
            }}
          >
            <div className="w-full h-full bg-white rounded-full" />
          </div>

          {/* Toggle Sections */}
          <button
            onClick={() => setLearningMode("supervised")}
            className="relative flex-1 flex items-center justify-center text-sm font-medium transition-colors duration-300 z-10"
          >
            <span
              className={cn(
                "relative z-10",
                learningMode === "supervised" ? "text-white" : "text-purple-600"
              )}
            >
              Supervised
            </span>
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full transition-opacity duration-300 mx-[1px]",
                learningMode === "supervised" ? "opacity-100" : "opacity-0"
              )}
            />
          </button>
          <button
            onClick={() => setLearningMode("unsupervised")}
            className="relative flex-1 flex items-center justify-center text-sm font-medium transition-colors duration-300 z-10"
          >
            <span
              className={cn(
                "relative z-10",
                learningMode === "unsupervised" ? "text-white" : "text-purple-600"
              )}
            >
              Unsupervised
            </span>
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full transition-opacity duration-300 mx-[1px]",
                learningMode === "unsupervised" ? "opacity-100" : "opacity-0"
              )}
            />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center space-x-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelected(category.id)}
              className={cn(
                "relative flex items-center space-x-2 text-sm font-medium pt-4 pb-2 px-4 transition-colors",
                selected === category.id
                  ? "text-purple-600"
                  : "text-gray-500 hover:text-purple-600"
              )}
            >
              {selected === category.id && (
                <span className="absolute inset-0 -top-2 z-0 bg-gradient-to-t from-purple-200 to-transparent rounded-md" />
              )}
              <span className="relative z-10">{category.icon}</span>
              <span className="relative z-10">{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="mt-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">{selectedLabel} Courses</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedCourses.length > 0 ? (
            displayedCourses.map((course, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">by {course.instructor}</p>
                  <p className="text-gray-500 text-sm mb-2">{course.duration}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-purple-600">${course.price}</span>
                    {course.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ${course.originalPrice}
                      </span>
                    )}
                  </div>
                  {course.rating && (
                    <p className="text-sm text-gray-600 mt-2">
                      Rating: {course.rating} ({course.students} students)
                    </p>
                  )}
                  {course.badge && (
                    <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold text-white bg-purple-600 rounded">
                      {course.badge}
                    </span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center col-span-full">
              No courses available for this mode.
            </p>
          )}
        </div>

        {/* View All Button (only for marketing category) */}
        {selected === "marketing" && filteredCourses.length > 0 && (
          <div className="flex justify-center mt-8" style={{ marginLeft: "85%" }}>
            <button
              onClick={() => setShowAllMarketing(!showAllMarketing)}
              className="flex items-center bg-white border border-gray-300 rounded-full text-sm font-medium"
              aria-expanded={showAllMarketing}
            >
              <span className="px-4 py-2 text-black">{showAllMarketing ? "View Less" : "View All"}</span>
              <span
                className="px-2 py-2 rounded-r-full"
                style={{ backgroundColor: "#8B5CF6" }}
              >
                <ArrowUp
                  className={cn(
                    "w-5 h-5 text-white transition-transform duration-300",
                    showAllMarketing && "rotate-180"
                  )}
                />
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}