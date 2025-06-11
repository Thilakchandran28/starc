
const TopMentors = () => {
  const mentors = [
    {
      name: "Alex Thompson",
      role: "Senior Software Engineer",
      company: "Google",
      rating: 4.9,
      students: 15000,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Jessica Martinez",
      role: "Creative Director", 
      company: "Adobe",
      rating: 4.8,
      students: 12000,
      image: "https://images.unsplash.com/photo-1494790108755-2616b669ad00?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Robert Chang",
      role: "Marketing Director",
      company: "Facebook",
      rating: 4.9,
      students: 18000,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Top Mentor At Starc</h2>
          <p className="text-xl text-gray-600">Learn from industry leaders and experts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{mentor.name}</h3>
              <p className="text-purple-600 font-medium mb-1">{mentor.role}</p>
              <p className="text-gray-500 text-sm mb-3">{mentor.company}</p>
              <div className="flex justify-center items-center space-x-4 text-sm text-gray-600">
                <span>⭐ {mentor.rating}</span>
                <span>{mentor.students.toLocaleString()} students</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopMentors;
