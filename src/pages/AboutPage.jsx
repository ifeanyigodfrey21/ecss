import React from "react";
import logo from "../assets/AboutPage/Logo.png";
import a2 from "../assets/AboutPage/a2.png";
import a1 from "../assets/AboutPage/a1.png";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { Trophy, Star, Users } from "lucide-react";

// Reactbit UI Components
import SplitText from "../UI/SplitText";
import AnimatedContent from "../UI/AnimatedContent";
import FadeContent from "../UI/FadeContent";
import Magnet from "../UI/Magnet";
import StarBorder from "../UI/StarBorder";
import GradientText from "../UI/GradientText";
import Button from "../component/Button";

function AboutPage() {
  const sections = [
    { label: "Mission", anchor: "#mission", icon: Trophy },
    { label: "Vision", anchor: "#vision", icon: Star },
    { label: "Value", anchor: "#value", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar logo={logo} sections={sections} />

      {/* Hero Section */}
      <AnimatedContent direction="vertical" distance={100}>
        <main className="container md:justify-between  px-4 py-16 flex flex-col md:flex-row  justify-between">
          <div className="md:w-1/2 space-y-6 pt-6 text-center md:text-left">
            <SplitText
              text="Ifeanyi Godfrey Coaching Co."
              className="text-4xl md:text-5xl font-black text-indigo-900"
              delay={100}
            />
            <p className="text-xl text-gray-700 font-medium leading-relaxed">
              A transformative movement dedicated to empowering individuals to
              unleash their most extraordinary potential and live purposefully.
            </p>

            <Button link="/courses" text="Get Started" />
          </div>
          <FadeContent blur={true} duration={1500}>
            <div className="mt-8 md:mt-2 md:w-[600px] md:h-[500px] flex md:pl-20 ">
              <img
                src={a1}
                alt="Professional coach"
                className="rounded-2xl shadow-2xl transform transition-transform hover:scale-105"
              />
            </div>
          </FadeContent>
        </main>
      </AnimatedContent>

      {/* Value Proposition Section */}
      <AnimatedContent direction="horizontal" distance={150}>
        <section
          className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center "
          id="value"
        >
          <div className="md:w-1/2 mb-8 md:mb-0 md:mr-12">
            <FadeContent blur={true} duration={1500}>
              <img
                src={a2}
                alt="Presentation scene"
                className="rounded-2xl shadow-2xl transform transition-transform hover:scale-105"
              />
            </FadeContent>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-sm uppercase tracking-widest text-indigo-600 mb-3">
              Value Proposition
            </h2>
            <GradientText
              colors={["#0066FF", "#00FF99"]}
              animationSpeed={5}
              className="text-3xl md:text-4xl font-black mb-5"
            >
              Unlock Your Extraordinary Potential
            </GradientText>
            <p className="text-lg text-gray-700 leading-relaxed">
              We transcend conventional coaching by delivering
              hyper-personalized strategies that empower you to achieve peak
              performance, master time management, and gain crystal-clear
              clarity in your most ambitious pursuits.
            </p>
          </div>
        </section>
      </AnimatedContent>

      {/* Mission and Vision Section */}
      <AnimatedContent direction="vertical" distance={100}>
        <section className="container mx-auto px-4 py-16" id="mission">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-indigo-900 text-white rounded-2xl p-8 shadow-2xl transform transition-transform hover:scale-105">
              <h2
                className="text-sm uppercase tracking-widest text-yellow-400 mb-4"
                id="Vision"
              >
                The Vision
              </h2>
              <SplitText
                text="Creating Global Transformative Impact"
                className="text-3xl md:text-4xl font-black text-yellow-300 mb-6"
                delay={80}
              />
              <p className="text-lg font-medium leading-relaxed text-gray-200">
                Pioneering a global coaching revolution that empowers
                individuals and organizations to break through limitations,
                achieve unprecedented success, and generate meaningful,
                sustainable change worldwide.
              </p>
            </div>
            <div className="bg-indigo-900 text-white rounded-2xl p-8 shadow-2xl transform transition-transform hover:scale-105">
              <h2
                className="text-sm uppercase tracking-widest text-yellow-400 mb-4"
                id="vision"
              >
                The Mission
              </h2>
              <SplitText
                text="Amplify Discipline, Clarity, Impact"
                className="text-3xl md:text-4xl font-black text-yellow-300 mb-6"
                delay={80}
              />
              <p className="text-lg font-medium leading-relaxed text-gray-200">
                Empowering ambitious professionals with cutting-edge coaching
                methodologies, personalized strategies, and transformative tools
                to maximize productivity, cultivate unwavering discipline, and
                crystallize their most audacious goals.
              </p>
            </div>
          </div>
        </section>
      </AnimatedContent>

      <Footer />
    </div>
  );
}

export default AboutPage;
