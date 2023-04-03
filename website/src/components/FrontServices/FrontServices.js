import React from "react";
import "./FrontServicesStyles.css";

import { Link } from "react-router-dom";

import Img1 from "../../assets/frontservices/construction1.jpg";
import Img2 from "../../assets/frontservices/construction2.jpg";

const EtusivuPalvelut = () => {
  return (
    <div className="serviceslist">
      <div className="left">
        <h1>Services in a nutshell</h1>

        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>

        <Link to="/servides">
          <button className="btn">Read more</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={Img1} className="img" alt="img" />
          </div>
          <div className="image-stack bottom">
            <img src={Img2} className="img" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EtusivuPalvelut;
