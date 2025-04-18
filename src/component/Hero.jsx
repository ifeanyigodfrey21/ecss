import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import H1 from "../assets/Hompage/H12.png";
import GradientText from "../UI/TextAnimations/GradientText/GradientText";
import Button from "./Button";
import logo from "../assets/AboutPage/Logo.png";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/home" },
    { name: "Product", href: "/product" },
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Payment", href: "/payment" },
  ];

  return (
    <>
      <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-lg z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                className="text-xl sm:text-2xl font-bold text-[#2B2B5A] hover:opacity-80 transition-opacity"
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="w-10 h-10 sm:w-20 sm:h-12"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm lg:text-base text-[#2B2B5A] hover:opacity-80 transition-opacity duration-300 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Register Button */}
            <div className="hidden md:block">
              <Link
                to="/signUp"
                className="px-4 sm:px-6 py-2 text-sm sm:text-base bg-[#2B2B5A] text-white rounded-full hover:opacity-90 transition-opacity duration-300 shadow-md"
              >
                Register now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#2B2B5A] hover:opacity-80 focus:outline-none transition-opacity"
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute inset-x-0 top-full bg-white shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium text-[#2B2B5A] hover:bg-slate-50 hover:opacity-80 rounded-md transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/signUp"
                  className="block w-full text-center px-4 py-2 bg-[#2B2B5A] text-white rounded-full hover:opacity-90 transition-opacity duration-300 shadow-md"
                >
                  Register now
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div
        className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${H1})` }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Hero Content */}
        <div className="relative container mx-auto px-4  sm:px-6 xs:pt-10 lg:px-8 text-center text-white">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={true}
            className="custom-class p-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Balance Work and{" "}
              <span className="text-yellow-500 bg-white/90 backdrop-blur-sm animate__animated animate__rotateIn rounded-md px-2 inline-block my-2">
                Achieve Goals
              </span>{" "}
              <br className="hidden sm:block" />
              with E-Coaching Solutions
            </h1>
          </GradientText>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto">
            The Ifeanyi Godfrey co- a movement to empower people everywhere to
            live their best lives.
          </p>

          <Button text="Log in" link="/login" />
        </div>
      </div>
    </>
  );
};

export default Hero;
