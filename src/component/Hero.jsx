import React from "react";
import H1 from "../assets/Hompage/h1.png";

function Hero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${H1})` }}
    >
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 bg-transparent">
        <div className="text-white text-lg font-bold">Logo</div>

        <div className="flex justify-center align-center gap-3 text-2xl ">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            Courses
          </a>
          <a href="#" className="text-white">
            About
          </a>
        </div>

        <button className="bg-yellow-500 text-black px-4 py-2 rounded">
          Register now
        </button>
      </nav>
      <div className="flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Balance Work and{" "}
          <span className="text-yellow-500">Achieve Goals</span> with <br />{" "}
          E-Coaching Solutions
        </h1>
        <p className="text-lg md:text-xl mb-6">
          The handy doodles on, announced by some over people everywhere best
          five.
        </p>
        <button className="bg-yellow-500 text-black px-6 py-3 rounded">
          Log in
        </button>
      </div>
    </div>
  );
}

export default Hero;
