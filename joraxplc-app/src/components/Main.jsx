import React from "react";
import Header from "./Header";
import LandingPage from "./LandingPage";
import Footer from "./Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Main(props) {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default Main;
