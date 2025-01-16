import React from "react";
import H2 from "../assets/Hompage/h2.png";
import H3 from "../assets/Hompage/h4.png";
import H4 from "../assets/Hompage/h3.png";

function About() {
  return (
    <div className="flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
        Personalized coaching to help you achieve your work-life balance
      </h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl">
        At Fleary Godfrey Coaching Co., we go beyond generic advice by offering
        tailored strategies and tools that empower you to achieve peak
        performance, master time management and find clarity in your goals.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
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
      <button className="flex items-center px-6 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100">
        See More <i className="fas fa-arrow-right ml-2"></i>
      </button>
    </div>
  );
}

export default About;
