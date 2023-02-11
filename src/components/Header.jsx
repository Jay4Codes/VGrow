import React from "react";
import "./Header.css";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div>
      <header
        className="header-area header-sticky wow slideInDown"
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="#top" className="logo">
                  <img src={logo} />
                </a>
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#top" className="active">
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#about">About</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#crop">Crop Analysis</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#fert">Fertilizer Choice</a>
                  </li>
                  <li>
                    <div id="google_translate_element"></div>
                  </li>
                  <li className="scroll-to-section">
                    <div className="main-red-button-hover">
                      <a href="#contact">Contact Us Now</a>
                    </div>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
