import React from "react";
import { Link } from "react-router-dom";
import ScrollLink from "./ScrollLink";
import Cart from "./shared/icons/Cart";

function Menu({ closeMenu }) {
  return (
    <nav className="nav-menu">
      <ul className="list-menu">
        <li>
          <Link to="/" className="active" onClick={closeMenu}>
            {/* <FaHome /> */}
            home
          </Link>
        </li>
        <ScrollLink to={"aboutus"}>
          <li onClick={closeMenu}>about us</li>
        </ScrollLink>
        <ScrollLink to={"services"}>
          <li onClick={closeMenu}>services</li>
        </ScrollLink>
        {/* <ScrollLink to={"pharmacist"}>
          <li onClick={closeMenu}>pharmacist</li>
        </ScrollLink> */}
        <ScrollLink to={"products"}>
          <li onClick={closeMenu}>products</li>
        </ScrollLink>
        <ScrollLink to={"testimonials"}>
          <li onClick={closeMenu}>testimonials</li>
        </ScrollLink>
        <ScrollLink to={"contactus"}>
          <li onClick={closeMenu}>contact us</li>
        </ScrollLink>
        <Link className="add-to-cart" to="/">
          <Cart/>
        </Link>
      </ul>
    </nav>
  );
}

export default Menu;
