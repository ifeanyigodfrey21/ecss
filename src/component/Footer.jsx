import React from "react";
import logo from "../assets/AboutPage/Logo.png";
import {
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";

function Footer() {
  const navLinks = {
    Company: ["About Us", "Why Us", "Programs", "Contact"],
    Solutions: ["Courses", "Workshop", "Coaching"],
  };

  return (
    <div className="w-full">
      {/* Newsletter Section */}
      <div className="bg-yellow-400 py-12 px-4 slide-left">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-indigo-900 mb-2">
            Reach Us Directly
          </h2>
          <p className="text-indigo-900 mb-6">
            Get in touch with us for any inquiries or questions
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="relative flex-1 max-w-md">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-900 transition-all"
              />
            </div>
            <button className="bg-indigo-900 text-white px-6 py-3 rounded-lg hover:bg-indigo-800 transition-colors flex items-center gap-2">
              Subscribe
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 h-1"></div>

      {/* Main Footer */}
      <footer className="bg-black text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo Section */}
            <div className="flex flex-col items-center md:items-start">
              <img
                src={logo}
                alt="ECSS Logo"
                className="w-32 h-auto bg-white rounded-sm p-2 mb-4"
              />
              <p className="text-gray-400 text-sm mt-4 text-center md:text-left">
                Empowering individuals through effective time management and
                personal development.
              </p>
            </div>

            {/* Navigation Sections */}
            {Object.entries(navLinks).map(([title, links]) => (
              <div key={title} className="text-center md:text-left">
                <h3 className="font-bold text-lg mb-4">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-yellow-400 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social Media Section */}
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Fanny Godfrey Coaching Co.,
                All Rights Reserved
              </p>
              <div className="mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  Privacy Policy
                </a>
                <span className="mx-2 text-gray-600">|</span>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
