import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import TestimonialPage from "./pages/TestimonialPage";
import Dashboardage from "./pages/Dashboardage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/Testimonial" element={<TestimonialPage />} />
          <Route path="/dashboard" element={<Dashboardage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route
            path="*"
            element={
              <div className="text-5xl justify-center items-center flex ">
                404 Not Found
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
