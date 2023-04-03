import React from "react";
import Footer from "../components/Footer/Footer";
import HeroImage from "../components/HeroImage/HeroImage";
import Navbar from "../components/Navbar/Navbar";
import ServicesSection from "../components/Services/Services";

const Services = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="SERVICES" />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Services;
