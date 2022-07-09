import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import Newsletter from "./components/Newsletter";
// import Portfolio from "./components/Portfolio";
// import Products from "./components/Products";
import ScrollToTop from "./components/ScrollToTop";
// import Services from "./components/Services";
// import Testimonials from "./components/Testimonials";
import Testimonial from "./components/Testimonial";
import Menue from "./components/Menue";

// import scrollreveal from "scrollreveal";
import Contact from "./components/Contact";
import About from "./components/About";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <About />
      {/* <Services /> */}
      {/* <Portfolio /> */}
      <Menue />
      <Testimonial />
      {/* <Newsletter /> */}
      <Contact />
      <Footer />
    </>
  );
}