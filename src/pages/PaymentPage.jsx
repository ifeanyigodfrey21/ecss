import React from "react";

function PaymentPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white w-full max-w-screen mx-auto p-8 md:p-12 lg:p-16 shadow-lg rounded-lg">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div className="bg-gray-300 p-2 rounded-md">
              <i className="fas fa-bars text-gray-600"></i>
            </div>
            <h1 className="ml-4 text-xl font-bold text-gray-700">COACHING</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700">
              Why us
            </a>
            <a href="#" className="text-gray-700">
              Courses
            </a>
            <a href="#" className="text-gray-700">
              About
            </a>
          </nav>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Login
            </button>
            <button className="bg-yellow-400 text-gray-700 px-4 py-2 rounded-md">
              Sign up
            </button>
          </div>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Payment Details
            </h2>
            <p className="text-gray-600 mb-2">
              Phone Number: 081 246 802 88 | 080 644 008 56
            </p>
            <p className="text-gray-600 mb-4">
              Email: harveypendry23@gmail.com
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter Full Name"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter Email Address"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Phone Number</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Country</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Choose Country"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-600 mb-1">City</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter City"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">State</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter State"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">Zip Code</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter Zip Code"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <label className="text-gray-600">
                  I have agreed with the terms and conditions
                </label>
              </div>
            </form>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Review your Order
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src="https://placehold.co/100x100"
                  alt="Image of Peak Performance Mastery Course"
                  className="w-16 h-16 rounded-md"
                />
                <div>
                  <p className="text-gray-700">
                    Peak Performance Mastery Course
                  </p>
                  <p className="text-gray-600">NGN 50,000.00</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src="https://placehold.co/100x100"
                  alt="Image of Peak Productivity Challenge"
                  className="w-16 h-16 rounded-md"
                />
                <div>
                  <p className="text-gray-700">Peak Productivity Challenge</p>
                  <p className="text-gray-600">NGN 50,000.00</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <label className="block text-gray-600 mb-1">Discount Apply</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter discount code"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                  Apply
                </button>
              </div>
            </div>
            <div className="mt-8 space-y-2">
              <div className="flex justify-between text-gray-700">
                <span>Items</span>
                <span>2</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Discount</span>
                <span>10%</span>
              </div>
              <div className="flex justify-between text-gray-700 font-bold">
                <span>Total</span>
                <span>NGN 90,000.00</span>
              </div>
            </div>
            <button className="mt-8 w-full bg-yellow-400 text-gray-700 py-3 rounded-md text-lg font-bold">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
