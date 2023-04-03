import React from "react";
//import { Link } from "react-router-dom";
import "./RefrenceCardStyles.css";
import Img1 from "../../assets/Refrences/refrence1.jpg";

const Refrence = () => {
  return (
    <div className="refrence">
      <div className="card-container">
        <div className="card">
          <img className="refrence-img" src={Img1} alt="refrence" />
          <p>Lorem ipsum dot si amet.</p>
        </div>

        <div className="card">
          <img className="refrence-img" src={Img1} alt="refrence" />
          <p>Lorem ipsum dot si amet.</p>
        </div>

        <div className="card">
          <img className="refrence-img" src={Img1} alt="refrence" />
          <p>Lorem ipsum dot si amet.</p>
        </div>

        <div className="card">
          <img className="refrence-img" src={Img1} alt="refrence" />
          <p>Lorem ipsum dot si amet.</p>
        </div>

        <div className="card">
          <img className="refrence-img" src={Img1} alt="refrence" />
          <p>Lorem ipsum dot si amet.</p>
        </div>

        <div className="card">
          <img className="refrence-img" src={Img1} alt="refrence" />
          <p>Lorem ipsum dot si amet.</p>
        </div>
      </div>
    </div>
  );
};

export default Refrence;
