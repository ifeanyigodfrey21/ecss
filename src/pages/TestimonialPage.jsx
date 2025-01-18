import React from "react";
import Footer from "../component/Footer";

function TestimonialPage() {
  const testimonials = [
    {
      name: "Godfrey Johnson",
      image: "https://placehold.co/100x100",
      text: "ECSS sessions taught me how to leverage my strengths, clarify my career goals, and boost my confidence.",
    },
    {
      name: "Adetayo Babs",
      image: "https://placehold.co/100x100",
      text: "I'm now able to communicate effectively with my team and feel more confident in my role as a manager.",
    },
    {
      name: "Deborah Akintola",
      image: "https://placehold.co/100x100",
      text: "The e-coaching course was a game-changer for me. This experience has genuinely helped me become a better version of myself.",
    },
    {
      name: "Ibitoye Simiat",
      image: "https://placehold.co/100x100",
      text: "I used to struggle with time management and found myself constantly overwhelmed. Through this course, I learned techniques to prioritize tasks, & focus on what truly matters.",
    },
    {
      name: "Mary Bassey",
      image: "https://placehold.co/100x100",
      text: "I now feel much more in control and am excited about my future!, Thanks to ECSS.",
    },
    {
      name: "Daniel Isaac",
      image: "https://placehold.co/100x100",
      text: "As an entrepreneur, I needed guidance on strategy and mindset, and this e-coaching course delivered. The modules on goal setting, strategic planning, and resilience gave me the edge I needed to take my business to the next level.",
    },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-300 to-blue-900 text-center">
        <header className="w-full flex justify-between items-center p-4 bg-yellow-300">
          <div className="flex items-center">
            <img
              src="https://placehold.co/50x50"
              alt="ECSS logo"
              className="mr-2"
            />
            <span className="text-2xl font-bold text-blue-900">ECSS</span>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="text-blue-900">
              Why us
            </a>
            <a href="#" className="text-blue-900">
              Courses
            </a>
            <a href="#" className="text-blue-900">
              About
            </a>
          </nav>
          <div className="flex space-x-2">
            <button className="bg-blue-900 text-white px-4 py-2 rounded">
              Login
            </button>
            <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded">
              Sign up
            </button>
          </div>
        </header>
        <main className="flex flex-col items-center justify-center flex-grow p-4">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Hear what Professionals and Organizational have to say about our
            tailored coaching solutions
          </h1>
          <p className="text-blue-900 mb-4">
            The stories shared by both professional individuals and
            organizations that gone through E-consult suites solution is worth
            it and we want share with you.
          </p>
          <p className="text-white mb-4">
            Want to unlock your productivity with E-Consult Suite Solutions?
          </p>
          <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded">
            Buy a Course now
          </button>
        </main>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <img
                src={testimonial.image}
                alt={`Photo of ${testimonial.name}`}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-gray-600 mt-2">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-4xl p-4">
          <div className="relative">
            <img
              src="https://placehold.co/800x400"
              alt="Man reading a newspaper"
              className="w-full rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <i className="fas fa-play-circle text-4xl text-black"></i>
            </div>
          </div>
          <div className="mt-8 bg-indigo-900 text-center text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Why Us?</h2>
            <p className="mb-6">
              Our unique blend of online courses, interactive workshops, and
              one-on-one coaching is crafted to fit seamlessly into your
              demanding schedule, helping you make a lasting impact both
              personally and professionally.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-yellow-400 text-indigo-900 font-bold py-2 px-4 rounded">
                Login
              </button>
              <button className="bg-yellow-400 text-indigo-900 font-bold py-2 px-4 rounded">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default TestimonialPage;
