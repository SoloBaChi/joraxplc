import React from "react";
import { Link } from "react-router-dom";

function Checkout(props) {
  const totalPrice = localStorage.getItem("totalPrice");
  const cartItems = localStorage.getItem("numberOfItems");
  console.log(totalPrice);
  console.log(cartItems);
  return (
    <section className="checkout-section">
      <h3>You are about to make Payment for the selected Products</h3>
      <h6>payment steps:</h6>
      <p>
        Please follow the instructions below to process your payment for the
        selected items
      </p>
      <ul>
        <li>
          Make Payment to the Account Below:
          <div>
            <p>
              Account Name : <span>Jorax HealthCare Ltd</span>
            </p>
            <p className="ac-num">
              Account Number: <span>2003291147</span>
            </p>
            <p>
              Bank : <span>FCMB</span>
            </p>
          </div>
        </li>
        <li>
          Send Evidence of payment to our whatsapp respondent by clicking on the{" "}
          <code>proceed to continue</code> button below
        </li>
      </ul>
      <div className="cta-btn-container">
        <Link
          to={`https://wa.me/+2348166356458?text=Hello+Jorax+I+have+place+an+order+for+${cartItems}+Jorax+Palm+Oil+which+amount+to+${totalPrice}+Please+attached+your+transaction+file+to+continue`}
          className="cta-btn-primary"
        >
          proceed to continue
        </Link>
      </div>
    </section>
  );
}

export default Checkout;
