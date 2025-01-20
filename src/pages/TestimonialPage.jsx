import React from "react";
import Footer from "../component/Footer";
import logo from "../assets/AboutPage/Logo.png";

function TestimonialPage() {
  const testimonials = [
    {
      name: "Godfrey Johnson",
      role: "Project Manager",
      image: "/api/placeholder/100/100",
      text: "ECSS sessions taught me how to leverage my strengths, clarify my career goals, and boost my confidence.",
    },
    {
      name: "Adetayo Babs",
      role: "Team Lead",
      image: "/api/placeholder/100/100",
      text: "I'm now able to communicate effectively with my team and feel more confident in my role as a manager.",
    },
    {
      name: "Deborah Akintola",
      role: "Business Analyst",
      image: "/api/placeholder/100/100",
      text: "The e-coaching course was a game-changer for me. This experience has genuinely helped me become a better version of myself.",
    },
    {
      name: "Ibitoye Simiat",
      role: "Product Designer",
      image: "/api/placeholder/100/100",
      text: "I used to struggle with time management and found myself constantly overwhelmed. Through this course, I learned techniques to prioritize tasks, & focus on what truly matters.",
    },
    {
      name: "Mary Bassey",
      role: "Marketing Director",
      image: "/api/placeholder/100/100",
      text: "I now feel much more in control and am excited about my future!, Thanks to ECSS.",
    },
    {
      name: "Daniel Isaac",
      role: "Entrepreneur",
      image: "/api/placeholder/100/100",
      text: "As an entrepreneur, I needed guidance on strategy and mindset, and this e-coaching course delivered. The modules on goal setting, strategic planning, and resilience gave me the edge I needed to take my business to the next level.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="ECSS logo" className="w-18 h-10 rounded" />{" "}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#why-us"
                className="text-blue-900 hover:text-blue-700 transition-colors"
              >
                Why Us
              </a>
              <a
                href="#courses"
                className="text-blue-900 hover:text-blue-700 transition-colors"
              >
                Courses
              </a>
              <a
                href="#about"
                className="text-blue-900 hover:text-blue-700 transition-colors"
              >
                About
              </a>
            </nav>

            <div className="flex space-x-3">
              <button className="px-4 py-2 border border-blue-900 text-blue-900 rounded hover:bg-blue-50 transition-colors">
                Login
              </button>
              <button className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition-colors">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-300 to-blue-900 text-center">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Hear what Professionals and Organizations have to say about our
              tailored coaching solutions
            </h1>
            <p className="text-lg text-blue-900 mb-6">
              The stories shared by both professional individuals and
              organizations that have gone through E-consult suites solution is
              worth it and we want to share with you.
            </p>
            <p className="text-white mb-8">
              Want to unlock your productivity with E-Consult Suite Solutions?
            </p>
            <button className="px-8 py-3 bg-yellow-400 text-blue-900 rounded hover:bg-yellow-500 transition-colors text-lg font-semibold">
              Buy a Course now
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-900/20 mb-4 text-4xl">❝</div>
                <p className="text-gray-700 mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-3">
                    <h3 className="font-semibold text-blue-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="py-16 bg-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-12 rounded-xl overflow-hidden">
              <img
                src="/api/placeholder/800/400"
                alt="Training session"
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button className="text-white text-6xl hover:scale-110 transition-transform">
                  ▶
                </button>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">
                Why Us?
              </h2>
              <p className="text-lg mb-8 text-gray-200">
                Our unique blend of online courses, interactive workshops, and
                one-on-one coaching is crafted to fit seamlessly into your
                demanding schedule, helping you make a lasting impact both
                personally and professionally.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-6 py-3 bg-yellow-400 text-indigo-900 rounded hover:bg-yellow-500 transition-colors font-bold">
                  Explore Courses
                </button>
                <button className="px-6 py-3 border-2 border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400/10 transition-colors font-bold">
                  Book a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TestimonialPage;
