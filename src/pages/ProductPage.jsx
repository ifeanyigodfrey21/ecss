import React, { useState } from "react";
import Footer from "../component/Footer";
import logo from "../assets/AboutPage/Logo.png";
import a1 from "../assets/AboutPage/a2.png";
import a2 from "../assets/AboutPage/a1.png";
import H3 from "../assets/Hompage/h3.png";
import H4 from "../assets/Hompage/h4.png";
import H5 from "../assets/p1.png";
import H6 from "../assets/p2.png";

import {
  Menu,
  X,
  Star,
  Users,
  Trophy,
  ChevronRight,
  ShoppingCart,
} from "lucide-react";

function ProductPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img
                src={logo}
                alt="ECSS logo"
                className="w-16 h-8 sm:w-18 sm:h-10 rounded"
              />
            </div>

            <button className="md:hidden p-2" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#why-us"
                className="text-blue-900 hover:text-blue-700 transition-colors flex items-center gap-2"
              >
                <Trophy size={18} />
                Why Us
              </a>
              <a
                href="#courses"
                className="text-blue-900 hover:text-blue-700 transition-colors flex items-center gap-2"
              >
                <Star size={18} />
                Courses
              </a>
              <a
                href="#about"
                className="text-blue-900 hover:text-blue-700 transition-colors flex items-center gap-2"
              >
                <Users size={18} />
                About
              </a>
            </nav>

            <div className="hidden md:flex space-x-3">
              <button className="px-3 py-1.5 sm:px-4 sm:py-2 border border-blue-900 text-blue-900 rounded hover:bg-blue-50 transition-colors text-sm sm:text-base">
                Login
              </button>
              <button className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition-colors text-sm sm:text-base">
                Sign up
              </button>
            </div>
          </div>

          <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} py-4`}>
            <nav className="flex flex-col space-y-4">
              <a
                href="#why-us"
                className="text-blue-900 hover:text-blue-700 transition-colors flex items-center gap-2"
              >
                <Trophy size={18} />
                Why Us
              </a>
              <a
                href="#courses"
                className="text-blue-900 hover:text-blue-700 transition-colors flex items-center gap-2"
              >
                <Star size={18} />
                Courses
              </a>
              <a
                href="#about"
                className="text-blue-900 hover:text-blue-700 transition-colors flex items-center gap-2"
              >
                <Users size={18} />
                About
              </a>
              <div className="flex flex-col space-y-2">
                <button className="px-4 py-2 border border-blue-900 text-blue-900 rounded hover:bg-blue-50 transition-colors">
                  Login
                </button>
                <button className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition-colors">
                  Sign up
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-white p-4 sm:p-8 mt-20 sm:mt-24 rounded-lg shadow-lg max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 px-4 sm:px-6 lg:px-8">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Transform Your Life with Tailored Coaching Solutions.
          </h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            The stories shared by both professional individuals and
            organizations that gone through E-consult suites solution is worth
            it and we want share with you.
          </p>
          <button className="bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors">
            Register now
          </button>
        </div>
        <div className="md:w-1/2 relative w-full">
          <img
            src={a1}
            alt="A professional individual in a suit"
            className="rounded-lg w-full h-auto"
          />
          <div className="absolute bottom-4 left-4 bg-yellow-400 text-gray-800 font-bold py-1.5 px-3 sm:py-2 sm:px-4 rounded text-sm sm:text-base">
            5k Happy Clients
          </div>
          <div className="absolute top-4 right-4 bg-yellow-400 text-gray-800 font-bold py-1.5 px-3 sm:py-2 sm:px-4 rounded text-sm sm:text-base">
            4.7 Proven Expert
          </div>
        </div>
      </div>

      {/* Course Sections */}
      <div className="max-w-7xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8 mt-8">
        {/* First Course */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6">
          <img
            src={a2}
            alt="A person in a suit standing in front of a bookshelf"
            className="rounded-lg w-full md:w-1/2 h-auto object-cover"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              21-Day Peak Productivity Challenge
            </h1>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              A group coaching program on building sustainable self-discipline,
              break procrastination and perform at your highest self! With
              expert guidance and a supportive community, you'll develop the
              habits and mindset needed to stay consistent and reach your goals
              faster.
            </p>
            <p className="text-gray-800 font-bold mb-4">Price: ₦25,000</p>
            <button className="bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors">
              Buy now
            </button>
          </div>
        </div>

        {/* Second Course */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Peak Performance Mastery Course
            </h2>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              A pre-recorded online course to 10x your focus and Energy, build
              self-mastery and achieve your goals. Through practical lessons and
              proven techniques, you'll learn how to eliminate distractions,
              sharpen your mental clarity, and unlock your full potential.
            </p>
            <p className="text-gray-900 font-bold mb-4">Price: Free</p>
            <button className="bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors">
              Buy now
            </button>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <img
              src={H3}
              alt="Group of people attending a course"
              className="w-full rounded-lg shadow-lg h-auto object-cover"
            />
          </div>
        </div>

        {/* Third Course */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6">
          <img
            src={H4}
            alt="A speaker on stage with an audience watching"
            className="w-full md:w-1/2 rounded-lg h-auto object-cover"
          />
          <div className="md:w-1/2">
            <h1 className="text-xl sm:text-2xl font-bold text-[#333] mb-2">
              Peak Productivity Masterclass
            </h1>
            <p className="text-[#555] mb-4 text-sm sm:text-base">
              A weekly live masterclass on telegram. Join our weekly live
              masterclass on Telegram, where you'll gain actionable insights and
              personalized guidance to accelerate your growth. Connect with
              like-minded individuals and learn directly from experts, all from
              the convenience of your phone.
            </p>
            <p className="text-[#555] mb-4">
              <strong>Price:</strong> Free
            </p>
            <button className="bg-[#ffeb3b] text-[#333] font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors">
              Buy now
            </button>
          </div>
        </div>

        {/* Fourth Course */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2 order-2 md:order-1">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Month Life Transformation Coaching Program
            </h1>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Experience private one-on-one coaching tailored specifically to
              your unique goals and challenges. Get dedicated support,
              personalized strategies, and accountability to fast-track your
              journey to success.
            </p>
            <p className="text-gray-800 mb-4">
              Price: <span className="font-bold">₦250,000</span>
            </p>
            <button className="bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors">
              Buy now
            </button>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <img
              src={H5}
              alt="A person giving a presentation"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="p-4 sm:p-8 max-w-7xl mx-auto mt-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-8">
          Discover What Our Student Feel About Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className={`${
                index === 0 ? "bg-yellow-200" : "bg-blue-900"
              } p-4 rounded-lg ${index === 0 ? "border border-gray-300" : ""}`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={H6}
                  alt="Profile picture"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h2
                  className={`text-lg sm:text-xl font-bold ${
                    index === 0 ? "text-blue-900" : "text-yellow-200"
                  }`}
                >
                  Adesokon Faith
                </h2>
              </div>
              <p
                className={`${
                  index === 0 ? "text-blue-900" : "text-yellow-200"
                } text-sm sm:text-base`}
              >
                I was struggling with stress and burnout when I joined this
                coaching program. My coach taught me how to set boundaries,
                prioritize my well-being, and take meaningful steps toward a
                healthier lifestyle.
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductPage;
