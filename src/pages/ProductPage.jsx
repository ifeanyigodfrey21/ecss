import React, { useState } from "react";
import Footer from "../component/Footer";
import AnimatedContent from "../UI/AnimatedContent";
import SplitText from "../UI/SplitText";
import Magnet from "../UI/Magnet";
import StarBorder from "../UI/StarBorder";
import GradientText from "../UI/GradientText";
import ShinyText from "../UI/ShinyText";
import FadeContent from "../UI/FadeContent";

import logo from "../assets/AboutPage/Logo.png";
import a1 from "../assets/AboutPage/a2.png";
import a2 from "../assets/AboutPage/a1.png";
import H3 from "../assets/Hompage/h3.png";
import H4 from "../assets/Hompage/h4.png";
import H5 from "../assets/p1.png";
import H6 from "../assets/p2.png";

import {
  Menu,
  X,
  Star,
  Users,
  Trophy,
  ChevronRight,
  ShoppingCart,
} from "lucide-react";
import Navbar from "../component/Navbar";

function ProductPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = [
    { label: "Why Us", anchor: "#why-us", icon: Trophy },
    { label: "Courses", anchor: "#courses", icon: Star },
    { label: "About", anchor: "#about", icon: Users },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="w-full max-w-screen px-0 sm:px-6 lg:px-2">
      <Navbar logo={logo} sections={sections} />

      {/* Hero Section with Improved Responsiveness */}
      <AnimatedContent
        distance={100}
        direction="vertical"
        threshold={0.2}
        className="w-full bg-white py-6   sm:py-0 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-center gap-8"
      >
        <div className="flex-col md:flex  md:px-2 md md:flex-row-reverse md:justify-between pt-20">
          <div className="flex flex-col w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
            <SplitText
              text="Transform Your Life with Tailored Coaching Solutions."
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4 text-center md:text-center"
              delay={100}
            />
            <p className="text-gray-600 mb-6 md:text-2xl text-base sm:text-lg text-center md:text-center">
              The stories shared by both professional individuals and
              organizations that gone through E-consult suites solution is worth
              it and we want share with you.
            </p>
            <div className="flex justify-center md:justify-center mb-6 md:mb-0">
              <Magnet magnetStrength={30}>
                <StarBorder
                  color="cyan"
                  speed="4s"
                  className="bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors"
                >
                  Register now
                </StarBorder>
              </Magnet>
            </div>
          </div>

          <FadeContent
            blur={true}
            duration={1000}
            className="w-full md:w-1/2 order-1 md:order-2"
          >
            <div className="relative">
              <img
                src={a1}
                alt="A professional individual in a suit"
                className="rounded-lg w-full h-auto"
              />
              <div className="absolute bottom-4 left-4 bg-yellow-400 text-gray-800 font-bold py-1.5 px-3 sm:py-2 sm:px-4 rounded text-xs sm:text-sm">
                <ShinyText text="5k Happy Clients" speed={3} />
              </div>
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-800 font-bold py-1.5 px-3 sm:py-2 sm:px-4 rounded text-xs sm:text-sm">
                <ShinyText text="4.7 Proven Expert" speed={3} />
              </div>
            </div>
          </FadeContent>
        </div>
      </AnimatedContent>

      {/* Course Sections with Improved Responsiveness */}
      <div className="space-y-8 mt-8">
        {[
          {
            image: a2,
            title: "21-Day Peak Productivity Challenge",
            description:
              "A group coaching program on building sustainable self-discipline, break procrastination and perform at your highest self!",
            price: "₦25,000",
          },
          {
            image: H3,
            title: "Peak Performance Mastery Course",
            description:
              "A pre-recorded online course to 10x your focus and Energy, build self-mastery and achieve your goals.",
            price: "Free",
            reverse: true,
          },
          {
            image: H4,
            title: "Peak Productivity Masterclass",
            description:
              "A weekly live masterclass on telegram. Join our weekly live masterclass on Telegram, where you'll gain actionable insights and personalized guidance.",
            price: "Free",
          },
          {
            image: H5,
            title: "Month Life Transformation Coaching Program",
            description:
              "Experience private one-on-one coaching tailored specifically to your unique goals and challenges.",
            price: "₦250,000",
            reverse: true,
          },
        ].map((course, index) => (
          <AnimatedContent
            key={index}
            distance={150}
            direction={course.reverse ? "horizontal" : "vertical"}
            className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-center gap-6"
          >
            {course.reverse ? (
              <div className="flex flex-col md:flex-row container md:justify-between md:pl-10 w-full">
                <div className="md:w-1/2 flex flex-col text-center md:text-left mb-6 md:mb-0">
                  <GradientText
                    colors={["#40ffaa", "#4079ff"]}
                    className="text-2xl md:text-4xl font-bold mb-4 text-center md:text-left"
                  >
                    {course.title}
                  </GradientText>
                  <p className="text-gray-700 mb-4 text-base md:text-lg text-center md:text-left">
                    {course.description}
                  </p>
                  <p className="text-gray-900 font-bold mb-4 text-center md:text-left">
                    Price: {course.price}
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <Magnet magnetStrength={40}>
                      <StarBorder
                        color="yellow"
                        speed="5s"
                        className="bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors"
                      >
                        Buy now
                      </StarBorder>
                    </Magnet>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="rounded-lg shadow-lg w-full max-w-md h-auto object-cover"
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row container md:pr-16 md:justify-between w-full">
                <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="rounded-lg w-full max-w-md h-auto object-cover"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col text-center md:text-left">
                  <GradientText
                    colors={["#40ffaa", "#4079ff"]}
                    className="text-2xl md:text-4xl font-bold mb-4 text-center md:text-left"
                  >
                    {course.title}
                  </GradientText>
                  <p className="text-gray-600 mb-4 text-base md:text-lg text-center md:text-left">
                    {course.description}
                  </p>
                  <p className="text-gray-800 font-bold mb-4 text-center md:text-left">
                    Price: {course.price}
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <Magnet magnetStrength={40}>
                      <StarBorder
                        color="yellow"
                        speed="5s"
                        className="bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors"
                      >
                        Buy now
                      </StarBorder>
                    </Magnet>
                  </div>
                </div>
              </div>
            )}
          </AnimatedContent>
        ))}
      </div>

      {/* Testimonials Section with Improved Responsiveness */}
      <div className="p-4 sm:p-8 mt-8 text-center">
        <SplitText
          text="Discover What Our Students Feel About Us"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-8"
          delay={150}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {[1, 2, 3].map((_, index) => (
            <FadeContent
              key={index}
              blur={true}
              duration={800}
              className="w-full"
            >
              <div
                className={`${
                  index === 0 ? "bg-yellow-200" : "bg-blue-900"
                } p-6 rounded-lg ${
                  index === 0 ? "border border-gray-300" : ""
                } max-w-[400px] mx-auto`}
              >
                <div className="flex flex-col items-center mb-4">
                  <img
                    src={H6}
                    alt="Profile picture"
                    className="w-16 h-16 rounded-full mb-4"
                  />
                  <h2
                    className={`text-xl sm:text-2xl font-bold ${
                      index === 0 ? "text-blue-900" : "text-yellow-200"
                    }`}
                  >
                    <ShinyText
                      text="Adesokon Faith"
                      speed={4}
                      disabled={index !== 0}
                    />
                  </h2>
                </div>
                <p
                  className={`${
                    index === 0 ? "text-blue-900" : "text-yellow-200"
                  } text-base text-center`}
                >
                  I was struggling with stress and burnout when I joined this
                  coaching program. My coach taught me how to set boundaries,
                  prioritize my well-being, and take meaningful steps toward a
                  healthier lifestyle.
                </p>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductPage;
