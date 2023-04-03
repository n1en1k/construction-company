import React from "react";
import "./FooterStyles.css";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import logo from "../../assets/partners/logo.png";
// import AAA from "../../assets/rating/aaa.jpg";
// import Logo1 from "../../assets/rating/1_logo.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
            <div>
              <p>Address 15,</p>
              <h4>12345 City</h4>
            </div>
          </div>
          <div className="phone">
            <h4>Firstname Lastname</h4>
          </div>
          <div className="phone">
            <h5>
              <FaPhone
                size={16}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              012 345 6789
            </h5>
          </div>
          <div className="email">
            <h5>
              <FaMailBulk
                size={16}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              firstname.lastname (a) company.com
            </h5>
          </div>
          <div className="phone">
            <h4>Firstname Lastname</h4>
          </div>
          <div className="phone">
            <h5>
              <FaPhone
                size={16}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              012 345 6789
            </h5>
          </div>
          <div className="email">
            <h5>
              <FaMailBulk
                size={16}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              firstname.lastname (a) company.com
            </h5>
          </div>
        </div>
        <div className="right">
          <h4>Lorem ipsum dot si amet!</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="social">
            <a href="/#" target="_blank">
              <FaFacebook
                size={30}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
            </a>
            <a href="/#" target="_blank">
              <FaTwitter
                size={30}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
            </a>
            <a href="/#" target="_blank">
              <FaInstagram
                size={30}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
            </a>
            <a href="/#" target="_blank">
              <FaLinkedin
                size={30}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
            </a>
          </div>
          <div className="partners">
            <img className="partners-img" src={logo} alt="logo" />
            <img className="partners-img" src={logo} alt="logo" />
            <img className="partners-img" src={logo} alt="logo" />
            <img className="partners-img" src={logo} alt="Toblogoox" />
          </div>
          {/*
          <div className="rating">
            <img className="rating-img" src={AAA} alt="AAA" />
            <img className="rating-img" src={Logo1} alt="1_Logo" />
          </div>
        */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
