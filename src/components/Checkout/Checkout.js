import React from "react";
import Header from "../Header/Header";
import CheckoutProduct from "../Checkout/CheckoutProduct/CheckoutProduct";
import Subtotal from "./Subtotal/Subtotal";
import "./Checkout.css";
import { useStateValue } from "../../StateProvider";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
            className="checkout__ad"
          />

          {basket?.length === 0 ? (
            <div>
              <h2>Your Shopping Cart is empty.</h2>
              <p>
                Your Shopping Cart lives to serve. Give it purpose — fill it
                with books, CDs, DVDs, toys, electronics, and more.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="checkout__title">Your Shopping Basket</h2>
              {basket?.map((item) => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
        {basket.length > 0 && (
          <div className="checkout__right">
            <Subtotal />
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
