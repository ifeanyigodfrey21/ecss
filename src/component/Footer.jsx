import React from "react";

function Footer() {
  return (
    <div>
      <div className="bg-yellow-400 p-6 text-center">
        <h2 className="text-lg font-bold">Reach Us Directly</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <input
          type="email"
          placeholder="Email"
          className="mt-4 p-2 w-64 bg-blue-900 text-white rounded"
        />
      </div>
      <div className="bg-gray-100 h-4"></div>
      <footer className="bg-black text-white p-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">LOGO</h1>
          </div>
          <div className="flex flex-col md:flex-row text-center md:text-left">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="font-bold mb-2">Company</h3>
              <ul>
                <li>About Us</li>
                <li>Why Us</li>
                <li>Programs</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="font-bold mb-2">Solutions</h3>
              <ul>
                <li>Courses</li>
                <li>Workshop</li>
                <li>Coaching</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Follow Us</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="text-white">
                  <i className="fab fa-pinterest"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-xing"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center md:text-left">
          <p className="text-sm">
            &copy; 2024 Fanny Godfrey Coaching Co., All Rights Reserved
          </p>
          <p className="text-sm mt-2 md:mt-0 md:absolute md:right-8">
            Privacy Policy
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
