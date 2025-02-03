import React from "react";
import H5 from "../assets/Hompage/h5.png";
import H6 from "../assets/Hompage/h6.png";
import H7 from "../assets/Hompage/h7.png";
import H8 from "../assets/Hompage/h8.png";
import { CheckCircle } from "lucide-react";

function Why() {
  const benefits = [
    "Mastering Time Management",
    "Enhancing Your Productivity",
    "Tracking and Measuring Progress",
    "Setting and Achieving Clear Goals",
    "Improving Focus and Concentration",
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto slide-right">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Unlock Your Potential with Our Coaching
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-6">
              By the end of the course you should be able to achieve peak
              performance and find clarity in your goals by:
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64">
              <img
                src={H5}
                alt="Person in a suit"
                className="absolute inset-0 w-full h-full rounded-full object-cover shadow-lg"
              />

              <img
                src={H6}
                alt="Books"
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
              />

              <img
                src={H7}
                alt="Desk with a computer"
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
              />

              <img
                src={H8}
                alt="Nature scenery"
                className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;

{
  /* <div className="flex justify-center md:justify-start">
              <Magnet magnetStrength={30}>
                <StarBorder
                  color="cyan"
                  speed="4s"
                  className="bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors"
                >
                  Register now
                </StarBorder>
              </Magnet>
            </div> */
}
