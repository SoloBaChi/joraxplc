import React from "react";
import Header from "./Header";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Pharmacist from "./Pharmacist";
import Products from "./Products";
import Testimonials from "./Testimonials";
import Contactus from "./Contactus";
import Footer from "./Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Main(props) {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pharmacist" element={<Pharmacist />} />
          <Route path="/products" element={<Products />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contactus" element={<Contactus />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default Main;
