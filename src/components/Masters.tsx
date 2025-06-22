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
      id: 1,
      name: "Zrand Hobs",
      role: "Developer",
      category: "Developer",
      rating: 4.8,
      reviews: 16,
      skills: ["Gimp", "Wordpress"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b669ad00?w=300&h=300&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Dorothy Wood",
      role: "Teacher",
      category: "UI Designer",
      rating: 4.8,
      reviews: 16,
      skills: ["Elemento", "Wix", "Illustrator"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Timothy Baker",
      role: "Teacher",
      category: "UI Designer",
      rating: 4.8,
      reviews: 16,
      skills: ["Figma",  "Wordpress"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Shane Pratt",
      role: "Developer",
      category: "Developer",
      rating: 4.8,
      reviews: 16,
      skills: ["Figma", "Wordpress", "Gimp"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Frances Washington",
      role: "Developer",
      category: "Developer",
      rating: 4.8,
      reviews: 16,
      skills: ["Wordpress", "Wix", "Illustrator"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "Jason Bell",
      role: "Web Designer",
      category: "UI Designer",
      rating: 4.8,
      reviews: 16,
      skills: ["Elementor", "Wordpress"],
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=300&fit=crop&crop=face",
    },
    {
      id: 7,
      name: "Kathryn Sanchez",
      role: "Teacher",
      category: "UI Designer",
      rating: 4.8,
      reviews: 16,
      skills: ["Framer", "Webflow", "Wix"],
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop&crop=face",
    },
    {
      id: 8,
      name: "Jaime Strickland",
      role: "Web Designer",
      category: "UI Designer",
      rating: 4.8,
      reviews: 16,
      skills: ["Gimp", "Figma", "Webflow"],
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
    },
    // Additional dummy data for other categories
    {
      id: 9,
      name: "Eva Carter",
      role: "Mechanical Engineer",
      category: "Mechanical",
      rating: 4.7,
      reviews: 10,
      skills: ["AutoCAD", "SolidWorks"],
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
    },
    {
      id: 10,
      name: "Robert Miles",
      role: "Graphic Designer",
      category: "Designer",
      rating: 4.9,
      reviews: 25,
      skills: ["Photoshop", "Illustrator"],
      image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=300&h=300&fit=crop&crop=face",
    },
    {
      id: 11,
      name: "Sarah Boone",
      role: "Accountant",
      category: "Accountant",
      rating: 4.8,
      reviews: 13,
      skills: ["Tally", "Excel"],
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop&crop=face",
    },
    {
      id: 12,
      name: "David Gray",
      role: "HR Manager",
      category: "Human Resource",
      rating: 4.6,
      reviews: 19,
      skills: ["Recruitment", "Communication"],
      image: "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?w=300&h=300&fit=crop&crop=face",
    },
    {
      id: 13,
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
    <section className="py-20">
      <div className="w-[100%] flex justify-center items-center flex-col px-4 sm:px-6 lg:px-8">
        {/* Navigation Links */}
        <div className="flex justify-center gap-6 border-b w-[80%] border-gray-200 mb-12 flex-wrap">
          {categories.map((category, index) => {
            const isActive = activeCategory === category.name;
            const Icon = category.icon;

            return (
              <button
                key={index}
                onClick={() => handleCategoryClick(category.name)}
                className={`relative flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors duration-300
                 ${isActive 
                 ? "text-blue-600 g-gradient-to-b from-transparent from-49.76% to-[#E6F0FF]" 
                 : "text-gray-500 hover:text-blue-500"}`}
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
        <div className="w-[100%] flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-[70%]">
            {filteredMasters.map((master) => (
              // Individual Master Card
              <div
                key={master.id}
                className={`
       
                
                group 
       
                bg-white rounded-xl p-1 transition-all duration-300 ease-in-out
       
                transform-gpu cursor-pointer
       
                hover:bg-[#8A63FF1A]              
        
                hover:shadow-xl hover:shadow-purple-100 
       
                hover:border-purple-500 hover:border-2 
                border-gray-100 border 
     
              `}

              >
                {/* Content within the card */}
                <div className="flex flex-col items-center text-center w-[100%]   p-4  rounded-2xl  overflow-hidden">
                  <img
                    src={master.image}
                    alt={master.name}
                    className="lg:w-14 lg:h-14 xl:w-20 xl:h-20 rounded-full object-cover mb-2 shadow-md"
                  />
                  {/* Star rating moved after the image */}
                  <div className="flex items-center mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1 group-hover:fill-yellow-400" />
                    <span className="text-gray-600 text-sm">
                      {master.rating} ({master.reviews})
                    </span>
                  </div>
                  <div className="mb-4"> {/* Group name and role */}
                    <h3 className="font-semibold lg:text-sm xl:text-base 2xl:text-lg text-gray-900">{master.name}</h3>
                    <p className="lg:text-xs xl:text-sm 2xl:text-base text-gray-500">{master.role}</p>
                  </div>
                  <div className="flex  justify-center gap-1">
                    {master.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 lg:text-[12px] xl:text-sm 2xl:text-base rounded-full font-medium transition-all duration-300 ease-in-out group-hover:bg-[#8A63FF1A] group-hover:border-purple-500 group-hover:border-2"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Link
            to="#" // Replace with your actual "View All" route
            className="flex items-center px-6 py-2 bg-white text-[#8A63FF] border border-[#8AB9FF] rounded-full hover:bg-[#8A63FF] hover:text-white transition-colors duration-300 shadow-md"
          >
            View All
            <span className="ml-2 flex items-center justify-center w-6 h-6 bg-[#8A63FF] rounded-full">
              <ArrowUp className="w-4 h-4 text-white transform rotate-45" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Masters;
