import React from "react";
import H9 from "../assets/Hompage/h9.png";
import H10 from "../assets/Hompage/h10.png";
import H11 from "../assets/Hompage/h11.png";

function CTA() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <div className="bg-indigo-900 text-white w-full py-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-2">
          Ready to Achieve More? Explore Our Time Management Tips!
        </h1>
        <button className="bg-yellow-400 text-indigo-900 font-bold py-2 px-4 rounded mb-2">
          Register now
        </button>
        <p>Register now to get amazing</p>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-8">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
            <img
              src={H9}
              alt="Client 1"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-bold mb-2">Godfrey Johnson</h3>
            <p className="text-gray-600 mb-4">
              I used to struggle with time management and found myself
              constantly overwhelmed. Through this course, I learned techniques
              to prioritize.
            </p>
            <div className="text-yellow-400">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
            <img
              src={H10}
              alt="Client 2"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-bold mb-2">Godfrey Johnson</h3>
            <p className="text-gray-600 mb-4">
              I used to struggle with time management and found myself
              constantly overwhelmed. Through this course, I learned techniques
              to prioritize.
            </p>
            <div className="text-yellow-400">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
            <img
              src={H11}
              alt="Client 3"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-bold mb-2">Godfrey Johnson</h3>
            <p className="text-gray-600 mb-4">
              I used to struggle with time management and found myself
              constantly overwhelmed. Through this course, I learned techniques
              to prioritize.
            </p>
            <div className="text-yellow-400">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
