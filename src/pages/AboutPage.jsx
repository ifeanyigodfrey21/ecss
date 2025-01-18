import React from "react";
import logo from "../assets/AboutPage/Logo.png";
import a2 from "../assets/AboutPage/a2.png";
import a1 from "../assets/AboutPage/a1.png";
import Footer from "../component/Footer";
function AboutPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col min-w-screen">
        <header className="flex justify-between items-center p-6 bg-white shadow-md">
          <div className="flex items-center space-x-2">
            <i className="fas fa-book text-2xl text-blue-600"></i>
            <img
              src={logo}
              alt="ECSS Logo"
              className="w-24 bg-white rounded-sm"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Why us
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Courses
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              About
            </a>
          </nav>
          <div className="space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">
              Login
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
              Sign up
            </button>
          </div>
        </header>
        <main className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">
              The Ifeanyi Godfrey Coaching co.
            </h1>
            <p className="text-lg text-gray-600">
              A movement to empower people everywhere to live their best lives.
            </p>
            <button className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
              Register now
            </button>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src={a1}
              alt="A professional coach standing in front of a bookshelf"
              className="rounded-lg shadow-md"
            />
          </div>
        </main>
      </div>

      <div className="flex flex-col md:flex-row bg-yellow-400 items-center justify-center min-h-screen p-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={a2}
            alt="A person in a suit giving a presentation"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6 text-gray-900">
          <h2 className="text-sm font-bold">Value Proposition</h2>
          <h1 className="text-3xl font-bold mt-2">
            Unlock Your Full Potential With Personalized Coaching.
          </h1>
          <p className="mt-4 text-lg">
            At Ifeanyi Godfrey Coaching Co., we go beyond generic advice by
            offering tailored strategies and tools that empower you to achieve
            peak performance, master time management and find clarity in your
            goals.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="bg-indigo-900 text-white rounded-lg p-6 m-4 w-full md:w-1/2">
          <h2 className="text-sm font-semibold">The Vision</h2>
          <h1 className="text-2xl font-bold text-yellow-400 mt-2">
            Creating Lasting Impact Worldwide
          </h1>
          <p className="mt-4 text-sm">
            The vision is to be a leading global coaching brand, transforming
            lives by helping individuals and organizations unlock their full
            potential, achieve success, and create a lasting positive impact on
            the world.
          </p>
        </div>
        <div className="bg-indigo-900 text-white rounded-lg p-6 m-4 w-full md:w-1/2">
          <h2 className="text-sm font-semibold">The Mission</h2>
          <h1 className="text-2xl font-bold text-yellow-400 mt-2">
            Discipline, Clarity, and Productivity.
          </h1>
          <p className="mt-4 text-sm">
            Our mission is to equip busy professionals and organizations with
            the tools and strategies needed to enhance productivity, foster
            self-discipline, and gain clarity in their pursuits.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AboutPage;
