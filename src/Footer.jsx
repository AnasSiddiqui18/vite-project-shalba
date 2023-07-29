import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer-content">
        <div className="logo">
          <img src="/assets/images/logo.png" alt="#" />
        </div>

        <div className="footer-links">
          <nav className="footer-nav">
            <ul>
              <li>About Us</li>
              <li>Tokenomics</li>
              <li>Roadmap</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
