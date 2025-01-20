import React from "react";
import H2 from "../assets/Hompage/h2.png";
import H3 from "../assets/Hompage/h4.png";
import H4 from "../assets/Hompage/h3.png";
import "animate.css";
import { Link, useNavigate } from "react-router-dom";

function About() {
  return (
    <div className="flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 slide-left">
        Personalized coaching to help you achieve your work-life balance
      </h1>
      <p className="text-center text-gray-600 mb-8 slide-right max-w-2xl">
        At Fleary Godfrey Coaching Co., we go beyond generic advice by offering
        tailored strategies and tools that empower you to achieve peak
        performance, master time management and find clarity in your goals.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 slide-left">
        <div className="flex flex-col items-center">
          <img
            src={H2}
            alt="Person in a suit standing in a library"
            className="rounded-lg mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-800">
            21-Day Peak Productivity Challenge
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={H3}
            alt="Group of people in a meeting"
            className="rounded-lg mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-800">
            Peak Performance Mastery Course
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={H4}
            alt="Speaker on stage in front of an audience"
            className="rounded-lg mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-800">
            Peak Productivity Masterclass
          </h2>
        </div>
      </div>
      <div className="text-center">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
          See More
        </button>
      </div>
    </div>
  );
}

export default About;
