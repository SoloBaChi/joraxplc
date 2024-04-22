import React, { useState } from "react";
import { Link } from "react-router-dom";
// import ScrollLink from "../common/ScrollLink";
import CartIcon from "../shared/icons/CartIcon";
import UserIcon from "../shared/icons/UserIcon";
import ArrowDown from "../shared/icons/ArrowDown";

function Menu({ toggleMenu, cartItem }) {
  const [showUserAuth, setShowUserAuth] = useState(false);
  return (
    <nav className="nav-menu">
      <ul className="list-menu">
        <li onClick={toggleMenu}>
          <Link to="/" className="active">
            {/* <FaHome /> */}
            home
          </Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/aboutus"> about us</Link>
        </li>
        {/* <ScrollLink to={"pharmacist"}>
          <li>pharmacist</li>
        </ScrollLink> */}
        <li onClick={toggleMenu}>
          <Link to="/products">products</Link>
        </li>
        <li className="dropdown">
          <Link
            className="user-account"
            onClick={() => {
              setShowUserAuth((prev) => !prev);
            }}
          >
            <UserIcon />
            account
            <ArrowDown />
          </Link>
          {showUserAuth && (
            <ul
              className="dropdown-menu"
              onClick={() => {
                setShowUserAuth((prev) => !prev);
              }}
            >
              <li onClick={toggleMenu}>
                <Link to="/register">sign up</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link to="/login">login</Link>
              </li>
            </ul>
          )}
        </li>

        {/* <ScrollLink to={"contactus"}>
          <li>contact us</li>
        </ScrollLink> */}
        <li onClick={toggleMenu}>
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
