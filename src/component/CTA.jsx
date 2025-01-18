import React from "react";
import H9 from "../assets/Hompage/h9.png";
import H10 from "../assets/Hompage/h10.png";
import H11 from "../assets/Hompage/h11.png";
import { Star, StarHalf, Clock, Users, Award } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const TestimonialCard = ({ image, name, text, rating }) => (
  <div className="w-full max-w-sm bg-white rounded-lg shadow-md transition-all hover:shadow-lg p-6">
    <div className="flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-indigo-100"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 text-center mb-4 leading-relaxed">{text}</p>
      <div className="flex gap-1 text-yellow-400">
        {[...Array(Math.floor(rating))].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-current" />
        ))}
        {rating % 1 !== 0 && <StarHalf className="w-5 h-5 fill-current" />}
      </div>
    </div>
  </div>
);

function CTA() {
  const testimonials = [
    {
      image: H9,
      name: "Godfrey Johnson",
      text: "I used to struggle with time management and found myself constantly overwhelmed. Through this course, I learned techniques to prioritize.",
      rating: 4.5,
    },
    {
      image: H10,
      name: "Sarah Williams",
      text: "The strategies taught in this course transformed how I manage my daily tasks. I'm now more productive than ever before.",
      rating: 5,
    },
    {
      image: H11,
      name: "Michael Chen",
      text: "This program helped me find the perfect balance between work and personal life. The techniques are practical and easy to implement.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-indigo-900 text-white w-full py-12 px-4 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="flex items-center gap-2 text-yellow-400 mb-2">
              <Clock className="w-6 h-6" />
              <Users className="w-6 h-6" />
              <Award className="w-6 h-6" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
              Ready to Achieve More? Explore Our Time Management Tips!
            </h1>
            <Link
              to="/signUp"
              className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold text-lg px-8 py-3 rounded-lg transition-colors"
            >
              Register now
            </Link>
            <p className="text-indigo-200">
              Register now to unlock premium features
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CTA;
