import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import ClientReviews from "./components/ClientReviews";
import EyeFooter from "./components/EyeFooter";
import NavigateToHome from "./components/NavigateToHome";

//NavBar Components
import AboutUs from "./components/NavbarComponents/AboutUs";
import ContactUs from "./components/NavbarComponents/ContactUs";
import Insights from "./components/NavbarComponents/Insights";
import OurWork from "./components/NavbarComponents/OurWork";
import Services from "./components/NavbarComponents/Services";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <Router>
      <div className="w-full min-h-screen text-white bg-zinc-900">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LandingPage />
                <Marquee />
                <About />
                <Eyes />
                <Featured />
                <ClientReviews />
                <Cards />
                <EyeFooter />
                <Footer />
              </>
            }
          />
          <Route path="/home" element={<NavigateToHome hash="#" />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/our-work" element={<OurWork />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
