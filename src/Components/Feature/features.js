import React from "react";
import "./features.css";
import { BsHexagon } from "react-icons/bs";

const features = ({ icon, heading, text }) => {
  return (
    <div className="feature">
      <div className="feature-icon">
        <BsHexagon color="orangered" size={55} />
        <div className="inner-icon">{icon}</div>
      </div>
      <div className="feature-text">
        <h3>{heading}</h3>
        <p className="u-text-small">{text}</p>
      </div>
    </div>
  );
};

export default features;
