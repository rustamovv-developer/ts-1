import React, { memo } from "react";
import brand1 from "../../assets/images/brands1.png";
import brand2 from "../../assets/images/brands2.png";
import brand3 from "../../assets/images/brands3.png";

const Brands = () => {
  return (
    <section id="brands" className="brands">
      <div className="container">
        <div className="brands-info">
          <div className="brands-card">
            <img src={brand1} alt="brands1" className="brands-img" />
            <div className="brands-box">
              <h2 className="brands-title">Apple</h2>
              <p className="brands-text">
                Apple is one of the most famous smart watches providing company.
              </p>
            </div>
          </div>
          <div className="brands-card">
            <img src={brand2} alt="brands2" className="brands-img" />
            <div className="brands-box">
              <h2 className="brands-title">Xiaomi</h2>
              <p className="brands-text">
                Xiaomi smart watches are produced by MI company.
              </p>
            </div>
          </div>
          <div className="brands-card">
            <img src={brand3} alt="brands3" className="brands-img" />
            <div className="brands-box">
              <h2 className="brands-title">FitBit</h2>
              <p className="brands-text">
                FitBit smart watches are best for there health and fitness
                features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Brands);
