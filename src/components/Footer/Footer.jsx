import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          {/* Make the logo clickable to go to the header (top of the page) */}
          <a href="/">
            <img src={assets.logo} alt="Logo" />
          </a>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
            eum.
          </p>
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#delivery">Delivery</a>
            </li>
            <li>
              <a href="#privacy">Privacy policy</a>
            </li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>
              <a href="mailto:vikkibanka73@gmail.com">vikkibanka73@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
      Copyright 2024 © <a href="https://www.tomato.com" target="_blank" rel="noopener noreferrer">Tomato.com</a> - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
