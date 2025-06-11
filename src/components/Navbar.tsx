
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, LogOut, Bell, Heart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    window.location.href = '/';
  };

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "course", label: "Course", path: "/course" },
    { id: "book", label: "Book", path: "/book" },
    { id: "about", label: "About Us", path: "/about" },
    { id: "contact", label: "Contact Us", path: "/contact" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-purple-600">LOGO</Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`text-purple-600 hover:text-purple-800 px-3 py-2 text-sm font-medium ${isActive(item.path) ? 'font-bold' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <button className="text-purple-600 hover:text-purple-800">
                  <Bell className="h-6 w-6" />
                </button>
                <button className="text-purple-600 hover:text-purple-800">
                  <Heart className="h-6 w-6" />
                </button>
                <Link to="/profile">
                  <Button 
                    variant="outline" 
                    className="text-purple-600 border-purple-600 hover:bg-purple-50 hover:text-purple-700 font-medium rounded-full flex items-center"
                  >
                    <User className="mr-2 h-4 w-4" />
                    View Profile
                  </Button>
                </Link>
                <Button 
                  onClick={handleLogout}
                  variant="outline" 
                  className="text-purple-600 border-purple-600 hover:bg-purple-50 hover:text-purple-700 font-medium rounded-full flex items-center"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-50 hover:text-purple-700 font-medium rounded-full">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full px-6 py-2 flex items-center">
                    Sign Up Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
