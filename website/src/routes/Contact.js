import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroImage from "../components/HeroImage/HeroImage";
import Form from "../components/Form/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="CONTACT" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
