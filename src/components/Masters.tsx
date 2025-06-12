import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  Code2,
  Layout,
  Wrench,
  Sparkle,
  Calculator,
  Users,
  Megaphone,
  ArrowUp,
} from "lucide-react";

const Masters = () => {
  const [activeCategory, setActiveCategory] = useState<string>("UI Designer");

  const categories = [
    { name: "Developer", icon: Code2 },
    { name: "UI Designer", icon: Layout },
    { name: "Mechanical", icon: Wrench },
    { name: "Designer", icon: Sparkle },
    { name: "Accountant", icon: Calculator },
    { name: "Human Resource", icon: Users },
    { name: "Marketing", icon: Megaphone },
  ];

  const allMasters = [
    {
      name: "Zrand Hobs",
      role: "Developer",
      category: "Developer",
      rating: 4.8,
      reviews: 16,
      skills: ["GIMP", "WORDPRESS"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b669ad00?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Dorothy Wood",
      role: "Teacher",
      category: "UI Designer",
      rating: 4.8,
      reviews: 16,
      skills: ["Elementor", "Wix", "Illustrator"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Timothy Baker",
      role: "Teacher",
      category: "UI Designer",
      rating: 4.8,
      reviews: 16,
      skills: ["Figma", "Elementor"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Shane Pratt",
      role: "Developer",
      category: "Developer",
      rating: 4.8,
      reviews: 16,
      skills: ["Figma", "WORDPRESS", "GIMP"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Frances Washington",
      role: "Developer",
      category: "Developer",
      rating: 4.8,
      reviews: 16,
      skills: ["WORDPRESS", "Wix", "Illustrator"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Jason Bell",
      role: "Web Designer",
      category: "UI Designer",
      rating: 4.8,
      reviews: 16,
      skills: ["Elementor", "WORDPRESS"],
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Kathryn Sanchez",
      role: "Teacher",
      category: "UI Designer",
      rating: 4.8,
      reviews: 16,
      skills: ["Framer", "WebFlow", "Wix"],
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Jaime Strickland",
      role: "Web Designer",
      category: "UI Designer",
      rating: 4.8,
      reviews: 16,
      skills: ["GIMP", "Figma", "WebFlow"],
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
    },
    // Additional dummy data for other categories
    {
      name: "Eva Carter",
      role: "Mechanical Engineer",
      category: "Mechanical",
      rating: 4.7,
      reviews: 10,
      skills: ["AutoCAD", "SolidWorks"],
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Robert Miles",
      role: "Graphic Designer",
      category: "Designer",
      rating: 4.9,
      reviews: 25,
      skills: ["Photoshop", "Illustrator"],
      image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Sarah Boone",
      role: "Accountant",
      category: "Accountant",
      rating: 4.8,
      reviews: 13,
      skills: ["Tally", "Excel"],
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "David Gray",
      role: "HR Manager",
      category: "Human Resource",
      rating: 4.6,
      reviews: 19,
      skills: ["Recruitment", "Communication"],
      image: "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Lily Adams",
      role: "Marketing Lead",
      category: "Marketing",
      rating: 4.9,
      reviews: 22,
      skills: ["SEO", "Campaigns"],
      image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=300&h=300&fit=crop&crop=face",
    },
  ];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const filteredMasters =
    activeCategory === "All"
      ? allMasters
      : allMasters.filter((master) => master.category === activeCategory);

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Links */}
        <div className="flex justify-center gap-6 border-b border-gray-200 mb-12 flex-wrap">
          {categories.map((category, index) => {
            const isActive = activeCategory === category.name;
            const Icon = category.icon;

            return (
              <button
                key={index}
                onClick={() => handleCategoryClick(category.name)}
                className={`relative flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors duration-300
                ${isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-500"}`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-blue-600" : "text-gray-500"}`} />
                {category.name}
                {isActive && (
                  <span className="absolute left-0 -bottom-[1px] h-[2px] w-full bg-blue-600 rounded-full shadow-[0_2px_6px_rgba(0,115,255,0.4)]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Masters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMasters.map((master, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 hover:bg-[#F1EDFF] hover:text-white"
            >
              <div className="flex items-center mb-4">
                <img
                  src={master.image}
                  alt={master.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {master.name}
                  </h3>
                  <p className="text-sm text-gray-500">{master.role}</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="text-gray-600">
                  {master.rating} ({master.reviews})
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {master.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
          <div className="flex justify-center mt-12">
          <button
            onClick={() => setActiveCategory("All")}
            className="flex items-center px-6 py-3 bg-white text-purple-600 border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
          >
            View All
            <ArrowUp className="ml-2 w-5 h-5" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Masters;
