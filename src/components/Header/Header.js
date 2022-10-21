import React from "react";
import logo from "../../images/fitness-logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <img src={logo} alt="fitness-logo" />
        <h1>Dynamic Health And Fitness Club</h1>

        <div className="a-btn">
          <a href="./home">Home</a>
          <a href="./about">About</a>
          <a href="./QnA">QnA</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
