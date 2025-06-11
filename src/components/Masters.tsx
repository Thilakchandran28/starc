
import { Star, Award, Users } from "lucide-react";

const Masters = () => {
  const masters = [
    {
      name: "Dr. Sarah Johnson",
      expertise: "Data Science & AI",
      experience: "15+ years",
      rating: 4.9,
      students: 25000,
      courses: 12,
      image: "https://images.unsplash.com/photo-1494790108755-2616b669ad00?w=300&h=300&fit=crop&crop=face",
      specialties: ["Machine Learning", "Deep Learning", "Python"],
      company: "Former Google AI"
    },
    {
      name: "Michael Chen",
      expertise: "Full Stack Development",
      experience: "12+ years", 
      rating: 4.8,
      students: 32000,
      courses: 8,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      specialties: ["React", "Node.js", "DevOps"],
      company: "Ex-Facebook Engineer"
    },
    {
      name: "Emily Rodriguez",
      expertise: "UX/UI Design",
      experience: "10+ years",
      rating: 4.9,
      students: 18000,
      courses: 15,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      specialties: ["Design Systems", "Figma", "User Research"],
      company: "Former Apple Designer"
    },
    {
      name: "David Kim",
      expertise: "Digital Marketing",
      experience: "8+ years",
      rating: 4.7,
      students: 22000,
      courses: 10,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      specialties: ["SEO", "Social Media", "Analytics"],
      company: "Ex-Marketing Director"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Our Masters
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Discover</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-purple-600 mb-6">Our Starc Masters</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from industry leaders who have shaped the future of technology and business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {masters.map((master, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 hover:-translate-y-2"
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-purple-100 group-hover:ring-purple-300 transition-all">
                  <img
                    src={master.image}
                    alt={master.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {master.company}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">
                {master.name}
              </h3>
              
              <p className="text-purple-600 font-semibold mb-2">{master.expertise}</p>
              <p className="text-gray-500 text-sm mb-4">{master.experience}</p>
              
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {master.specialties.map((specialty, idx) => (
                  <span 
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
              
              <div className="border-t border-gray-100 pt-4 space-y-2">
                <div className="flex items-center justify-center gap-1 text-sm">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-semibold text-gray-900">{master.rating}</span>
                  <span className="text-gray-500">rating</span>
                </div>
                
                <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>{master.students.toLocaleString()} students</span>
                </div>
                
                <div className="text-sm text-gray-600">
                  {master.courses} courses
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-lg">
            View All Masters
          </button>
        </div>
      </div>
    </section>
  );
};

export default Masters;
