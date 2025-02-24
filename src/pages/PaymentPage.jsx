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
  Trophy,
  Star,
  Users,
} from "lucide-react";
import logo from "../assets/AboutPage/Logo.png";
import Navbar from "../component/Navbar";
import Button from "../component/Button";

// Reactbit UI Components
import SplitText from "../UI/SplitText";
import AnimatedContent from "../UI/AnimatedContent";
import FadeContent from "../UI/FadeContent";
import Magnet from "../UI/Magnet";
import StarBorder from "../UI/StarBorder";
import GradientText from "../UI/GradientText";
import ShinyText from "../UI/ShinyText";

function PaymentPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const orderItems = [
    {
      title: "Peak Performance Mastery Course",
      price: "NGN 50,000.00",
    },
    {
      title: "Peak Productivity Challenge",
      price: "NGN 50,000.00",
    },
  ];

  const sections = [
    { label: "Why Us", anchor: "#why-us", icon: Trophy },
    { label: "Courses", anchor: "#courses", icon: Star },
    { label: "About", anchor: "#about", icon: Users },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gray-50">
      <Navbar logo={logo} sections={sections} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatedContent direction="vertical" distance={100}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Payment Details */}
            <FadeContent blur={true} duration={1500}>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <SplitText
                  text="Payment Details"
                  className="text-2xl font-bold text-gray-700 mb-6 flex items-center"
                  delay={100}
                />

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <ShinyText
                    text="09136829288 | 08084469895"
                    className="text-gray-600 mb-2 flex items-center"
                  />
                  <ShinyText
                    text="ifeanyigodfey22@gmail.com"
                    className="text-gray-600 flex items-center"
                  />
                </div>

                <form className="space-y-6">
                  {/* Form inputs with animated labels */}
                  {[
                    "Full Name",
                    "Email Address",
                    "Phone Number",
                    "Country",
                  ].map((label, index) => (
                    <div key={label}>
                      <SplitText
                        text={label}
                        className=" text-gray-600 mb-2 flex items-center"
                        delay={50 * index}
                      />
                      <Magnet magnetStrength={30}>
                        <input
                          type={
                            label === "Email Address"
                              ? "email"
                              : label === "Phone Number"
                              ? "tel"
                              : "text"
                          }
                          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder={`Enter ${label}`}
                        />
                      </Magnet>
                    </div>
                  ))}

                  {/* Address Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {["City", "State", "Zip Code"].map((label) => (
                      <div key={label}>
                        <SplitText
                          text={label}
                          className="block text-gray-600 mb-2 flex items-center"
                          delay={80}
                        />
                        <Magnet magnetStrength={30}>
                          <input
                            type="text"
                            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder={`Enter ${label}`}
                          />
                        </Magnet>
                      </div>
                    ))}
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
            </FadeContent>

            {/* Order Review */}
            <FadeContent blur={true} duration={1500}>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <GradientText
                  colors={["#4079ff", "#40ffaa"]}
                  animationSpeed={3}
                  className="text-2xl font-bold mb-6 flex items-center"
                >
                  Review your Order
                </GradientText>

                <div className="space-y-4">
                  {orderItems.map((item, index) => (
                    <Magnet key={index} magnetStrength={20}>
                      <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                        {/* <img
                          src={item.image}
                          alt={`Image of ${item.title}`}
                          className="w-20 h-20 rounded-lg object-cover"
                        /> */}
                        <div className="flex-1">
                          <p className="text-gray-700 font-medium">
                            {item.title}
                          </p>
                          <p className="text-gray-600">{item.price}</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </Magnet>
                  ))}
                </div>

                <div className="mt-8">
                  <SplitText
                    text="Discount Code"
                    className="text-gray-600 mb-2 flex items-center"
                    delay={100}
                  />
                  <div className="flex space-x-2">
                    <Magnet magnetStrength={30}>
                      <input
                        type="text"
                        className="flex-1 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter discount code"
                      />
                    </Magnet>
                    <Button text="Apply" />
                  </div>
                </div>

                <div className="mt-8 space-y-3 bg-gray-50 p-4 rounded-lg">
                  {["Items", "Discount", "Total"].map((label, index) => (
                    <div
                      key={label}
                      className={`flex justify-between text-gray-${
                        label === "Total" ? "700 font-bold" : "600"
                      }`}
                    >
                      <span>{label}</span>
                      <ShinyText
                        text={
                          label === "Items"
                            ? "2"
                            : label === "Discount"
                            ? "10%"
                            : "NGN 90,000.00"
                        }
                        disabled={label === "Total"}
                      />
                    </div>
                  ))}
                </div>

                <Button className="" text="Complete Purchase" />
              </div>
            </FadeContent>
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
}

export default PaymentPage;
