import React from "react";
import greenLeaf from "../images/green-leaf.svg";
import { AboutusImage } from "../data/data";
function Aboutus(props) {
  return (
    <>
      <h3>About us</h3>
      <div className="flex-container">
        <figure className="place-left">
          <h4>pharmaceutical product available at your reach</h4>
          <p>
            We specialize in marketing of other Pharmaceutical companies’
            products in Nigeria. The company sprang up to partner with some
            companies who do not have a structured marketing and sales force to
            maintain a reasonable market share and thus sustain the
            profitability of the company in the long run.
          </p>
          <div className="leaf-img-container">
            <img src={greenLeaf} alt={greenLeaf} />
          </div>
        </figure>
        <figure className="place-right">
          <div className="img-container first-child">
            <img src={AboutusImage.lg} alt={AboutusImage.lg} />
          </div>
          <div className="img-container last-child">
            <img src={AboutusImage.sm} alt={AboutusImage.lg} />
          </div>
        </figure>
      </div>
    </>
  );
}

export default Aboutus;
