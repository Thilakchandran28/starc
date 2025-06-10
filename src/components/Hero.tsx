
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="relative max-w-7xl h-full mx-auto">
          {/* Book container */}
          <div className="absolute inset-0 max-w-6xl mx-auto">
            {/* Left page */}
            <div className="absolute left-0 right-[51%] top-0 bottom-0 bg-gradient-to-br from-purple-100/50 to-purple-50/50 rounded-l-[60px] transform -rotate-2 origin-right shadow-lg">
              {/* Left page fold effect */}
              <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-purple-200/20 to-transparent"></div>
            </div>
            {/* Right page */}
            <div className="absolute left-[49%] right-0 top-0 bottom-0 bg-gradient-to-br from-purple-100/50 to-purple-50/50 rounded-r-[60px] transform rotate-2 origin-left shadow-lg">
              {/* Right page fold effect */}
              <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-purple-200/20 to-transparent"></div>
            </div>
            {/* Spine effect */}
            <div className="absolute left-[49%] right-[51%] top-0 bottom-0 bg-gradient-to-r from-purple-200/30 via-purple-100/30 to-purple-200/30"></div>
            {/* Top curved edges */}
            <div className="absolute -top-4 left-0 right-[51%] h-8 bg-gradient-to-br from-purple-100/50 to-purple-50/50 rounded-full transform -rotate-2 origin-right blur-sm"></div>
            <div className="absolute -top-4 left-[49%] right-0 h-8 bg-gradient-to-br from-purple-100/50 to-purple-50/50 rounded-full transform rotate-2 origin-left blur-sm"></div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="inline-flex items-center bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <span>SUPERVISED COURSES</span>
        </div>

        <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
          Lorem ipsum dolor sit amet
          <br />
          consectetur.
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Arcu a sit commodo tempor nulla blandit. Posuere vel netus auctor phasellus fermentum.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-medium rounded-full w-full sm:w-auto">
            Start learning Now
          </Button>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white"
                  src={`https://i.pravatar.cc/32?img=${i}`}
                  alt={`Student ${i}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">1k+ students</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
