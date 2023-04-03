import React, { Component } from "react";
import "./HeroImageStyles.css";

class HeroImage extends Component {
  render() {
    return (
      <div className="hero-img">
        <div className="heading">
          <h1>{this.props.heading}</h1>
        </div>
      </div>
    );
  }
}

export default HeroImage;
