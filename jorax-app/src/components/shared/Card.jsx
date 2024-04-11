import React from "react";

function Card({ imgSrc, title, description }) {
  return (
    <figure className="card">
      <div className="img-container">
        <img src={imgSrc} alt={title} />
      </div>
      <h5>{title}</h5>
      <p>{description}</p>
    </figure>
  );
}

export default Card;
