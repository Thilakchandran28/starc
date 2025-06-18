import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";

interface SignupFormProps {
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
  isConfirmPasswordValid: boolean;
  setIsConfirmPasswordValid: (value: boolean) => void;
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
  handleSignup: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({
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
  isConfirmPasswordValid,
  setIsConfirmPasswordValid,
  showPassword,
  setShowPassword,
  handleSignup,
}) => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full max-w-xs">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Hey There! 👋
        </h2>
        <form className="space-y-4" onSubmit={handleSignup}>
          <div>
            <p className="text-sm text-gray-600 mb-2 pb-6">
              Sign Up Now—Discover 500+ Books
            </p>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email address/Phone Number*
            </label>
            <Input
              id="email"
              type="text"
              placeholder="john@gmail.com"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              className={`h-10 px-3 rounded-lg border ${
                isEmailValid ? "border-gray-300" : "border-red-500"
              } focus:ring-purple-500 focus:border-purple-500 text-sm`}
            />
            {!isEmailValid && (
              <p className="text-red-500 text-xs mt-1">
                Please enter a valid email address
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password*
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                className={`h-10 px-3 rounded-lg border ${
                  isPasswordValid ? "border-gray-300" : "border-red-500"
                } focus:ring-purple-500 focus:border-purple-500 pr-10 text-sm`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            {!isPasswordValid && (
              <p className="text-red-500 text-xs mt-1">
                Password must be at least 8 characters with a letter and a number
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password*
            </label>
            <div className="relative">
              <Input
                id="confirm-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password again"
                value={confirmPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setConfirmPassword(e.target.value)
                }
                className={`h-10 px-3 rounded-lg border ${
                  isConfirmPasswordValid ? "border-gray-300" : "border-red-500"
                } focus:ring-purple-500 focus:border-purple-500 pr-10 text-sm`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            {!isConfirmPasswordValid && (
              <p className="text-red-500 text-xs mt-1">
                Passwords do not match
              </p>
            )}
          </div>
          <Button
            style={{ backgroundColor: "#8A63FF" }}
            className="w-full h-10 text-white rounded-lg text-sm font-semibold"
          >
            Submit
          </Button>
        </form>
        <div className="mt-8 text-left">
          <p className="text-black text-sm font-bold pt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-black underline font-bold">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const Signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState<boolean>(true);
  const navigate = useNavigate();

  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex: RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleSignup = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const validEmail: boolean = emailRegex.test(email);
    const validPassword: boolean = passwordRegex.test(password);
    const validConfirmPassword: boolean = password === confirmPassword;

    setIsEmailValid(validEmail);
    setIsPasswordValid(validPassword);
    setIsConfirmPasswordValid(validConfirmPassword);

    if (validEmail && validPassword && validConfirmPassword) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    }
  };

  return (
    <SignupForm
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
      isConfirmPasswordValid={isConfirmPasswordValid}
      setIsConfirmPasswordValid={setIsConfirmPasswordValid}
      showPassword={showPassword}
      setShowPassword={setShowPassword}
      handleSignup={handleSignup}
    />
  );
};

export default Signup;