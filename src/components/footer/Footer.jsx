import React from "react";
import { memo } from "react";
import img from "../../assets/images//footer-img.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <section id="contact">
          <div className="container">
            <div className="footer-info">
              <div className="footer-box">
                <h2 className="footer-title">Subscribe To Newsletter</h2>
                <p className="footer-text">
                  Get free guide about smart watches daily.
                </p>
                <div className="subscribe">
                  <input
                    type="text"
                    placeholder="Enter Email Address"
                    className="footer-input"
                  />
                  <button className="footer-btn">Subscribe</button>
                </div>
              </div>
              <img src={img} alt="footer-img" className="footer-img" />
            </div>
          </div>
        </section>
      </footer>
      <div className="adv">
        <p className="adv-text">Copyright @ 2022 | Mohid</p>
      </div>
    </>
  );
};

export default memo(Footer);
