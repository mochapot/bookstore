import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="colophon" className="site-footer">
      <div className="container">
        <div className="site-info">
          <span className="footer-title">
            <Link to="/" className="footer-title-link"></Link>
          </span>
          <span className="footer-description">© KYOBO BOOK CENTRE</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
