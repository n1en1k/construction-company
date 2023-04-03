import React from "react";
import "./FormStyles.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Phone</label>
        <input type="phone"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Info</label>
        <textarea rows="6" placeholder="Type short message here" />
        <button className="btn">Send</button>
      </form>
    </div>
  );
};

export default Form;
