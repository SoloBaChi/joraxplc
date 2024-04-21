import React from "react";
import { Link } from "react-router-dom";

function PartnerWithUs(props) {
  return (
    <section className="our-partners-section">
      <h2>partner with us</h2>
      <div className="grid-container-3">
        <figure className="card">
          <h5>become a distributor</h5>
          <div className="cta-btn-container">
            <Link className="cta-btn-primary" to="/distributor">
              Apply
            </Link>
          </div>
        </figure>
        <figure className="card">
          <h5>become a sales represntative</h5>
          <div className="cta-btn-container">
            <Link className="cta-btn-primary" to="/sales-rep">
              Apply
            </Link>
          </div>
        </figure>
        <figure className="card">
          <h5>become an affliate marketer</h5>
          <div className="cta-btn-container">
            <Link className="cta-btn-primary" to="/affliate">
              Apply
            </Link>
          </div>
        </figure>
      </div>
    </section>
  );
}

export default PartnerWithUs;
