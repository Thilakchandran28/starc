import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Vector from '../Assets/Vector-3.png';
import Star from '../Assets/star.png';
import { LoginSocialGoogle } from 'reactjs-social-login';

interface Slide {
  title: string;
  description: string;
}

interface LoginFormProps {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  isEmailValid: boolean;
  setIsEmailValid: (value: boolean) => void;
  isPasswordValid: boolean;
  setIsPasswordValid: (value: boolean) => void;
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  isEmailValid,
  setIsEmailValid,
  isPasswordValid,
  setIsPasswordValid,
  showPassword,
  setShowPassword,
  handleLogin,
}) => {
  return (
    <div className="w-screen h-screen pl-24 pb-6 flex items-center justify-center">
      <div className="w-full h-screen p-6 flex items-center justify-center">
        <div className="w-full max-w-xs">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-mont">Welcome Back 👋</h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <p className="text-sm text-gray-600 mb-2 pb-6 font-mont">
                Sign Up Now-Discover 500+ Courses are <br />Waiting for your Learning
              </p>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-mont">
                Email address/Phone number*
              </label>
              <Input
                id="email"
                type="text"
                placeholder="john@gmail.com"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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
              {!isPasswordValid && <p className="text-red-500 text-xs mt-1 font-mont">Incorrect Password</p>}
              <div className="text-right mt-1">
                <Link to="/forgot-password" className="text-xs text-black font-medium font-mont">
                  Forget password
                </Link>
              </div>
            </div>
            <Button style={{ backgroundColor: '#8A63FF' }} className="w-full h-10 text-white rounded-lg text-sm font-mont font-semibold">
              Login
            </Button>
            <div className="flex items-center justify-center my-2">
              <div className="flex-1 h-px bg-gray-200 max-w-[140px]"></div>
              <span className="text-gray-300 text-xs mx-1.5 font-mont">Or</span>
              <div className="flex-1 h-px bg-gray-200 max-w-[140px]"></div>
            </div>
            <div className="flex space-x-2">
              <LoginSocialGoogle
                client_id={import.meta.env.VITE_GOOGLE_CLIENT_ID || '897120726098-hjj58tfkldj1j9rhvh0nmed98hb16hbo.apps.googleusercontent.com'}
                access_type="offline"
                onResolve={({ provider, data }) => {
                  console.log(provider, data);
                }}
                onReject={(err) => {
                  console.log(err);
                }}
              >
                <Button
                  variant="outline"
                  className="w-22 h-10 border border-gray-300 text-gray-700 rounded-sm text-xs font-semibold font-mont flex items-center justify-center gap-1"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1.02.68-2.31 1.08-3.71 1.08-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Sign up with Google
                </Button>
              </LoginSocialGoogle>
              <Link to="/">
                <Button
                  variant="outline"
                  className="w-30 h-10 border border-gray-300 text-gray-700 rounded-sm text-xs font-semibold font-mont"
                >
                  Continue as Guest
                </Button>
              </Link>
            </div>
          </form>
          <div className="mt-8 text-left">
            <p className="text-black text-sm font-bold font-mont pt-3">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-black underline font-bold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Rest of the Login component remains unchanged
const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
  const navigate = useNavigate();

  const slides: Slide[] = [
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. Arcu a sit commodo tempor nulla blandit. Posuere vel netus auctor phasellus fermentum."
    },
    {
      title: "Discover New Learning Paths Today",
      description: "Unlock your potential with our curated courses. Learn at your own pace with expert26 expert guidance and support."
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
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="absolute top-4 left-4 flex items-center bg-white rounded-full px-3 py-1 z-10 pt-7 pl-5">
        <img src={Star} alt="" className="w-4" />
        <div className="pl-3 leading-3">
          <span className="text-xs font-medium text-gray-600 font-mont">Discover More, Learn <br/>More - 500+ Courses <br/>Inside</span>
        </div>
      </div>
      <div className="relative flex w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-white flex items-center justify-center relative w-full">
          <div className="pb-[70%] pl-11 large-screen:pb-[60%] large-screen:pl-14">
            <img
              src={Vector}
              alt=""
              className="absolute z-0 pl-24 large-screen:pl-32 vector"
              style={{ width: "100%", height: "auto", maxWidth: "800px" }}
            />
          </div>
          <div className="relative z-10 text-center flex flex-col justify-center pl-36 pt-40">
            <div className="pl-10 pr-6 pt-24">
              <div className="pl-3 inline-flex items-center bg-[#8A63FF] text-white text-[50%] px-5 py-2 w-[26%] rounded-full text-sm font-medium font-mont">
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
                  <Button style={{ backgroundColor: '#8A63FF', boxShadow: '0px 10px 16px 0px rgba(0, 0, 0, 0.2)' }} className="bg-purple-600 hover:bg-purple-700 text-white rounded-sm px-6 py-2 text-sm font-mont">
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
                <Button style={{ backgroundColor: '#8A63FF', boxShadow: '0px 10px 16px 0px rgba(0, 0, 0, 0.2)' }} className="bg-purple-600 hover:bg-purple-700 text-white rounded-sm px-6 py-2 text-sm font-mont">
                  Express Your Interest Now
                </Button>
              ) : (
                <div className="flex items-center gap-4">
                  <Button style={{ backgroundColor: '#8A63FF', boxShadow: '0px 10px 16px 0px rgba(0, 0, 0, 0.2)' }} className="bg-purple-600 hover:bg-purple-700 text-white rounded-sm px-6 py-2 text-sm font-mont">
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
              <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden cursor-pointer">
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
        <LoginForm
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
          handleLogin={handleLogin}
        />
      </div>
    </div>
  );
};

export default Login;