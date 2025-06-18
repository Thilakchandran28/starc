import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Vector from "../Assets/Vector-3.png";
import Star from "../Assets/star.png";
import ForgotPassword from "./ForgotPassword";
import ResetLinkSent from "./PwdRstSentpage";
import Login from "./Login";
import SignupForm from "./SignupForm";

interface Slide {
  title: string;
  description: string;
}

const Signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
  const navigate = useNavigate();
// {Static area}
  const slides: Slide[] = [
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Arcu a sit commodo tempor nulla blandit. Posuere vel netus auctor phasellus fermentum.",
    },
    {
      title: "Discover New Learning Paths Today",
      description:
        "Unlock your potential with our curated courses. Learn at your own pace with expert26 expert guidance and support.",
    },
    {
      title: "Master Skills with Expert Mentors",
      description:
        "Join thousands of learners and gain skills that matter. Start your journey with hands-on projects.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [skipTransition, setSkipTransition] = useState(false);

  useEffect(() => {
    const interval = 3000;
    const slideTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        if (prevSlide === slides.length - 1) {
          setSkipTransition(true);
          setTimeout(() => setSkipTransition(false), 0);
          return 0;
        }
        return (prevSlide + 1) % slides.length;
      });
    }, interval);

    return () => clearInterval(slideTimer);
  }, [slides.length]);

  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex: RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleSignup = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const validEmail: boolean = emailRegex.test(email);
    const validPassword: boolean = passwordRegex.test(password);

    setIsEmailValid(validEmail);
    setIsPasswordValid(validPassword);

    if (validEmail && validPassword) {
      localStorage.setItem("isAuthenticated", "true");
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white ">
      <div className="w-2/3 flex flex-col ">
        <div className="flex justify-center items-center h-[80px] w-[200px] bg-white rounded-full ">
          <img src={Star} alt="" className="w-4" />
          <div className="pl-3 leading-3">
            <span className="text-xs font-medium text-gray-600">
              Discover More, Learn <br />
              More - 500+ Courses <br />
              Inside
            </span>
          </div>
        </div>
        <div className="relative flex justify-center w-full bg-white overflow-hidden">
          <div className="bg-white flex place-items-center items-center relative ">
            <div className="flex items-center ">
              <img
                src={Vector}
                alt=""
                className="absolute z-0 large-screen:pl-32 vector"
                style={{ width: "100%", height: "auto", maxWidth: "800px" }}
              />
            </div>
            <div className="relative z-10 text-center flex flex-col justify-center mt-64 w-[100%]">
              <div className="flex justify-center">
                <div className="flex justify-center items-center 2xl:text-[10px] 2xl:w-[150px] 3xl:w-[150px] 3xl:text-[12px] bg-[#8A63FF] text-white text-[52%] w-[22%] h-6 rounded-full text-sm font-medium ">
                  SUPERVISED COURSES
                </div>
              </div>
              <div className="overflow-hidden h-[220px] flex items-center justify-center">
                <div key={currentSlide} className="w-full">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight w-50 animate-pop-slide">
                    {slides[currentSlide].title
                      .split(" ")
                      .map((word, index) => (
                        <span key={index}>
                          {word} {index === 4 && <br />}
                        </span>
                      ))}
                  </h1>
                  <p className="text-base text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto animate-pop-slide">
                    {slides[currentSlide].description}
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                {currentSlide === 0 ? (
                  <>
                    <Button
                      style={{
                        backgroundColor: "#8A63FF",
                        boxShadow: "0px 10px 16px 0px rgba(0, 0, 0, 0.2)",
                      }}
                      className="bg-purple-600 hover:bg-purple-700 text-white rounded-sm px-6 py-2 text-sm"
                    >
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
                      <span className="text-sm text-gray-600">
                        1k+ students
                      </span>
                    </div>
                  </>
                ) : currentSlide === 1 ? (
                  <Button
                    style={{
                      backgroundColor: "#8A63FF",
                      boxShadow: "0px 10px 16px 0px rgba(0, 0, 0, 0.2)",
                    }}
                    className="bg-purple-600 hover:bg-purple-700 text-white rounded-sm px-6 py-2 text-sm"
                  >
                    Express Your Interest Now
                  </Button>
                ) : (
                  <div className="flex items-center gap-4">
                    <Button
                      style={{
                        backgroundColor: "#8A63FF",
                        boxShadow: "0px 10px 16px 0px rgba(0, 0, 0, 0.2)",
                      }}
                      className="bg-purple-600 hover:bg-purple-700 text-white rounded-sm px-6 py-2 text-sm"
                    >
                      Explore Courses Now
                    </Button>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <span>📚</span>
                      <span>300+ Modules & 30+ Courses</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden cursor-pointer">
                  <div
                    className="h-full bg-purple-600 rounded-full"
                    style={{
                      width: `${100 / slides.length}%`,
                      transform: `translateX(${currentSlide * 100}%)`,
                      transition: skipTransition
                        ? "none"
                        : "transform 0.5s ease-in-out",
                    }}
                  />
                </div>
              </div>
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

                @media (min-width: 1920px) {
                  .large-screen\\:pb-\\[60\\%\\] {
                    padding-bottom: 60%;
                  }
                  .large-screen\\:pl-14 {
                    padding-left: 3.5rem;
                  }
                  .large-screen\\:pl-32 {
                    padding-left: 8rem;
                  }
                  .vector {
                    max-width: 1000px !important;
                  }
                }
              `}
              </style>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <SignupForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isEmailValid={isEmailValid}
          setIsEmailValid={setIsEmailValid}
          isPasswordValid={isPasswordValid}
          setIsPasswordValid={setIsPasswordValid}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          handleSignup={handleSignup}
        />
      </div>
    </div>
  );
};

export default Signup;