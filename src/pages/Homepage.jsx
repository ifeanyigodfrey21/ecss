import Hero from "../component/Hero";
import About from "../component/About";
import CTA from "../component/CTA";
import Why from "../component/Why";
import Footer from "../component/Footer";
// import SplashCursor from "../UI/TextAnimations/SplashCursor copy";

function Homepage() {
  return (
    <>
      {/* <SplashCursor /> */}
      <Hero />
      <About />
      <Why />
      <CTA />
      <Footer />
    </>
  );
}

export default Homepage;
