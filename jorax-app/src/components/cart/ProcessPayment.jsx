import React from "react";
import { useOutletContext } from "react-router-dom";

function ProcessPayment(props) {
  const [currentUser] = useOutletContext();
  return (
    <div>
      <h3>{currentUser}</h3>
    </div>
  );
}

export default ProcessPayment;
