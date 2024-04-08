import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import LandingPage from "./LandingPage";
import MyCart from "./cart/MyCart";
import Products from "./products/Products";

function Main(props) {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cart" element={<MyCart />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default Main;
