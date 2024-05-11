import React from "react";
import { memo } from "react";
import logo from "../../assets/images/logo.png";

const Nav = () => {
  return (
    <nav className="nav">
      <nav className="nav" id="navbar">
        <div className="container">
          <div className="nav-center">
            <div className="nav-info">
              <div className="nav-left">
                <img src={logo} alt="logo" className="nav-img" />
                <h2 className="nav-title">Mohid</h2>
              </div>
              <ul className="nav-list">
                <li className="nav-item">
                  <a href="#home" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#brands" className="nav-link">
                    Brands
                    <i className="fa-solid fa-chevron-down down"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#products" className="nav-link">
                    Recent Products
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className="nav-link">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#about" className="nav-link">
                    About
                  </a>
                </li>
              </ul>
              <div className="nav-right">
                <i className="fa-solid fa-magnifying-glass fa-beat nav-icon"></i>
                <i className="fa-solid fa-user fa-beat nav-icon"></i>
                <i className="fa-solid fa-cart-shopping fa-beat nav-icon">
                  <div className="shop-box">1</div>
                </i>
              </div>
            </div>
            <button className="open" id="navbar-open">
              <i className="fa-solid fa-bars open-icon"></i>
            </button>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default memo(Nav);
