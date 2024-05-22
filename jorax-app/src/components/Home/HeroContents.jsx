import React from "react";

function HeroContents(props) {
  return (
    <section className="banner-section">
      <div className="flex-container-2">
        <div className="flex-item">
          <h1>live healthy !</h1>
          <p>
            We're dedicated to enhancing healthy lifestyles through food
            production, pharmaceuticals, and consultancy services. Embrace the
            journey to a healthier life.
          </p>
        </div>
        <div className="flex-item">
          <div className="img-container">
            <img src={`/assets/images/hero-image.svg`} alt="hero icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroContents;
