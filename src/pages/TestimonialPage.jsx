import React from "react";
import Footer from "../component/Footer";
import logo from "../assets/AboutPage/Logo.png";
import Navbar from "../component/Navbar";
import {
  Menu,
  X,
  Star,
  Users,
  Trophy,
  ChevronRight,
  ShoppingCart,
} from "lucide-react";

// Reactbit UI Components
import SplitText from "../UI/SplitText";
import AnimatedContent from "../UI/AnimatedContent";
import FadeContent from "../UI/FadeContent";
import Magnet from "../UI/Magnet";
import StarBorder from "../UI/StarBorder";
import GradientText from "../UI/GradientText";
import ShinyText from "../UI/ShinyText";

function TestimonialPage() {
  const testimonials = [
    {
      name: "Godfrey Johnson",
      role: "Project Manager",
      image: "/api/placeholder/100/100",
      text: "ECSS sessions taught me how to leverage my strengths, clarify my career goals, and boost my confidence.",
    },
    // ... (rest of testimonials remain the same)
  ];

  const sections = [
    { label: "Watch Video", anchor: "#video", icon: Trophy },
    { label: "Testimonials", anchor: "#testimonials", icon: Star },
  ];

  return (
    <div className="min-h-screen overflow-hidden container">
      <div className="fixed w-full z-50 block">
        <Navbar logo={logo} sections={sections} />
      </div>

      {/* Hero Section */}
      <AnimatedContent direction="vertical" distance={100}>
        <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-300 to-blue-900 text-center mb-">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto ">
              <SplitText
                text="Hear what Professionals and Organizations have to say about our tailored coaching solutions"
                className="text-4xl md:text-5xl font-bold text-blue-900 mb-6"
                delay={100}
              />
              <p className="text-lg text-blue-900 mb-6 mt">
                The stories shared by both professional individuals and
                organizations that have gone through E-consult suites solution
                is worth it and we want to share with you.
              </p>
              <p className="text-white mb-8">
                Want to unlock your productivity with E-Consult Suite Solutions?
              </p>
              <Magnet magnetStrength={20}>
                <StarBorder>
                  <button className="px-8 py-3 bg-yellow-400 text-blue-900 rounded hover:bg-yellow-500 transition-colors text-lg font-semibold">
                    Buy a Course now
                  </button>
                </StarBorder>
              </Magnet>
            </div>
          </div>
        </div>
      </AnimatedContent>

      {/* Testimonials Grid */}
      <div className="bg-gray-50 py-16" id="testimonials">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedContent
                key={index}
                direction="vertical"
                distance={50}
                delay={index * 100}
              >
                <FadeContent blur={true} duration={1500}>
                  <Magnet magnetStrength={20}>
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="text-blue-900/20 mb-4 text-4xl">❝</div>
                      <p className="text-gray-700 mb-6">{testimonial.text}</p>
                      <div className="flex items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="ml-3">
                          <ShinyText
                            text={testimonial.name}
                            className="font-semibold text-blue-900"
                          />
                          <p className="text-sm text-gray-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Magnet>
                </FadeContent>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>

      {/* Why Us Section */}
      <AnimatedContent direction="horizontal" distance={150}>
        <div className="py-16 bg-indigo-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeContent blur={true} duration={1500}>
                <div
                  className="relative mb-12 rounded-xl overflow-hidden"
                  id="video"
                >
                  <img
                    src="/api/placeholder/800/400"
                    alt="Training session"
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Magnet magnetStrength={20}>
                      <button className="text-white text-6xl hover:scale-110 transition-transform">
                        ▶
                      </button>
                    </Magnet>
                  </div>
                </div>
              </FadeContent>
              <div className="text-center">
                <GradientText
                  colors={["#4079ff", "#40ffaa"]}
                  animationSpeed={3}
                  className="text-3xl font-bold mb-6"
                >
                  Why E-Coaching Solutions?
                </GradientText>
                <p className="text-lg mb-8 text-gray-200">
                  Our unique blend of online courses, interactive workshops, and
                  one-on-one coaching is crafted to fit seamlessly into your
                  demanding schedule, helping you make a lasting impact both
                  personally and professionally.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <StarBorder color="yellow">
                    <button className="px-6 py-3 bg-yellow-400 text-indigo-900 rounded hover:bg-yellow-500 transition-colors font-bold">
                      Explore Courses
                    </button>
                  </StarBorder>
                  <StarBorder color="yellow" speed="3s">
                    <button className="px-6 py-3 border-2 border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400/10 transition-colors font-bold">
                      Book a Consultation
                    </button>
                  </StarBorder>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>
      <Footer />
    </div>
  );
}

export default TestimonialPage;
