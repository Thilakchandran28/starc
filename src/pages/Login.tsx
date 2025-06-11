
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for authentication logic
    // Set isAuthenticated to true in localStorage
    localStorage.setItem('isAuthenticated', 'true');
    // Reload the page to update navbar state
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="relative flex w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section (Image/Illustration) */}
        <div className="w-1/2 bg-gradient-to-br from-purple-50 to-indigo-50 p-8 flex items-center justify-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] flex items-center justify-center pointer-events-none opacity-20">
            <svg width="500" height="300" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 290 C 100 200, 400 200, 490 290" stroke="#A78BFA" strokeWidth="2" fill="none"/>
              <path d="M20 280 C 110 190, 410 190, 480 280" stroke="#A78BFA" strokeWidth="2" fill="none"/>
              <path d="M30 270 C 120 180, 420 180, 470 270" stroke="#A78BFA" strokeWidth="2" fill="none"/>
              <path d="M40 260 C 130 170, 430 170, 460 260" stroke="#A78BFA" strokeWidth="2" fill="none"/>
              <path d="M50 250 C 140 160, 440 160, 450 250" stroke="#A78BFA" strokeWidth="2" fill="none"/>
              <path d="M60 240 C 150 150, 450 150, 440 240" stroke="#A78BFA" strokeWidth="2" fill="none"/>
              <path d="M70 230 C 160 140, 460 140, 430 230" stroke="#A78BFA" strokeWidth="2" fill="none"/>
              <path d="M80 220 C 170 130, 470 130, 420 220" stroke="#A78BFA" strokeWidth="2" fill="none"/>
              <path d="M90 210 C 180 120, 480 120, 410 210" stroke="#A78BFA" strokeWidth="2" fill="none"/>
              <path d="M100 200 C 190 110, 490 110, 400 200" stroke="#A78BFA" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome Back! 👋</h2>
            <p className="text-lg text-gray-600 mb-8">
              Sign in to follow 300+ courses, 100+ mentors, and 1000+ students.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-3 text-lg font-semibold">
              Explore Courses
            </Button>
          </div>
        </div>

        {/* Right Section (Login Form) */}
        <div className="w-1/2 p-8 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Login to your account</h2>
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@gmail.com"
                  className="h-12 px-4 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="h-12 px-4 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <div className="text-right mt-2">
                  <Link to="/forgot-password" className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <Button className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-base font-semibold">
                Login
              </Button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link to="/signup" className="text-purple-600 hover:text-purple-700 font-semibold">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
