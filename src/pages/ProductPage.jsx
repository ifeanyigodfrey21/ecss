import React from "react";
import Footer from "../component/Footer";

function ProductPage() {
  return (
    <>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-screen mx-auto flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Transform Your Life with Tailored Coaching Solutions.
          </h1>
          <p className="text-gray-600 mb-6">
            The stories shared by both professional individuals and
            organizations that gone through E-consult suites solution is worth
            it and we want share with you.
          </p>
          <button className="bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded">
            Register now
          </button>
        </div>
        <div className="md:w-1/2 relative">
          <img
            src="https://placehold.co/400x500"
            alt="A professional individual in a suit"
            className="rounded-lg w-full"
          />
          <div className="absolute bottom-4 left-4 bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded">
            5k Happy Clients
          </div>
          <div className="absolute top-4 right-4 bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded">
            4.7 Proven Expert
          </div>
        </div>
      </div>

      <div className="bg-white max-w-screen p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start  mx-auto">
        <img
          src="https://placehold.co/300x400"
          alt="A person in a suit standing in front of a bookshelf"
          className="rounded-lg w-full md:w-1/2 mb-4 md:mb-0 md:mr-6"
        />
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            21-Day Peak Productivity Challenge
          </h1>
          <p className="text-gray-600 mb-4">
            A group coaching program on building sustainable self-discipline,
            break procrastination and perform at your highest self! With expert
            guidance and a supportive community, you'll develop the habits and
            mindset needed to stay consistent and reach your goals faster.
          </p>
          <p className="text-gray-800 font-bold mb-4">Price: ₦25,000</p>
          <button className="bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded">
            Buy now
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start max-w-screen mx-auto">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Peak Performance Mastery Course
          </h2>
          <p className="text-gray-700 mb-4">
            A pre-recorded online course to 10x your focus and Energy, build
            self-mastery and achieve your goals. Through practical lessons and
            proven techniques, you'll learn how to eliminate distractions,
            sharpen your mental clarity, and unlock your full potential.
          </p>
          <p className="text-gray-900 font-bold mb-4">Price: Free</p>
          <button className="bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded">
            Buy now
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://placehold.co/400x300"
            alt="Group of people attending a course"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center max-w-sreen mx-auto">
        <img
          src="https://placehold.co/400x300"
          alt="A speaker on stage with an audience watching"
          className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 md:mr-4"
        />
        <div className="text-left">
          <h1 className="text-2xl font-bold text-[#333] mb-2">
            Peak Productivity Masterclass
          </h1>
          <p className="text-[#555] mb-4">
            A weekly live masterclass on telegram. Join our weekly live
            masterclass on Telegram, where you'll gain actionable insights and
            personalized guidance to accelerate your growth. Connect with
            like-minded individuals and learn directly from experts, all from
            the convenience of your phone.
          </p>
          <p className="text-[#555] mb-4">
            <strong>Price:</strong> Free
          </p>
          <button className="bg-[#ffeb3b] text-[#333] font-bold py-2 px-4 rounded">
            Buy now
          </button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 max-w-screen mx-auto">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Month Life Transformation Coaching Program
          </h1>
          <p className="text-gray-600 mb-4">
            Experience private one-on-one coaching tailored specifically to your
            unique goals and challenges. Get dedicated support, personalized
            strategies, and accountability to fast-track your journey to
            success.
          </p>
          <p className="text-gray-800 mb-4">
            Price: <span className="font-bold">₦250,000</span>
          </p>
          <button className="bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded">
            Buy now
          </button>
        </div>
        <div className="flex-1">
          <img
            src="https://placehold.co/600x400"
            alt="A person giving a presentation on stage with a large screen in the background"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>

      <div className="p-8 max-w-screen">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">
          Discover What Our Student Feel About Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-yellow-200 p-4 rounded-lg border border-gray-300">
            <div className="flex items-center mb-4">
              <img
                src="https://placehold.co/50x50"
                alt="Profile picture of Adesokon Faith"
                className="w-12 h-12 rounded-full mr-4"
              />
              <h2 className="text-xl font-bold text-blue-900">
                Adesokon Faith
              </h2>
            </div>
            <p className="text-blue-900">
              I was struggling with stress and burnout when I joined this
              coaching program. My coach taught me how to set boundaries,
              prioritize my well-being, and take meaningful steps toward a
              healthier lifestyle.
            </p>
          </div>
          <div className="bg-blue-900 p-4 rounded-lg">
            <div className="flex items-center mb-4">
              <img
                src="https://placehold.co/50x50"
                alt="Profile picture of Adesokon Faith"
                className="w-12 h-12 rounded-full mr-4"
              />
              <h2 className="text-xl font-bold text-yellow-200">
                Adesokon Faith
              </h2>
            </div>
            <p className="text-yellow-200">
              I was struggling with stress and burnout when I joined this
              coaching program. My coach taught me how to set boundaries,
              prioritize my well-being, and take meaningful steps toward a
              healthier lifestyle.
            </p>
          </div>
          <div className="bg-blue-900 p-4 rounded-lg">
            <div className="flex items-center mb-4">
              <img
                src="https://placehold.co/50x50"
                alt="Profile picture of Adesokon Faith"
                className="w-12 h-12 rounded-full mr-4"
              />
              <h2 className="text-xl font-bold text-yellow-200">
                Adesokon Faith
              </h2>
            </div>
            <p className="text-yellow-200">
              I was struggling with stress and burnout when I joined this
              coaching program. My coach taught me how to set boundaries,
              prioritize my well-being, and take meaningful steps toward a
              healthier lifestyle.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductPage;
