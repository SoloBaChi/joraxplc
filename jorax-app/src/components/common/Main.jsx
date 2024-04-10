import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import LandingPage from "./LandingPage";
import Cart from "../cart/Cart";
import Products from "../products/Products";

function Main({addToCart, removeFromCart, cartItem, ProductItems}) {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cart" element={<Cart cartItem={cartItem} />} />
          <Route path="/products" element={<Products 
          addToCart={addToCart} 
          removeFromCart={removeFromCart} 
          ProductItems={ProductItems} />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default Main;
