
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoursesSection from "@/components/coursessection";
import PurpleBox from "@/components/PurpleBox";
import WhyChoose from "@/components/WhyChoose";
import Masters from "@/components/Masters";
import HowItWorks from "@/components/HowItWorks";
import TopMentors from "@/components/TopMentors";
import FAQ from "@/components/FAQ";
import WallOfLove from "@/components/WallOfLove";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CoursesSection />
      {/* <div className="flex justify-center">
        <PurpleBox />

      </div> */}
      <div className="flex justify-center text-center flex-col   pt-[5%]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Starc?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Neque enim et non enim egestas. Etiam nec quam velit interdum at tortor velit quis.
          </p>
        </div>
        <WhyChoose />
      </div>
      <div className="flex justify-center text-center flex-col   pt-[5%]">
        {/* Header */}
        <div className="text-center mb-1">
          <h2 className="lg:text-2xl xl:text-4xl 2xl:text-6xl font-bold text-gray-900 mb-4">Discover Our Starc Masters</h2>
          <p className="text-gray-600 lg:text-sm xl:text-base 2xl:text-lg mx-auto">
            Find the best master for your company and boosts your business 10x!
          </p>
        </div>
        <Masters />
      </div>


      <HowItWorks />
      <TopMentors />
      {/* <div className="bg-red-500">jhghj</div> */}
      <FAQ />
      <WallOfLove />
      <div className="flex justify-center text-center">
        <PurpleBox />

      </div>
      <Footer />
    </div>
  );
};

export default Index;
