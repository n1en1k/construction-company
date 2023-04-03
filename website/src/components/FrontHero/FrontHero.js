import React from "react";
import { Link } from "react-router-dom";
import "./FrontHeroStyles.css";
import heroImg from "../../assets/heroImg.jpg";

const FrontHero = () => {
  return (
    <div className="hero">
      <img src={heroImg} alt="" id="heroImg" />
      <div className="content">
        <h1>Lorem ipsum dot si amet</h1>
        <p>Lorem ipsum, dot si amet!</p>

        <div>
          <Link to="/contact" className="btn">
            Contact
          </Link>
          <Link to="/services" className="btn btn-light">
            Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FrontHero;
