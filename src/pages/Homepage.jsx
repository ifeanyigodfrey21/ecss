import React from "react";
import Hero from "../component/Hero";
import About from "../component/About";
import CTA from "../component/CTA";
import Why from "../component/Why";
import Footer from "../component/Footer";

function Homepage() {
  return (
    <>
      <Hero />
      <About />
      <Why />
      <CTA />
      <Footer />
    </>
  );
}

export default Homepage;
