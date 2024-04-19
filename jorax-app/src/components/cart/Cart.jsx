import React from "react";

function Cart({ cartItem, addToCart, removeFromCart, decreaseQuantity }) {
  console.log(cartItem);
  const totalPrice = cartItem.reduce(function (price, val) {
    return price + val.price * val.qty;
  }, 0);
  return (
    <section className="cart-section">
      {cartItem.length === 0 && (
        <h4 className="no-cart-items">Nothing added in the cart !</h4>
      )}

      {/* Reder the added cart items */}
      <div className="flex-container-2">
        <div className="flex-item">
          {cartItem.map((item, index) => (
            <figure className="product-card">
              <div className="flex-item flex-container-2">
                <div className="flex-item flex-container-2">
                  <div className="top-section">
                    <div className="img-container">
                      <img src={item.imgSrc} alt={item.title} />
                    </div>
                    <div className="cta-btn-container">
                      <button onClick={() => removeFromCart(item)}>
                        remove
                      </button>
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
                    <p>N {item.price * item.qty}.00</p>
                    <div className="inner-flex">
                      <div className="flex-item">
                        <button
                          onClick={() => {
                            addToCart(item);
                          }}
                          className="cta-btn-primary"
                        >
                          add
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
                          className="cta-btn-primary"
                        >
                          minus
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
              Sub Total : <span> N {totalPrice}</span>
            </p>
          </div>
          <div className="cta-btn-container">
            <button className="cta-btn-primary">checkout</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
