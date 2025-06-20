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
  Layout,
  BookOpen,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils"; // Adjust based on your setup (e.g., clsx or tailwind-merge)
import { Link } from "react-router-dom";

// Dummy category data
const categories = [
  { id: "development", label: "Development", icon: <Monitor className="w-5 h-5" /> },
  { id: "design", label: "Design", icon: <PenTool className="w-5 h-5" /> },
  { id: "business", label: "Business", icon: <Briefcase className="w-5 h-5" /> },
  { id: "marketing", label: "Marketing", icon: <Megaphone className="w-5 h-5" /> },
  { id: "photography", label: "Photography", icon: <Camera className="w-5 h-5" /> },
  { id: "acting", label: "Acting", icon: <PlayCircle className="w-5 h-5" /> },
];

// Updated Dummy course data with consistent fields
const courses = {
  development: [
    {
      title: "AWS Certified Solutions Architect",
      instructor: "Lina",
      duration: "2 Month",
      price: 80,
      originalPrice: 100,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
      category: "Development",
      description: "Learn to design scalable systems on AWS with hands-on projects.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
    },
    {
      title: "Full Stack Web Development",
      instructor: "Mark",
      duration: "3 Month",
      price: 120,
      originalPrice: 150,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
      category: "Development",
      description: "Master both front-end and back-end development skills.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
    },
    {
      title: "Python for Data Science",
      instructor: "Sophie",
      duration: "1.5 Month",
      price: 90,
      originalPrice: 110,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
      category: "Development",
      description: "Analyze data using Python and its powerful libraries.",
      avatar: "https://images.unsplash.com/photo-1517841903202-8c31b3217a2b?w=50&h=50&fit=crop",
    },
    {
      title: "DevOps Essentials",
      instructor: "James",
      duration: "2.5 Month",
      price: 110,
      originalPrice: 130,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
      category: "Development",
      description: "Streamline software delivery with DevOps practices.",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=50&h=50&fit=crop",
    },
    {
      title: "JavaScript Mastery",
      instructor: "Emily",
      duration: "2 Month",
      price: 95,
      originalPrice: 120,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
      category: "Development",
      description: "Become proficient in JavaScript programming.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
    },
    {
      title: "React for Beginners",
      instructor: "Tom",
      duration: "1 Month",
      price: 70,
      originalPrice: 90,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
      category: "Development",
      description: "Build dynamic UIs with React from scratch.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
    },
    {
      title: "Node.js in Action",
      instructor: "Lisa",
      duration: "2 Month",
      price: 85,
      originalPrice: 105,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
      category: "Development",
      description: "Create scalable backend systems with Node.js.",
      avatar: "https://images.unsplash.com/photo-1517841903202-8c31b3217a2b?w=50&h=50&fit=crop",
    },
    {
      title: "Cloud Computing Basics",
      instructor: "Alex",
      duration: "1.5 Month",
      price: 100,
      originalPrice: 125,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
      category: "Development",
      description: "Understand the fundamentals of cloud computing.",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=50&h=50&fit=crop",
    },
  ],
  design: [
    {
      title: "UI/UX Design Fundamentals",
      instructor: "Alex Chen",
      duration: "3 Month",
      price: 119,
      originalPrice: 219,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
      category: "Design",
      description: "Learn the basics of user-centered design principles.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
      badge: "Popular",
    },
    {
      title: "Advanced Graphic Design",
      instructor: "Emma Davis",
      duration: "2.5 Month",
      price: 99,
      originalPrice: 179,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
      category: "Design",
      description: "Master advanced techniques in graphic design.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
    },
    {
      title: "Web Design Masterclass",
      instructor: "Tom Brown",
      duration: "4 Month",
      price: 139,
      originalPrice: 249,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
      category: "Design",
      description: "Create stunning websites with modern design trends.",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=50&h=50&fit=crop",
    },
    {
      title: "Brand Identity Design",
      instructor: "Lisa Wang",
      duration: "3.5 Month",
      price: 149,
      originalPrice: 279,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      category: "Design",
      description: "Develop strong brand identities for businesses.",
      avatar: "https://images.unsplash.com/photo-1517841903202-8c31b3217a2b?w=50&h=50&fit=crop",
    },
    {
      title: "Motion Graphics Basics",
      instructor: "Sarah Kim",
      duration: "2 Month",
      price: 129,
      originalPrice: 199,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop",
      category: "Design",
      description: "Get started with motion graphics for video content.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
    },
    {
      title: "Typography Mastery",
      instructor: "John Lee",
      duration: "2 Month",
      price: 109,
      originalPrice: 189,
      image: "https://images.unsplash.com/photo-1545231027-637d2f6211f8?w=300&h=200&fit=crop",
      category: "Design",
      description: "Learn the art and science of typography.",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=50&h=50&fit=crop",
    },
    {
      title: "3D Design Fundamentals",
      instructor: "Anna White",
      duration: "3 Month",
      price: 159,
      originalPrice: 259,
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d41?w=300&h=200&fit=crop",
      category: "Design",
      description: "Explore the basics of 3D design and modeling.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
    },
    {
      title: "Illustration for Designers",
      instructor: "Mike Brown",
      duration: "3 Month",
      price: 139,
      originalPrice: 229,
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=300&h=200&fit=crop",
      category: "Design",
      description: "Enhance your design skills with illustration techniques.",
      avatar: "https://images.unsplash.com/photo-1517841903202-8c31b3217a2b?w=50&h=50&fit=crop",
    },
  ],
  business: [
    {
      title: "Business Strategy & Analytics",
      instructor: "Robert Lee",
      duration: "4 Month",
      price: 199,
      originalPrice: 349,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
      category: "Business",
      description: "Learn to craft effective business strategies with data.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
      badge: "Featured",
    },
    {
      title: "Entrepreneurship Bootcamp",
      instructor: "Maria Garcia",
      duration: "3 Month",
      price: 179,
      originalPrice: 299,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
      category: "Business",
      description: "Start your entrepreneurial journey with confidence.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
    },
    {
      title: "Project Management Pro",
      instructor: "David Kim",
      duration: "2.5 Month",
      price: 159,
      originalPrice: 279,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
      category: "Business",
      description: "Master project management techniques and tools.",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=50&h=50&fit=crop",
    },
    {
      title: "Leadership & Team Building",
      instructor: "Jennifer Liu",
      duration: "3 Month",
      price: 189,
      originalPrice: 329,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      category: "Business",
      description: "Develop leadership skills for effective team management.",
      avatar: "https://images.unsplash.com/photo-1517841903202-8c31b3217a2b?w=50&h=50&fit=crop",
    },
    {
      title: "Financial Modeling",
      instructor: "Chris Evans",
      duration: "3 Month",
      price: 169,
      originalPrice: 289,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop",
      category: "Business",
      description: "Build financial models for business decision-making.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
    },
    {
      title: "Startup Funding Guide",
      instructor: "Laura Adams",
      duration: "4 Month",
      price: 199,
      originalPrice: 349,
      image: "https://images.unsplash.com/photo-1556740714-5f8e4e1e5c0b?w=300&h=200&fit=crop",
      category: "Business",
      description: "Navigate the world of startup funding successfully.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
    },
    {
      title: "Corporate Finance Basics",
      instructor: "Michael Scott",
      duration: "2.5 Month",
      price: 149,
      originalPrice: 259,
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21a1c7?w=300&h=200&fit=crop",
      category: "Business",
      description: "Understand the fundamentals of corporate finance.",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=50&h=50&fit=crop",
    },
    {
      title: "Negotiation Skills",
      instructor: "Emily Clark",
      duration: "3 Month",
      price: 179,
      originalPrice: 299,
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=300&h=200&fit=crop",
      category: "Business",
      description: "Learn effective negotiation techniques for success.",
      avatar: "https://images.unsplash.com/photo-1517841903202-8c31b3217a2b?w=50&h=50&fit=crop",
    },
  ],
  marketing: [
    {
      title: "Digital Marketing Complete Guide",
      instructor: "Chris Martinez",
      duration: "4 Month",
      price: 149,
      originalPrice: 259,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
      category: "Marketing",
      description: "Master digital marketing strategies from scratch.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
      badge: "Trending",
    },
    {
      title: "Social Media Marketing Pro",
      instructor: "Anna Tson",
      duration: "2.5 Month",
      price: 119,
      originalPrice: 209,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
      category: "Marketing",
      description: "Grow your brand with social media marketing.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
    },
    {
      title: "SEO & Content Strategy Pro",
      instructor: "Kevin Park",
      duration: "3 Month",
      price: 129,
      originalPrice: 229,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
      category: "Marketing",
      description: "Optimize websites with SEO and content strategies.",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=50&h=50&fit=crop",
    },
    {
      title: "Email Marketing Mastery",
      instructor: "Rachel Green",
      duration: "2 Month",
      price: 139,
      originalPrice: 239,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      category: "Marketing",
      description: "Create effective email campaigns for engagement.",
      avatar: "https://images.unsplash.com/photo-1517841903202-8c31b3217a2b?w=50&h=50&fit=crop",
    },
    {
      title: "Influencer Marketing 101",
      instructor: "Tom Harris",
      duration: "3 Month",
      price: 159,
      originalPrice: 269,
      image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=300&h=200&fit=crop",
      category: "Marketing",
      description: "Leverage influencers to boost your brand.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
    },
    {
      title: "Google Ads Mastery",
      instructor: "Lisa Brown",
      duration: "3.5 Month",
      price: 169,
      originalPrice: 289,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
      category: "Marketing",
      description: "Run successful Google Ads campaigns.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
    },
    {
      title: "Branding Strategies",
      instructor: "Mike Davis",
      duration: "2.5 Month",
      price: 129,
      originalPrice: 219,
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=300&h=200&fit=crop",
      category: "Marketing",
      description: "Develop strong branding strategies for success.",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=50&h=50&fit=crop",
    },
    {
      title: "Marketing Analytics",
      instructor: "Sarah Lee",
      duration: "4 Month",
      price: 179,
      originalPrice: 299,
      image: "https://images.unsplash.com/photo-1551288049-b5f3a7a970c5?w=300&h=200&fit=crop",
      category: "Marketing",
      description: "Analyze marketing data for better decisions.",
      avatar: "https://images.unsplash.com/photo-1517841903202-8c31b3217a2b?w=50&h=50&fit=crop",
    },
  ],
  photography: [
    {
      title: "Portrait Photography Masterclass",
      instructor: "Mark Taylor",
      duration: "3 Month",
      price: 169,
      originalPrice: 299,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
      category: "Photography",
      description: "Capture stunning portraits with professional techniques.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
    },
    {
      title: "Landscape Photography Secrets",
      instructor: "Sophie Miller",
      duration: "2.5 Month",
      price: 159,
      originalPrice: 279,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
      category: "Photography",
      description: "Master the art of landscape photography.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
    },
    {
      title: "Wedding Photography Business",
      instructor: "James Wilson",
      duration: "4 Month",
      price: 199,
      originalPrice: 349,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
      category: "Photography",
      description: "Build a successful wedding photography business.",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=50&h=50&fit=crop",
    },
    {
      title: "Street Photography Essentials",
      instructor: "Emily Davis",
      duration: "2 Month",
      price: 149,
      originalPrice: 259,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      category: "Photography",
      description: "Capture the essence of urban life through photography.",
      avatar: "https://images.unsplash.com/photo-1517841903202-8c31b3217a2b?w=50&h=50&fit=crop",
    },
    {
      title: "Wildlife Photography",
      instructor: "John Harris",
      duration: "3 Month",
      price: 179,
      originalPrice: 299,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=200&fit=crop",
      category: "Photography",
      description: "Photograph wildlife in their natural habitats.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
    },
    {
      title: "Night Photography Techniques",
      instructor: "Anna Lee",
      duration: "2.5 Month",
      price: 169,
      originalPrice: 289,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=200&fit=crop",
      category: "Photography",
      description: "Learn techniques for stunning night photography.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
    },
    {
      title: "Food Photography Basics",
      instructor: "Mike Smith",
      duration: "2 Month",
      price: 139,
      originalPrice: 239,
      image: "https://images.unsplash.com/photo-1551214012-84f95e060dee?w=300&h=200&fit=crop",
      category: "Photography",
      description: "Photograph food with professional lighting and styling.",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=50&h=50&fit=crop",
    },
    {
      title: "Travel Photography Pro",
      instructor: "Sarah Brown",
      duration: "3 Month",
      price: 189,
      originalPrice: 329,
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=300&h=200&fit=crop",
      category: "Photography",
      description: "Capture breathtaking travel moments like a pro.",
      avatar: "https://images.unsplash.com/photo-1517841903202-8c31b3217a2b?w=50&h=50&fit=crop",
    },
  ],
  acting: [
    {
      title: "Method Acting Intensive",
      instructor: "Daniel Craig",
      duration: "5 Month",
      price: 299,
      originalPrice: 499,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
      category: "Acting",
      description: "Dive deep into method acting techniques.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
      badge: "Premium",
    },
    {
      title: "Voice Acting for Beginners",
      instructor: "Isabella Stone",
      duration: "4 Month",
      price: 249,
      originalPrice: 429,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
      category: "Acting",
      description: "Learn the basics of voice acting for media.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
    },
    {
      title: "Stage Performance Mastery",
      instructor: "Michael Brooks",
      duration: "4.5 Month",
      price: 279,
      originalPrice: 479,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
      category: "Acting",
      description: "Excel in stage performances with confidence.",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=50&h=50&fit=crop",
    },
    {
      title: "Screen Acting Techniques",
      instructor: "Natalie Reed",
      duration: "5 Month",
      price: 319,
      originalPrice: 549,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      category: "Acting",
      description: "Master acting techniques for film and TV.",
      avatar: "https://images.unsplash.com/photo-1517841903202-8c31b3217a2b?w=50&h=50&fit=crop",
    },
    {
      title: "Improv Acting Skills",
      instructor: "Tom Harris",
      duration: "4 Month",
      price: 269,
      originalPrice: 459,
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=300&h=200&fit=crop",
      category: "Acting",
      description: "Enhance your spontaneity with improv skills.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
    },
    {
      title: "Acting for Film",
      instructor: "Sarah Lee",
      duration: "4.5 Month",
      price: 289,
      originalPrice: 489,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=200&fit=crop",
      category: "Acting",
      description: "Learn the nuances of acting for film productions.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
    },
    {
      title: "Theater Acting Basics",
      instructor: "Mike Davis",
      duration: "3.5 Month",
      price: 239,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1551214012-84f95e060dee?w=300&h=200&fit=crop",
      category: "Acting",
      description: "Get started with theater acting fundamentals.",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=50&h=50&fit=crop",
    },
    {
      title: "Acting Audition Prep",
      instructor: "Anna White",
      duration: "4 Month",
      price: 279,
      originalPrice: 469,
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=300&h=200&fit=crop",
      category: "Acting",
      description: "Prepare effectively for acting auditions.",
      avatar: "https://images.unsplash.com/photo-1517841903202-8c31b3217a2b?w=50&h=50&fit=crop",
    },
  ],
};

export default function CategoryTabsPage() {
  const [selected, setSelected] = useState("marketing"); // Default to marketing
  const [learningMode, setLearningMode] = useState<"supervised" | "unsupervised">("supervised"); // Toggle between supervised and unsupervised
  const [showAllMarketing, setShowAllMarketing] = useState(false); // Toggle for marketing View All/View Less
  const selectedLabel = categories.find((c) => c.id === selected)?.label || "Category";

  // Simulate filtering courses based on learning mode
  const allCourses = courses[selected as keyof typeof courses]; // Type assertion for correct indexing
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
    <div className="font-sans">
      {/* Navigation and Top Mentors Section */}
      <section className="py-0">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 ">
          {/* Top Mentors Section */}
          <div className="mb-12">
            <h2 className="text-5xl font-mont font-medium  text-gray-900 mb-4 text-center">
              Discover<br /> Our Nexora Courses
            </h2>
            <br></br>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-8">
              Lorum ipsum dolor sit amet consectetur.Ut sed<br></br>non elit adipiscing bibendum.
            </p>
          </div>

          {/* Supervised/Unsupervised Toggle */}
          <div className="flex justify-end mb-6">
            <div className="relative flex w-60 h-10 bg-gray-100 border border-gray-200 rounded-full overflow-hidden shadow-lg">
              <div
                className={`absolute top-0.5 bottom-0.5 w-1/2 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full transition-transform duration-300 ease-in-out transform ${learningMode === "supervised" ? "translate-x-0.5" : "translate-x-[calc(100%-0.25rem)]"
                  }`}
              />
              <button
                onClick={() => setLearningMode("supervised")}
                className="relative flex-1 flex items-center justify-center text-sm font-medium py-2 z-10 px-4"
              >
                <span
                  className={`${learningMode === "supervised" ? "text-white" : "text-purple-600"
                    } transition-colors duration-300`}
                >
                  Supervised
                </span>
              </button>
              <button
                onClick={() => setLearningMode("unsupervised")}
                className="relative flex-1 flex items-center justify-center text-sm font-medium py-2 z-10 px-1"
              >
                <span
                  className={`${learningMode === "unsupervised" ? "text-white" : "text-purple-600"
                    } transition-colors duration-300`}
                >
                  Unsupervised
                </span>
              </button>
            </div>
          </div>

          {/* Our Courses Title and Tabs */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Courses</h1>
            <div className="flex items-center justify-start space-x-6 border-b border-gray-200">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelected(category.id)}
                  className={`relative flex  items-center space-x-2 text-sm font-medium py-2 px-4 transition-colors ${selected === category.id
                      ? "text-purple-600"
                      : "text-gray-500 hover:text-purple-600"
                    }`}
                >
                  <span>{category.icon} </span>
                  <span>{category.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300 ${selected === category.id
                        ? "bg-gradient-to-r from-purple-400 to-purple-600"
                        : "bg-transparent"
                      }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="w-[90%] mx-auto px-4 pb-10 sm:px-6 lg:px-4 mt-10">
        {/* <div className="flex items-center justify-between mb-8"> */}
          {/* <h1 className="text-3xl font-bold text-gray-800">{selectedLabel} Courses</h1> */}
        {/* </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6">
          {displayedCourses.length > 0 ? (
            displayedCourses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer  lg:w-[215px] lg:h-[350px] xl:w-[250px] xl:h-[400px] 2xl:w-[290px] 2xl:h-[500px]  3xl:h-[617px] 3xl:w-[380px] lg:my-2 xl:my-5"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full lg:h-[45%] xl:h-[45%] 2xl:h-[45%] 3xl:h-[45%] object-cover rounded-[10%] px-4 py-4 pl-4 pr-4 "
                />
                <div className="px-4 py-3">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-1">
                    <div className="flex items-center space-x-1">
                      <BookOpen className="lg:w-2 lg:h-2 xl:w-3 xl:h-3 2xl:w-4 2xl:h-4 3xl:w-6 3xl:h-6"/>
                      <span className="lg:text-[10px] xl:text-xs 2xl:text-sm 3xl:text-base">{course.category}</span>
                    </div >
                    <div className="flex items-center gap-1">
                      <Clock className='lg:w-2 lg:h-2 xl:w-3 xl:h-3 2xl:w-4 2xl:h-4 3xl:w-6 3xl:h-6' />


                      <span className="lg:text-[10px] xl:text-xs 2xl:text-sm 3xl:text-base">{course.duration}</span>
                    </div>
                  </div>
                  <h3 className="min-h-[72px] lg:text-lg xl:text-lg 2xl:text-2xl 3xl:text-3xl xl:mt-2 2xl:mt-4 font-normal text-gray-900 leading-tight">{course.title}</h3>
                  <p className="text-sm lg:text-[10px] xl:text-[12px] 2xl:text-sm 3xl:text-lg xl:mt-2 2xl:mt-6 text-gray-500  leading-snug">{course.description}</p>
                  <div className="flex items-center justify-between px-0 py-3 border-t lg:mt-0.5 xl:mt-1 2xl:mt-4">
                    <div className="flex items-center space-x-2">
                      <img
                        src={course.avatar}
                        alt={course.instructor}
                        className="lg:w-6 lg:h-6 xl:h-7 xl:w-7 2xl:w-8 2xl:h-8 3xl:w-10 3xl:h-10 rounded-full object-cover"
                      />
                      <span className="lg:text-xs xl:text-sm  2xl:text-sm 3xl:text-lg font-medium text-gray-800">{course.instructor}</span>
                    </div>
                    <div className="lg:text-xs xl:text-sm 2xl:text-lg 3xl:text-xl  2xl:mt-4  text-gray-400">
                      {course.originalPrice && (
                        <span className="line-through mr-2 lg:text-[10px] xl:text-[10px] 2xl:text-xs 3xl:text-sm">
                          ${course.originalPrice}
                        </span>
                      )}
                      <span className="lg:text-[15px] xl:text-sm 2xl:text-base 3xl:text-lg  font-bold text-purple-600">${course.price}</span>
                    </div>
                  </div>
                  {/* {course.badge && (
                    <span className="inline-block mt-3 px-2 py-1 text-xs font-semibold text-white bg-purple-600 rounded">
                      {course.badge}
                    </span>
                  )} */}
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
        {/* {selected === "marketing" && filteredCourses.length > 0 && (
          <div className="flex justify-end mt-8">
            <button
              onClick={() => setShowAllMarketing(!showAllMarketing)}
              className="flex items-center bg-white border border-gray-300 rounded-full text-sm font-medium"
              aria-expanded={showAllMarketing}
            >
              <span className="px-4 py-2 text-black">{showAllMarketing ? "View Less" : "View All"}</span>
              <span
                className="px-2 py-2 rounded-r-full bg-purple-600"
              > */}
        <div className="flex justify-end mt-12 ">
          <Link
            to="#" // Replace with your actual "View All" route
            className="flex items-center px-6 py-3  bg-white text-[#8A63FF] border border-[#8A63FF] rounded-full hover:bg-[#8A63FF] hover:text-white transition-colors duration-300 shadow-md"
          >
            View All
            <span className="ml-2 flex items-center justify-center w-6 h-6 bg-[#8A63FF] rounded-full">
              <ArrowUp className="w-4 h-4 text-white transform rotate-45" />
            </span>
          </Link>
        </div>
        {/* </span>
            </button>
          </div> */}

      </div>
    </div>
  );
};
