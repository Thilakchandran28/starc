
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Mail } from "lucide-react";

const PurpleBox = () => {
  return (
    <section className="py-20 bg-purple-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">
          Join ambitious professionals and unlock your dream career today
        </h2>
        <p className="text-lg mb-8">
          Unlock your true potential and discover a world of opportunities that align with your skills, interests, and aspirations
        </p>
        <div className="flex justify-center items-center gap-4">
          <div className="flex items-center bg-white text-purple-600 rounded-full px-4 py-2 shadow-md">
            <Mail className="w-5 h-5 mr-2" />
            <input
              type="email"
              placeholder="Your mail address"
              className="bg-transparent outline-none"
            />
          </div>
          <button className="bg-white text-purple-600 font-bold px-6 py-2 rounded-full shadow-md hover:bg-gray-100">
            Join Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default PurpleBox;
