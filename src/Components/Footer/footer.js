import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const footer = () => {
  return (
    <footer id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-links">
            <a href="/">&bull; Support</a>
            <a href="/">&bull; About</a>
            <a href="/">&bull; Learn</a>
            <a href="/">&bull; Hosting</a>
            <a href="/">&bull; Messenger</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Support</h4>
          <div className="footer-links">
            <a href="/">&bull; Support</a>
            <a href="/">&bull; About</a>
            <a href="/">&bull; Learn</a>
            <a href="/">&bull; Hosting</a>
            <a href="/">&bull; Messenger</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact u-text-small">
            <p>
              <FaMapMarkerAlt /> &nbsp; Address: United States.
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +1230 123 1231.
            </p>
            <p>
              <FaFax /> &nbsp; Fax: +12342762178
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: info@socialx.com
            </p>
            <p>
              <FaGlobe /> &nbsp; Website: www.socialx.com
            </p>
          </div>
        </div>
        <div className="footer-box logos">
          <img src={logo} alt="logo" />
          <p className="u-small-text">&copy; Copyright 2022. Tahreem Zafar.</p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
