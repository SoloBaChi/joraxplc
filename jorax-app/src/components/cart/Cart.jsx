import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from "../shared/icons/DeleteIcon";
import AddCartIcon from "../shared/icons/AddCartIcon";
import SubtractCartIcon from "../shared/icons/SubtractCartIcon";
import BackArrow from "../shared/BackArrow";

function Cart({ cartItem, addToCart, removeFromCart, decreaseQuantity }) {
  const navigate = useNavigate();
  const totalPrice = cartItem.reduce(function (price, val) {
    return price + val.price * val.qty;
  }, 0);
  useEffect(() => {
    localStorage.setItem("totalPrice", totalPrice);
    localStorage.setItem("numberOfItems", cartItem.length);
  }, [totalPrice, cartItem.length]);
  return (
    <section className="cart-section">
      {cartItem.length === 0 && (
        <h4 className="no-cart-items">Nothing added in the cart !</h4>
      )}

      {/* Reder the added cart items */}
      <div className="flex-container-2">
        <div className="flex-item">
          {cartItem.map((item, index) => (
            <figure className="product-card" key={index}>
              <div className="flex-item flex-container-2">
                <div className="flex-item flex-container-2">
                  <div className="top-section">
                    <div className="img-container">
                      <img src={item.imgSrc} alt={item.title} />
                    </div>
                    <div
                      className="cta-btn-container flex-container-2"
                      onClick={() => removeFromCart(item)}
                    >
                      <button>
                        <DeleteIcon />
                      </button>
                      <span className="remove-cart">Remove</span>
                    </div>
                  </div>
                  <div className="bottom-section">
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                    <div className="flex-container-2 price">
                      {/* <div className="flex-item">
                    <div className="cta-btn-container">
                      <button className="cta-btn-primary">checkout</button>
                    </div>
                  </div> */}
                    </div>
                  </div>
                </div>
                <div className="flex-item">
                  <div className="price-container">
                    <p>₦ {item.price * item.qty}.00</p>
                    <div className="inner-flex">
                      <div className="flex-item">
                        <button
                          onClick={() => {
                            addToCart(item);
                          }}
                        >
                          <AddCartIcon />
                        </button>
                      </div>
                      <div className="flex-item">
                        <p>{item.qty}</p>
                      </div>
                      <div className="flex-item">
                        <button
                          onClick={() => {
                            decreaseQuantity(item);
                          }}
                        >
                          <SubtractCartIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </figure>
          ))}
        </div>
        <div className="flex-item">
          <h4>cart summary</h4>
          <div className="subtotal price-container">
            <p>
              Sub Total : <span> ₦ {totalPrice}</span>
            </p>
          </div>
          <div className="cta-btn-container group-btns">
            <button
              onClick={() => {
                navigate("/checkout");
              }}
              className="cta-btn-primary"
              disabled={cartItem.length === 0}
            >
              checkout
            </button>
            <button
              onClick={() => {
                navigate("/products");
              }}
              className="cta-btn-primary"
              style={{
                display: cartItem.length === 0 ? "none" : "block",
                background: "#fff",
                border: "1px solid #00ac57",
                color: "#000",
              }}
            >
              continue shopping
            </button>
          </div>
        </div>
      </div>
      <Link to="/products">
        <BackArrow />
      </Link>
    </section>
  );
}

export default Cart;
