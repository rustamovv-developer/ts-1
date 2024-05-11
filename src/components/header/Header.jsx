import React, { memo } from "react";
import img from "../../assets/images/header-img.png";

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="header-info">
        <div className="container">
          <div className="header-row">
            <div className="header-left">
              <h2 className="header-title">Discover Most Suitable Watches</h2>
              <p className="header-text">
                Find the best, reliable, and cheap smart watches here. We focus
                on product quality. Here you can find smart watches of almost
                all brands. So why you are waiting? Just order now!
              </p>
              <div className="header-bottom">
                <i className="fa-solid fa-magnifying-glass search-i"></i>
                <input
                  type="text"
                  placeholder="Find the best brands"
                  className="header-input"
                />
                <button className="header-btn">Search</button>
              </div>
            </div>
            <img src={img} alt="header" className="header-img" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
