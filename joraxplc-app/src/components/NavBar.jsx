import React, { useState } from "react";
import Menu from "./Menu";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNavMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div>
      <div>
        <div className="open-nav-container">
          <Menu />
        </div>
        <div className="open-toggle-btn toggle-btn">
          <RiMenu3Line onClick={toggleNavMenu} className="open-btn-icon" />
        </div>
      </div>
      {toggleMenu && (
        <div className="close-nav-container">
          <div className="close-toggle-btn toggle-btn">
            <RiCloseLine className="close-btn-icon" onClick={toggleNavMenu} />
          </div>
          <div>
            <Menu removeMenu={toggleNavMenu} />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
