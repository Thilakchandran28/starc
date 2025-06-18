
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
      <div className="flex justify-center">
      <PurpleBox />

      </div>
      <WhyChoose />
      <Masters />
      <HowItWorks />
      <TopMentors />
      {/* <div className="bg-red-500">jhghj</div> */}
      <FAQ/>
      <WallOfLove />
      <div className="flex justify-center text-center">
      <PurpleBox />

      </div>
      <Footer />
    </div>
  );
};

export default Index;
