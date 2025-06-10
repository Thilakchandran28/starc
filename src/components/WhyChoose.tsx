
import { GraduationCap, BookOpen, Users, Star } from "lucide-react";

const WhyChoose = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Courses",
      description: "Lorem ipsum dolor sit amet",
      bgColor: "bg-white"
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Lorem ipsum dolor sit amet",
      bgColor: "bg-white"
    },
    {
      icon: Users,
      title: "Opportunities",
      description: "Lorem ipsum dolor sit amet",
      bgColor: "bg-white"
    }
  ];

  const stats = [
    {
      icon: Users,
      value: "100K+",
      label: "Active students"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Star?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.
          </p>
        </div>

        <div className="relative">
          {/* Center Video Container */}
          <div className="relative mx-auto w-[500px] h-[400px] rounded-3xl overflow-hidden shadow-lg">
            <img 
              src="/presenter.jpg" 
              alt="Video presenter"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src={`/avatar-${i}.jpg`}
                    alt={`User ${i}`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-white">Video</span>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="absolute top-0 left-0 -translate-x-1/2">
            <div className="w-48 bg-white rounded-xl p-4 shadow-lg">
              <div className="p-2 bg-purple-100 rounded-lg w-fit mb-3">
                <GraduationCap className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-1">Courses</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4">
            <div className="w-48 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white" />
                  ))}
                </div>
                <span className="text-sm font-medium">100K+</span>
              </div>
              <p className="text-sm text-gray-600">Active students</p>
            </div>
          </div>

          <div className="absolute top-1/4 right-0 translate-x-1/2">
            <div className="w-48 bg-white rounded-xl p-4 shadow-lg">
              <div className="p-2 bg-purple-100 rounded-lg w-fit mb-3">
                <BookOpen className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-1">Learning</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4">
            <div className="w-48 bg-white rounded-xl p-4 shadow-lg">
              <div className="p-2 bg-purple-100 rounded-lg w-fit mb-3">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-1">Opportunities</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
