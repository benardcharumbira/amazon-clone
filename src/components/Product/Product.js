import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: { id, title, image, price, rating },
    });
  };
  let x = 0;
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p key={x++}>⭐</p>
            ))}
        </div>
      </div>
      <div className="product__content">
        <img src={image} alt="" />
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  );
};

export default Product;
