import React from "react";
import { Link } from "react-router-dom";

import "./CheckoutSuccess.css";
const CheckoutSuccess = () => {
  return (
    <div>
      <h1>Checkout Successful!</h1>
      <p>
        Hang in there, your order is on its way!
        <Link to="/">Continue Shopping</Link>
      </p>
    </div>
  );
};

export default CheckoutSuccess;
