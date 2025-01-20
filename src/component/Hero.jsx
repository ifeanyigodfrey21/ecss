import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import H1 from "../assets/Hompage/h1.png";
import logo from "../assets/AboutPage/Logo.png";
import "animate.css";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${H1})` }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Navigation */}
      <nav className="relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <img
              src={logo}
              alt="ECSS Logo"
              className="w-16 sm:w-20 md:w-24 bg-white rounded-sm"
            />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-white hover:text-yellow-500 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/login"
                className="text-white hover:text-yellow-500 transition-colors"
              >
                Course
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-yellow-500 transition-colors"
              >
                About
              </Link>
              <Link
                to="/testimonials"
                className="text-white hover:text-yellow-500 transition-colors"
              >
                Testimonials
              </Link>
            </div>

            {/* Desktop Register Button */}
            <Link
              to="/signup"
              className="hidden md:block bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-400 transition-colors"
            >
              Register now
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg">
              <div className="px-4 py-3 space-y-3">
                <Link
                  to="/"
                  className="block text-gray-900 hover:text-yellow-500 transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/login"
                  className="block text-gray-900 hover:text-yellow-500 transition-colors"
                >
                  Courses
                </Link>
                <Link
                  to="/about"
                  className="block text-gray-900 hover:text-yellow-500 transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/testimonials"
                  className="block text-gray-900 hover:text-yellow-500 transition-colors"
                >
                  Testimonials
                </Link>
                <Link
                  to="/signUp"
                  className="w-full bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition-colors"
                >
                  Register
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Balance Work and{" "}
          <span className="text-yellow-500 bg-white/90 backdrop-blur-sm animate__animated animate__rotateIn rounded-md px-2 inline-block my-2">
            Achieve Goals
          </span>{" "}
          <br className="hidden sm:block" />
          with E-Coaching Solutions
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl">
          The handy doodles on, announced by some over people everywhere best
          five.
        </p>
        <Link
          to="/login"
          className="bg-yellow-500 text-black px-8 py-3 rounded hover:bg-yellow-400 transition-colors font-medium"
        >
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Hero;
