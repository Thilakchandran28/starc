import { GraduationCap, BookOpen, Globe, MessageSquare } from "lucide-react";
import star from "../assests/stargirl.jpg";

const WhyChoose = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Courses",
      description: "Lorem ipsum dolor sit amet consectetur.",
      bgColor: "bg-white",
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Lorem ipsum dolor sit amet consectetur.",
      bgColor: "bg-white",
    },
    {
      icon: MessageSquare,
      title: "Opportunities",
      description: "Lorem ipsum dolor sit amet consectetur.",
      bgColor: "bg-white",
    },
  ];

  const stats = [
    {
      icon: Globe,
      value: "100K+",
      label: "Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Starc?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Neque enim et non enim egestas. Etiam nec quam velit interdum at tortor velit quis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative ">
          {/* <div className="absolute inset-0">

             <div className="width-[100px]  aspect-square bg-purple-200 rounded-full flex items-center justify-center z-5"></div>
          </div> */}
          <div className=" absolute inset-0  flex justify-center">
            <div className="w-[50%] rounded-full bg-red-50"></div>
          </div>
           <div className=" absolute inset-0  flex justify-center">
            <div className="w-[40%] rounded-full bg-amber-50"></div>
          </div>   <div className=" absolute inset-0  flex justify-center">
            <div className="w-[30%] rounded-full bg-blue-50"></div>
          </div>
          {/* Left Cards */}
          <div className="flex flex-col gap-6 relative z-10">
            {/* Courses Card */}
            <div className="w-full bg-white rounded-xl p-6 shadow-lg">
              <div className="p-3 bg-purple-100 rounded-lg w-fit mb-4">
                <GraduationCap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Courses</h3>
              <p className="text-sm text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur.</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                Courses
              </button>
            </div>

            {/* 100K+ Card */}
            <div className="w-full bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-blue-100 rounded-lg w-fit">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-lg font-semibold text-gray-900">100K+</span>
              </div>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>

          {/* Center Video Container with Gradient Background */}
          <div className="relative ">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-blue-300 rounded-3xl transform scale-110 opacity-50 -z-10"></div>
            <div className="relative mx-auto w-[360px] h-[480px] rounded-3xl overflow-hidden shadow-lg">
              <img
                src={star}
                alt="Video presenter"
                className="w-full h-full object-cover "
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-md">
                <span className="text-gray-900 font-semibold">Video</span>
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-6 relative z-10">
            {/* Opportunities Card */}
            <div className="w-full bg-white rounded-xl p-6 shadow-lg">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Opportunities</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            {/* Learning Card */}
            <div className="w-full bg-white rounded-xl p-6 shadow-lg">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Learning</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;