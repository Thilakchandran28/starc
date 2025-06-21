import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Mail } from "lucide-react";


const PurpleBox: React.FC = () => {
  return (
    <section className="lg:py-10 xl:py-14 2xl:py-20 text-white text-center relative overflow-hidden purple-box bg-[#8A63FF] rounded-3xl w-[70%] shadow-2xl"  
  //   style={{
  //   height: "400px",
  //   width: "1000px",
  //   // marginLeft: "20%",
  //   backgroundColor: "#8A63FF",
  //   borderRadius:"25px",
  //   boxShadow: "0 4px 8px rgba(138, 99, 255, 0.4)" 

  // }}
  >
      <div className="w-[60%] mx-auto px-4">
       
        
        {/* Heading and Subtext */}
        <h2 className="lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-4 leading-tight">
          Join ambitious professionals and unlock your dream career today
        </h2>
        <p className="lg:text-xs xl:text-sm 2xl:text-base mb-8 leading-relaxed">
          Unlock your true potential and discover a world of opportunities that align with your skills, interests, and aspirations
        </p> {/* Sparkles Icon */}

        {/* Input and Button */}
        <div className="flex justify-center items-center gap-4">
          <div className="flex items-center bg-white text-gray-600 rounded-full px-4 py-2 shadow-md w-[50%]">
            <Mail className="w-5 h-5 mr-2  " />
            <input
              type="email"
              placeholder="Your mail address"
              className="bg-transparent outline-none text-black placeholder-purple-600 lg:text-sm xl:text-base 2xl:text-xl lg:w-36 xl:w-48 2xl:w-56 3xl:w-72"
            />
          </div>
          <Button
            className="bg-white text-purple-600 font-bold px-6 py-2 rounded-full shadow-md hover:bg-gray-100 flex items-center gap-2 lg:text-sm xl:text-base 2xl:text-xl"
          >
            Join Us
            {/* <ArrowRight className="w-5 h-5" /> */}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PurpleBox;
