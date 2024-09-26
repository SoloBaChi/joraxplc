import React, { useEffect, useState } from "react";

// load the image Data
const imageData = [
  `/assets/images/hero-image.svg`,
  `/assets/fourset_litre.jpg`,
  `/assets/hand-holding-palmoil.jpg`,
  `/assets/woman-peeling-palmoil.jpg`,
];

function HeroContents(props) {

  const[position,setPosition] = useState(0);

  // During Mount using SIde Effects
  useEffect(()=>{
    const interval = setInterval(()=>{
     if(position === imageData.length - 1) setPosition(0);
     else{
      setPosition(prev => prev + 1)
     }
    },3000);
    return () => clearInterval(interval);
  },[position]);
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
        {/* style={{background:`url(${imageData[position]}) no-repeat center/cover #f8f8f8`}}> */}
        <div className="flex-item">
          <div className="img-container" style={{background:`url(${imageData[position]}) no-repeat center/cover`}}>
            {/* <img src={`/assets/images/hero-image.svg`} alt="hero icon" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroContents;
