import React from "react";
import './footer.css'
const footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title"></h1>
        <ul className="footer_list">
          <li>
            <a href="#home" className="footer_link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer_link">
              Projects
            </a>
          </li>
        </ul>
        <div className="footer_social">
          <a
            href="https://www.linkedin.com/"
            rel="noreferrer"
            className="footer_social_link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/mouad-dadda"
            rel="noreferrer"
            className="footer_social_link"
            target="_blank"
          >
            <i className="bx bxl-github "></i>
          </a>

          <a
            href="https://twitter.com/"
            rel="noreferrer"
            className="footer_social_link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer_copy">
        &#169;Copyrights. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default footer;
