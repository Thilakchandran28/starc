import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Mail } from "lucide-react";


const PurpleBox: React.FC = () => {
  return (
    <section className="py-20 text-white text-center relative overflow-hidden purple-box flex justify-center items-center"  style={{
    height: "392px",
    width: "1240px",
    // marginLeft: "20%",
    backgroundColor: "#8A63FF",
    borderRadius:"25px",
    boxShadow: "0 4px 8px rgba(138, 99, 255, 0.4)"

  }}>
      <div className="max-w-4xl mx-auto px-4  w-[60%]">
       
        
        {/* Heading and Subtext */}
        <h2 className="text-5xl font-normal mb-4 leading-tight">
          Join ambitious professionals and unlock your dream career today
        </h2>
        <p className="text-lg mb-8 leading-relaxed text-wrap">
          Unlock your true potential and discover a world of opportunities that align with your skills, interests, and aspirations
        </p> {/* Sparkles Icon */}

        {/* Input and Button */}
        <div className="flex justify-center items-center gap-4">
          <div className="flex items-center bg-white text-gray-600 rounded-full px-4 py-2 shadow-md w-[50%]">
            <Mail className="w-5 h-5 mr-2  " />
            <input
              type="email"
              placeholder="Your mail address"
              className="bg-transparent outline-none text-black  "
            />
          </div>
          <Button
            className="bg-white w-[18%] text-[#8A63FF] font-bold px-6 py-2 rounded-full shadow-md hover:bg-gray-100 flex items-center gap-2"
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
