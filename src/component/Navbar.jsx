import React, { useState } from "react";
import { Menu, X } from "react-feather";
import { Link } from "react-router-dom";

const Navbar = ({ logo, sections, onLogin, onSignup }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-screen z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="w-12 h-8 sm:w-16 sm:h-10 lg:w-20 lg:h-12 object-contain"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8 items-center">
            {sections.map((section) => (
              <a
                key={section.label}
                href={section.anchor}
                className="text-sm lg:text-base text-blue-900 hover:text-blue-700 transition-colors flex items-center gap-2"
              >
                {section.icon &&
                  React.createElement(section.icon, { size: 18 })}
                {section.label}
              </a>
            ))}
          </nav>

          {/* Desktop buttons */}
          <div className="hidden md:flex space-x-2 lg:space-x-3">
            <Link
              className="px-3 py-1.5 lg:px-4 lg:py-2 border border-blue-900 text-blue-900 rounded hover:bg-blue-50 transition-colors text-xs sm:text-sm lg:text-base"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="px-3 py-1.5 lg:px-4 lg:py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition-colors text-xs sm:text-sm lg:text-base"
              to="/signUp"
            >
              Sign up
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute inset-x-0 top-full bg-white shadow-lg">
            <nav className="flex flex-col divide-y divide-blue-100 px-4 py-4">
              {sections.map((section) => (
                <a
                  key={section.label}
                  href={section.anchor}
                  className="py-3 text-blue-900 hover:text-blue-700 transition-colors flex items-center gap-3"
                >
                  {section.icon &&
                    React.createElement(section.icon, { size: 18 })}
                  {section.label}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <Link
                  className="text-center px-4 py-2 border border-blue-900 text-blue-900 rounded hover:bg-blue-50 transition-colors"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="text-center px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition-colors"
                  to="/signUp"
                >
                  Sign up
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
