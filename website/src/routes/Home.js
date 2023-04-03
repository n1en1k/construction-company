import React from "react";
import Navbar from "../components/Navbar/Navbar";
import FrontHero from "../components/FrontHero/FrontHero";
import Footer from "../components/Footer/Footer";
import FrontServices from "../components/FrontServices/FrontServices";
import Attention from "../components/Attention/Attention";

const Home = () => {
  return (
    <div>
      <Navbar />
      <FrontHero />
      <FrontServices />
      <Attention />
      <Footer />
    </div>
  );
};

export default Home;
