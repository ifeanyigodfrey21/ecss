import React, { useState } from "react";
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../assets/AboutPage/Logo.png";
import a1 from "../assets/AboutPage/a1.png";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

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
            <p className="text-gray-600 text-lg font-medium">Welcome back!</p>
            <p className="text-gray-600">Please enter your details</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1.5">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {showPassword ? (
                    <FaEyeSlash className="w-5 h-5" />
                  ) : (
                    <FaEye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="form-checkbox w-4 h-4 text-indigo-600 rounded"
                />
                <span className="ml-2 text-gray-700">Remember me</span>
              </label>
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Forgot Password?
              </a>
            </div>

            <Link
              to="/dashboard"
              className="w-full bg-slate-500 text-black py-2.5 rounded-lg hover:bg-slate-400 transition-colors font-medium text-lg flex items-center justify-center"
            >
              Log in
            </Link>

            <div className="relative py-3">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-sm text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <button className="w-full bg-yellow-500 text-black py-2.5 rounded-lg hover:bg-yellow-400 transition-colors font-medium text-lg flex items-center justify-center">
              <FaGoogle className="mr-2" /> Log in with Google
            </button>

            <button className="w-full bg-indigo-900 text-white py-2.5 rounded-lg hover:bg-indigo-800 transition-colors font-medium text-lg flex items-center justify-center">
              <FaFacebookF className="mr-2" /> Log in with Facebook
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signUp"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
