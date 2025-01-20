import React, { useState } from "react";
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../assets/AboutPage/Logo.png";
import a1 from "../assets/AboutPage/a1.png";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row max-w-4xl w-full">
        {/* Image section - hidden on mobile */}
        <div className="hidden md:block md:w-1/2 rounded-l-lg overflow-hidden">
          <img
            src={a1}
            alt="Professional atmosphere"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form section */}
        <div className="w-full md:w-1/2 p-6 md:p-8">
          <div className="text-center mb-8">
            <img src={logo} alt="Logo" className="mx-auto mb-4 w-18 h-12" />
            <p className="text-gray-500 font-inter">Get Started!</p>
            <p className="text-gray-500 font-inter">
              Please enter your details
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1.5">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Enter your email"
              />
            </div>

            <div className="relative">
              <label className="block text-gray-700 font-medium mb-1.5">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Create a password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-500 hover:text-gray-700 transition-colors"
              >
                {showPassword ? (
                  <FaEyeSlash className="w-5 h-5" />
                ) : (
                  <FaEye className="w-5 h-5" />
                )}
              </button>
              <p className="text-xs text-gray-500 mt-1">
                Minimum of 6 characters, including a number
              </p>
            </div>

            <Link
              to="/login"
              className="w-full bg-slate-400 text-black py-2.5 rounded-lg hover:bg-yellow-300 transition-colors font-medium flex items-center justify-center"
            >
              Sign Up
            </Link>

            <button className="w-full bg-yellow-400 text-black py-2.5 rounded-lg hover:bg-yellow-300 transition-colors font-medium flex items-center justify-center">
              <FaGoogle className="mr-2" /> Sign Up with Google
            </button>

            <button className="w-full bg-blue-900 text-white py-2.5 rounded-lg hover:bg-blue-800 transition-colors font-medium flex items-center justify-center">
              <FaFacebookF className="mr-2" /> Sign Up with Facebook
            </button>
          </form>

          <p className="text-center text-gray-500 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
