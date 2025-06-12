import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Vector from '../Assets/Vector-3.png';
import Star from '../Assets/star.png';

interface Slide {
  title: string;
  description: string;
}

interface LoginFormProps {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  confirmPassword: string;
  setConfirmPassword: (value: string) => void;
  isEmailValid: boolean;
  setIsEmailValid: (value: boolean) => void;
  isPasswordValid: boolean;
  setIsPasswordValid: (value: boolean) => void;
  doPasswordsMatch: boolean;
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  isEmailValid,
  setIsEmailValid,
  isPasswordValid,
  setIsPasswordValid,
  doPasswordsMatch,
  showPassword,
  setShowPassword,
  handleLogin,
}) => {
  return (
    <div className="w-screen h-screen pl-24 pb-6 flex items-center justify-center">
      <div className="w-full h-screen p-6 flex items-center justify-center">
        <div className="w-full max-w-xs">
          <h2 className="text-2xl font-bold text-gray-900 mb-11 font-mont">Hey There 👋</h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <p className="text-sm text-gray-600 mb-2 pb-6 font-mont">
                Sign Up Now-Discover 500+ Books
              </p>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-mont">
                Email address/Phone number*
              </label>
              <Input
                id="email"
                type="text"
                placeholder="john@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`h-10 px-3 rounded-lg border ${isEmailValid ? 'border-gray-300' : 'border-red-500'} focus:ring-purple-500 focus:border-purple-500 text-sm`}
              />
              {!isEmailValid && (
                <p className="text-red-500 text-xs mt-1 font-mont">Please enter a valid email address</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 font-mont">Password*</label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`h-10 px-3 rounded-lg border ${isPasswordValid ? 'border-gray-300' : 'border-red-500'} focus:ring-purple-500 focus:border-purple-500 pr-10 text-sm`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {!isPasswordValid && (
                <p className="text-red-500 text-xs mt-1 font-mont">Enter a valid password</p>
              )}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1 font-mont">Rewrite Password*</label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Re-enter password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`h-10 px-3 rounded-lg border ${doPasswordsMatch ? 'border-gray-300' : 'border-red-500'} focus:ring-purple-500 focus:border-purple-500 pr-10 text-sm`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {!doPasswordsMatch && (
                <p className="text-red-500 text-xs mt-1 font-mont">Passwords do not match</p>
              )}
            </div>
            <Button style={{ backgroundColor: '#8A63FF' }} className="w-full h-10 text-white rounded-lg text-sm font-mont font-semibold">
              Submit
            </Button>
          </form>
          <div className="mt-8 text-left">
            <p className="text-black text-sm font-bold font-mont pt-3">
              Already have an account?{" "}
              <Link to="/login" className="text-black underline font-bold">
                Log-In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
  const [doPasswordsMatch, setDoPasswordsMatch] = useState<boolean>(true);
  const navigate = useNavigate();

  const slides: Slide[] = [
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. Arcu a sit commodo tempor nulla blandit. Posuere vel netus auctor phasellus fermentum."
    },
    {
      title: "Discover New Learning Paths Today",
      description: "Unlock your potential with our curated courses. Learn at your own pace with expert guidance and support."
    },
    {
      title: "Master Skills with Expert Mentors",
      description: "Join thousands of learners and gain skills that matter. Start your journey with hands-on projects."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [skipTransition, setSkipTransition] = useState(false);

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

  const handleBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - bar.left;
    const barWidth = bar.width;
    const sectionWidth = barWidth / slides.length;
    const clickedSection = Math.floor(clickX / sectionWidth);
    setCurrentSlide(clickedSection);
    setSkipTransition(false); // Ensure normal transition on click
  };

  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex: RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const validEmail = emailRegex.test(email);
    const validPassword = passwordRegex.test(password);
    const passwordsMatch = password === confirmPassword;

    setIsEmailValid(validEmail);
    setIsPasswordValid(validPassword);
    setDoPasswordsMatch(passwordsMatch);

    if (validEmail && validPassword && passwordsMatch) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="absolute top-4 left-4 flex items-center bg-white rounded-full px-3 py-1 z-10 pt-7 pl-5">
        <img src={Star} alt="" className="w-4" />
        <div className="pl-3 leading-3">
          <span className="text-xs font-medium text-gray-600 font-mont">Discover More, Learn <br />More - 500+ Courses <br />Inside</span>
        </div>
      </div>
      <div className="relative flex w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-white flex items-center justify-center relative w-full">
          <div className="pb-[70%] pl-11">
            <img src={Vector} alt="" className="absolute z-0 pl-24" style={{ width: "screen", height: "auto" }} />
          </div>
          <div className="relative z-10 text-center flex flex-col justify-center pl-36 pt-40 ">
            <div className="pl-10 pr-6 pt-24">
              <div className="pl-3 inline-flex items-center bg-[#8A63FF] text-white text-[50%] px-5 py-2 w-[26%] rounded-full text-sm font-medium font-mont ">
                SUPERVISED COURSES
              </div>
            </div>
            <div className="overflow-hidden h-[220px] flex items-center justify-center">
              <div key={currentSlide} className="w-full">
                <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight font-mont w-50 animate-pop-slide">
                  {slides[currentSlide].title.split(' ').map((word, index) => (
                    <span key={index}>
                      {word}{' '}
                      {index === 4 && <br />}
                    </span>
                  ))}
                </h1>
                <p className="text-base text-gray-600 mb-8 leading-relaxed font-mont max-w-2xl mx-auto animate-pop-slide">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              {currentSlide === 0 ? (
                <>
                  <Button style={{ backgroundColor: '#8A63FF', boxShadow:'0px 10px 16px 0px rgba(0, 0, 0, 0.2)' }} className="bg-purple-600 hover:bg-purple-700 text-white rounded-sm px-6 py-2 text-sm font-mont">
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
                    <span className="text-sm text-gray-600 font-mont">1k+ students</span>
                  </div>
                </>
              ) : currentSlide === 1 ? (
                <Button style={{ backgroundColor: '#8A63FF', boxShadow:'0px 10px 16px 0px rgba(0, 0, 0, 0.2)' }} className="bg-purple-600 hover:bg-purple-700 text-white rounded-sm px-6 py-2 text-sm font-mont">
                  Express Your Interest Now
                </Button>
              ) : (
                <div className="flex items-center gap-4">
                  <Button style={{ backgroundColor: '#8A63FF', boxShadow:'0px 10px 16px 0px rgba(0, 0, 0, 0.2)' }} className="bg-purple-600 hover:bg-purple-700 text-white rounded-sm px-6 py-2 text-sm font-mont">
                    Explore Courses Now
                  </Button>
                  <div className="flex items-center gap-1 text-sm text-gray-600 font-mont">
                    <span>📚</span>
                    <span>300+ Modules & 30+ Courses</span>
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden cursor-pointer" onClick={handleBarClick}>
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
          </div>
        </div>
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          isEmailValid={isEmailValid}
          setIsEmailValid={setIsEmailValid}
          isPasswordValid={isPasswordValid}
          setIsPasswordValid={setIsPasswordValid}
          doPasswordsMatch={doPasswordsMatch}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          handleLogin={handleLogin}
        />
      </div>
    </div>
  );
};

export default Login;