import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
// import Logo from "../images/Jorax[150x40]-01.png";
import Logo from "../images/jorax-logo.svg";

const Header = (props) => {
  return (
    <header className="header">
      <div className="header-container">
        <div>
          <div className="site-logo">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
        </div>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
