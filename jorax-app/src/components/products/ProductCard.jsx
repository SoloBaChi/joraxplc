import React from "react";
import RatedIcon from "../shared/icons/RatedIcon";
import UnratedIcon from "../shared/icons/UnratedIcon";
import { useNavigate } from "react-router-dom";

function ProductCard({ imgSrc, title, price, description, item, addToCart }) {
  const navigate = useNavigate();
  return (
    <figure className="card product-card">
      <div className="top-section">
        <div className="img-container">
          <img src={imgSrc} alt={title} />
        </div>
      </div>
      <div className="bottom-section">
        <h5>{title}</h5>
        <p>{description}</p>
        <div className="rates">
          <RatedIcon />
          <RatedIcon />
          <RatedIcon />
          <UnratedIcon />
          <span>(30)</span>
        </div>
        <div className="flex-container-2 price">
          <div className="flex-item">
            <p>₦ {price}.00</p>
          </div>
          <div className="flex-item">
            <div className="cta-btn-container">
              <button
                onClick={() => {
                  addToCart(item);
                  navigate("/cart");
                }}
                className="cta-btn-primary"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

export default ProductCard;
