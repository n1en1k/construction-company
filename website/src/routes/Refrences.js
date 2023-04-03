import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroImage from "../components/HeroImage/HeroImage";
import RefrenceCard from "../components/RefrenceCard/RefrenceCard";

const Refrences = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="REFRENCES" />
      <RefrenceCard />
      <Footer />
    </div>
  );
};

export default Refrences;
