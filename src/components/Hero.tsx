import React, { useState, useEffect } from "react";
import heroImage from "../assests/hero.png"; // Ensure this path is correct

interface Slide {
  title: string;
  description: string;
}

const Hero: React.FC = () => {
  const slides: Slide[] = [
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Arcu a sit commodo tempor nulla blandit. Posuere vel netus auctor phasellus fermentum.",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Arcu a sit commodo tempor nulla blandit. Posuere vel netus auctor phasellus fermentum.",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Arcu a sit commodo tempor nulla blandit. Posuere vel netus auctor phasellus fermentum.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [skipTransition, setSkipTransition] = useState(false);

  // Auto-shift to the next slide every 3 seconds
  useEffect(() => {
    const interval = 3000; // 3 seconds per slide
    const slideTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        if (prevSlide === slides.length - 1) {
          setSkipTransition(true); // Disable sliding for reset
          setTimeout(() => setSkipTransition(false), 0); // Re-enable transition
          return 0; // Jump to first slide
        }
        return (prevSlide + 1) % slides.length;
      });
    }, interval);

    return () => clearInterval(slideTimer); // Cleanup interval on unmount
  }, [slides.length]);

  // Handle click on the progress bar to switch slides
  const handleBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - bar.left;
    const barWidth = bar.width;
    const sectionWidth = barWidth / slides.length;
    const clickedSection = Math.floor(clickX / sectionWidth);
    setCurrentSlide(clickedSection);
    setSkipTransition(false); // Ensure normal transition on click
  };

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={heroImage}
          alt="Background Vector"
          className="w-[75%] h-auto absolute left-[200px] top-[10px] "
          onError={(e) => {
            console.error("Error loading hero image:", e);
            e.currentTarget.style.display = "none"; // Hide image if it fails to load
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center pt-64 ">
        <div
          className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 text-white font-mont"
          style={{ backgroundColor: "#A855F7" }}
        >
          SUPERVISED COURSES
        </div>

        {/* Fixed height container for sliding content */}
        <div className="overflow-hidden h-[300px] flex items-center justify-center">
          <div key={currentSlide} className="w-full">
            <h1 className="text- lg:text-[450%] font-bold text-gray-800 mb-6 animate-pop-slide font-mont">
              {slides[currentSlide].title.split(" ").map((word, index) => (
                <span key={index}>
                  {word}{" "}
                  {index === 4 && <br />}
                </span>
              ))}
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-pop-slide">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 ">
          {currentSlide === 0 ? (
            <>
              <button
                type="button"
                className="bg-purple-500 text-white px-6 py-3 text-lg font-medium rounded-lg shadow-md"
                style={{ backgroundColor: "#A855F7", boxShadow:'0px 10px 12px 0px rgba(0, 0, 0, 0.2)' }}
              >
                Explore More Now
              </button>
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
            </>
          ) : currentSlide === 1 ? (
            <button
              type="button"
              className="bg-purple-500 text-white px-6 py-3 text-lg font-medium rounded-lg shadow-md"
              style={{ backgroundColor: "#A855F7" , boxShadow:'0px 10px 12px 0px rgba(0, 0, 0, 0.2)' }}
            >
              Express Your Interest Now
            </button>
          ) : (
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="bg-purple-500 text-white px-6 py-3 text-lg font-medium rounded-lg shadow-md"
                style={{ backgroundColor: "#A855F7" , boxShadow:'0px 10px 12px 0px rgba(0, 0, 0, 0.2)'}}
              >
                Explore Courses Now
              </button>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <span>📚</span>
                <span>300+ Modules & 30+ Courses</span>
              </div>
            </div>
          )}
        </div>

        {/* Animated progress bar */}
        <div className="flex justify-center">
          <div
            className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden cursor-pointer"
            onClick={handleBarClick}
          >
            <div
              className="h-full bg-purple-600 rounded-full"
              style={{
                width: `${100 / slides.length}%`,
                transform: `translateX(${currentSlide * 100}%)`,
                transition: skipTransition ? "none" : "transform 0.5s ease-in-out",
              }}
            />
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style>
        {`
          @keyframes popSlide {
            from {
              opacity: 0;
              transform: translateY(10px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          .animate-pop-slide {
            animation: popSlide 0.5s ease-in-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;