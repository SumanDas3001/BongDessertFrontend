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
import React from "react";
import cakeShopData from "./cakeShopData.json";



export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar data={cakeShopData.main} />
      <Hero data={cakeShopData.main} />
      <About />
      <Menue />
      <Testimonial data={cakeShopData.testimonials} />
      <Contact />
      <Footer data={cakeShopData.main} />
    </>
  );
}
