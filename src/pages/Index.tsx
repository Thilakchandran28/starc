
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoursesSection from "@/components/CoursesSection";
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
      <PurpleBox />
      <WhyChoose />
      <Masters />
      <HowItWorks />
      <TopMentors />
      <FAQ />
      <WallOfLove />
      <PurpleBox />
      <Footer />
    </div>
  );
};

export default Index;
