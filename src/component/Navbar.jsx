import React from "react";
import { Menu, X } from "react-feather";
import { Link } from "react-router-dom";
import logo from "../assets/AboutPage/Logo.png";

const Navbar = ({ logo, sections, onLogin, onSignup }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="w-16 h-8 sm:w-18 sm:h-10 rounded"
            />
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <a
                key={section.label}
                href={section.anchor}
                className="text-blue-900 hover:text-blue-700 transition-colors flex items-center gap-2"
              >
                {section.icon &&
                  React.createElement(section.icon, { size: 18 })}
                {section.label}
              </a>
            ))}
          </nav>

          {/* Desktop buttons */}
          <div className="hidden md:flex space-x-3">
            <Link
              className="px-3 py-1.5 sm:px-4 sm:py-2 border border-blue-900 text-blue-900 rounded hover:bg-blue-50 transition-colors text-sm sm:text-base"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition-colors text-sm sm:text-base"
              to="/signUp"
            >
              Sign up
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} py-4`}>
          <nav className="flex flex-col space-y-4">
            {sections.map((section) => (
              <a
                key={section.label}
                href={section.anchor}
                className="text-blue-900 hover:text-blue-700 transition-colors flex items-center gap-2"
              >
                {section.icon &&
                  React.createElement(section.icon, { size: 18 })}
                {section.label}
              </a>
            ))}
            <div className="flex flex-col space-y-2">
              <Link
                className="px-4 py-2 border border-blue-900 text-blue-900 rounded hover:bg-blue-50 transition-colors"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition-colors"
                to="/signUp"
              >
                Sign up
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
