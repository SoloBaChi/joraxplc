import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import LandingPage from "./LandingPage";
import Cart from "../cart/Cart";
import Products from "../products/Products";
import Aboutus from "../aboutus/Aboutus";
import Register from "../auth/Register/Register";
import Login from "../auth/login/Login";
import Distributor from "../auth/Register/Distributor";
import SalesRep from "../auth/Register/SalesRep";
import Affliate from "../auth/Register/Affliate";
import Checkout from "../cart/Checkout";

function Main({
  addToCart,
  removeFromCart,
  cartItem,
  ProductItems,
  decreaseQuantity,
}) {
  return (
    <>
      <Router>
        <Header cartItem={cartItem} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItem={cartItem}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                decreaseQuantity={decreaseQuantity}
              />
            }
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route
            path="/products"
            element={
              <Products
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                ProductItems={ProductItems}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/distributor" element={<Distributor />} />
          <Route path="/sales-rep" element={<SalesRep />} />
          <Route path="/affliate" element={<Affliate />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default Main;
