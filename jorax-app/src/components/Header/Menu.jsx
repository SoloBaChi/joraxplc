import React from "react";
import { Link } from "react-router-dom";
import ScrollLink from "../common/ScrollLink";
import CartIcon from "../shared/icons/CartIcon";

function Menu({toggleMenu}) {
  return (
    <nav className="nav-menu">
      <ul className="list-menu">
        <li>
          <Link to="/" className="active">
            {/* <FaHome /> */}
            home
          </Link>
        </li>
        <li>
        <Link to="/aboutus"> about us</Link>
        </li>
        <ScrollLink to={"services"}>
          <li>services</li>
        </ScrollLink>
        {/* <ScrollLink to={"pharmacist"}>
          <li>pharmacist</li>
        </ScrollLink> */}
        <Link to="/products">
          <li>products</li>
        </Link>
        <ScrollLink to={"testimonials"}>
          <li>testimonials</li>
        </ScrollLink>
        <ScrollLink to={"contactus"}>
          <li>contact us</li>
        </ScrollLink>
        <li>
        <Link className="add-to-cart" to="/cart">
          {
          toggleMenu ? <CartIcon fill="#fff"/> : <CartIcon fill="#1E1E1E"/>
          }
          <span className="cart-counter">0</span>
        </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
