import React from "react";
import "./Product.css";
import { useStateValue } from "./SateProvider";

function Products({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  function addToBasket() {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return <p>🌟 </p>;
            })}
        </div>
      </div>

      <img src={image} alt="" srcset="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Products;
