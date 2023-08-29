import React from "react";
import { Link } from "react-router-dom";
// import { IoSchool } from "react-icons/io";
// import { SiHomeadvisor } from "react-icons/si";
import { FaHome } from "react-icons/fa";

function Menu({ removeMenu }) {
  return (
    <nav className="nav-menu">
      <ul className="list-menu">
        <li>
          <Link to="/" className="active" onClick={removeMenu}>
            {/* <FaHome /> */}
            home
          </Link>
        </li>
        <li>
          <Link to={"aboutus"} target="_blank" onClick={removeMenu}>
            about us
          </Link>
        </li>
        <li>
          <Link to="/services" target="_blank" onClick={removeMenu}>
            services
          </Link>
        </li>
        <li>
          <Link to="/pharmacist" onClick={removeMenu}>
            pharmacist
          </Link>
        </li>
        <li>
          <Link to="/products" onClick={removeMenu}>
            products
          </Link>
        </li>
        <li>
          <Link to="/testimonials" onClick={removeMenu}>
            testimonials
          </Link>
        </li>
        <li>
          <Link to="/contactus" onClick={removeMenu}>
            contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
