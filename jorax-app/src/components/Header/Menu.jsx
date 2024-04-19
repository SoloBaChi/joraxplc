import React from "react";
import { Link } from "react-router-dom";
import ScrollLink from "../common/ScrollLink";
import CartIcon from "../shared/icons/CartIcon";

function Menu({ toggleMenu, cartItem }) {
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
        {/* <ScrollLink to={"pharmacist"}>
          <li>pharmacist</li>
        </ScrollLink> */}
        <li>
          <Link to="/products">products</Link>
        </li>
        <li>
          <Link to="/">account</Link>
        </li>

        {/* <ScrollLink to={"contactus"}>
          <li>contact us</li>
        </ScrollLink> */}
        <li>
          <Link className="add-to-cart" to="/cart">
            cart
            {toggleMenu ? (
              <CartIcon fill="#fff" />
            ) : (
              <CartIcon fill="#1E1E1E" />
            )}
            {cartItem.length > 0 && (
              <span className="cart-counter">{cartItem.length}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
