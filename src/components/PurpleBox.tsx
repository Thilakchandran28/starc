import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Mail } from "lucide-react";


const PurpleBox: React.FC = () => {
  return (
    <section className="py-20 text-white text-center relative overflow-hidden purple-box"  style={{
    height: "400px",
    width: "1000px",
    marginLeft: "10%",
    backgroundColor: "#8A63FF",
    borderRadius:"25px",
    boxShadow: "4px 4px gray",
  }}>
      <div className="max-w-4xl mx-auto px-4">
       
        
        {/* Heading and Subtext */}
        <h2 className="text-4xl font-bold mb-4 leading-tight">
          Join ambitious professionals and unlock your dream career today
        </h2>
        <p className="text-lg mb-8 leading-relaxed">
          Unlock your true potential and discover a world of opportunities that align with your skills, interests, and aspirations
        </p> {/* Sparkles Icon */}

        {/* Input and Button */}
        <div className="flex justify-center items-center gap-4">
          <div className="flex items-center bg-white text-purple-600 rounded-full px-4 py-2 shadow-md">
            <Mail className="w-5 h-5 mr-2 text-purple-600" />
            <input
              type="email"
              placeholder="Your mail address"
              className="bg-transparent outline-none text-black placeholder-purple-600 w-40"
            />
          </div>
          <Button
            className="bg-white text-purple-600 font-bold px-6 py-2 rounded-full shadow-md hover:bg-gray-100 flex items-center gap-2"
          >
            Join Us
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PurpleBox;