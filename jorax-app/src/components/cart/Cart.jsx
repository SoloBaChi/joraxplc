import React from 'react';

function Cart({ cartItem }) {
    console.log(cartItem)
    return (
        <section className='cart-section product-section'>
           {cartItem.length === 0 && <h4 className='no-cart-items'>Nothing added in the cart !</h4> }

           {/* Reder the added cart items */}
           <div className="flex-container-4">
            {
            cartItem.map((item,index) => (
                <figure className="card product-card">
                <div className="top-section">
                    <div className="img-container">
                        <img src={item.imgSrc} alt={item.title} />
                    </div>
                </div>
                <div className="bottom-section">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                  <div className="flex-container-2 price">
                    <div className="flex-item">
                        <p>${item.price}.00</p>
                    </div>
                    <div className="flex-item">
                     <div className="cta-btn-container">
                        <button className='cta-btn-primary'>checkout</button>
                     </div>
                    </div>
                  </div>
                </div>
            </figure>
            ))
            }
           </div>
        </section>
    );
}

export default Cart;