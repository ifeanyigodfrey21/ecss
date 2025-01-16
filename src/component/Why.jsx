import React from "react";
import H5 from "../assets/Hompage/h5.png";
import H6 from "../assets/Hompage/h6.png";
import H7 from "../assets/Hompage/h7.png";
import H8 from "../assets/Hompage/h8.png";

function Why() {
  return (
    <div className="text-center p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Unlock Your Potential with Our Coaching
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 text-left">
          <p className="text-gray-700 mb-4">
            By the end of the course you should be able to achieve peak
            performance and find clarity in your goals by:
          </p>
          <ul className="list-none space-y-2">
            <li className="flex items-center text-gray-700">
              <i className="fas fa-check-circle text-blue-500 mr-2"></i>{" "}
              Mastering Time Management
            </li>
            <li className="flex items-center text-gray-700">
              <i className="fas fa-check-circle text-blue-500 mr-2"></i>{" "}
              Enhancing Your Productivity
            </li>
            <li className="flex items-center text-gray-700">
              <i className="fas fa-check-circle text-blue-500 mr-2"></i>{" "}
              Tracking and Measuring Progress
            </li>
            <li className="flex items-center text-gray-700">
              <i className="fas fa-check-circle text-blue-500 mr-2"></i> Setting
              and Achieving Clear Goals
            </li>
            <li className="flex items-center text-gray-700">
              <i className="fas fa-check-circle text-blue-500 mr-2"></i>{" "}
              Improving Focus and Concentration
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <div className="relative">
            <img
              src={H5}
              alt="Person in a suit"
              className="rounded-full w-49 h-49 object-cover m-2"
            />
            <img
              src={H6}
              alt="Books"
              className="absolute top-0 right-0 rounded-full w-12 h-12 object-cover"
            />
            <img
              src={H7}
              alt="Desk with a computer"
              className="absolute bottom-0 left-0 rounded-full w-12 h-12 object-cover"
            />
            <img
              src={H8}
              alt="Nature scenery"
              className="absolute bottom-0 right-0 rounded-full ml-18 w-12 h-12 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
