import React, { useState } from "react";
import {
  Menu,
  X,
  CreditCard,
  ShoppingBag,
  Tag,
  ChevronRight,
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  Map,
  Hash,
} from "lucide-react";

function PaymentPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const orderItems = [
    {
      title: "Peak Performance Mastery Course",
      price: "NGN 50,000.00",
      image: "/api/placeholder/100/100",
    },
    {
      title: "Peak Productivity Challenge",
      price: "NGN 50,000.00",
      image: "/api/placeholder/100/100",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md hover:bg-gray-100"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-600" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-600" />
                )}
              </button>
              <h1 className="ml-2 text-xl font-bold text-gray-700 flex items-center">
                <CreditCard className="h-6 w-6 mr-2 text-blue-600" />
                COACHING
              </h1>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Why us
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Courses
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </a>
            </nav>

            <div className="flex space-x-4">
              <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Login
              </button>
              <button className="hidden md:block bg-yellow-400 text-gray-700 px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors">
                Sign up
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                Why us
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                Courses
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                About
              </a>
              <button className="w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                Login
              </button>
              <button className="w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                Sign up
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Details */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-700 mb-6 flex items-center">
              <CreditCard className="h-6 w-6 mr-2 text-blue-600" />
              Payment Details
            </h2>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-gray-600 mb-2 flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-600" />
                081 246 802 88 | 080 644 008 56
              </p>
              <p className="text-gray-600 flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-600" />
                harveypendry23@gmail.com
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-600 mb-2  items-center">
                  <User className="h-4 w-4 mr-2 text-gray-400" />
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter Full Name"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-2 flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-gray-400" />
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter Email Address"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-2 flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-gray-400" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter Phone Number"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-2 flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                  Country
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Choose Country"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-600 mb-2 flex items-center">
                    <Building className="h-4 w-4 mr-2 text-gray-400" />
                    City
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter City"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2 flex items-center">
                    <Map className="h-4 w-4 mr-2 text-gray-400" />
                    State
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter State"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2 flex items-center">
                    <Hash className="h-4 w-4 mr-2 text-gray-400" />
                    Zip Code
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter Zip Code"
                  />
                </div>
              </div>

              <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 text-gray-600">
                  I have agreed with the terms and conditions
                </label>
              </div>
            </form>
          </div>

          {/* Order Review */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-700 mb-6 flex items-center">
              <ShoppingBag className="h-6 w-6 mr-2 text-blue-600" />
              Review your Order
            </h2>

            <div className="space-y-4">
              {orderItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={`Image of ${item.title}`}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-gray-700 font-medium">{item.title}</p>
                    <p className="text-gray-600">{item.price}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              ))}
            </div>

            <div className="mt-8">
              <label className="block text-gray-600 mb-2 flex items-center">
                <Tag className="h-4 w-4 mr-2 text-gray-400" />
                Discount Code
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  className="flex-1 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter discount code"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Apply
                </button>
              </div>
            </div>

            <div className="mt-8 space-y-3 bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between text-gray-600">
                <span>Items</span>
                <span className="font-medium">2</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Discount</span>
                <span className="font-medium text-green-600">10%</span>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <div className="flex justify-between text-gray-700 font-bold">
                  <span>Total</span>
                  <span>NGN 90,000.00</span>
                </div>
              </div>
            </div>

            <button className="mt-8 w-full bg-yellow-400 text-gray-700 py-4 rounded-lg text-lg font-bold hover:bg-yellow-500 transition-colors flex items-center justify-center">
              <CreditCard className="h-5 w-5 mr-2" />
              Complete Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
