import React from "react";
import "./AttentionStyles.css";

import { Link } from "react-router-dom";

const Huomio = () => {
  return (
    <div className="attention">
      <h2>ATTENTION!</h2>
      <p>Lorem ipsum dot si amet</p>
      <p>Lorem ipsum dot si amet</p>

      <Link to="/contact">
        <button className="btn">Contact and ask for valuation!</button>
      </Link>
    </div>
  );
};

export default Huomio;
