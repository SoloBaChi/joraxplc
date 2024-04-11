import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Header = ({ cartItem }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div>
          <div className="site-logo">
            <Link to="/">
              <img src={`/assets/images/jorax-logo.svg`} alt="logo" />
            </Link>
          </div>
        </div>
        <NavBar cartItem={cartItem} />
      </div>
    </header>
  );
};

export default Header;
