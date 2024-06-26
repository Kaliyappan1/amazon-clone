import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import {motion} from "framer-motion"

function Product({id, title, image, price, rating }) {

  const [{basket}, dispatch] = useStateValue();

  console.log('this is the basket >>>>>>>>');
  const addToBasket = () => {
      dispatch({
        type: 'ADD_TO_BASKET',
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating
        },
      });
  }
  return (
    <div animate={{x:100}} transition={{type: "spring", stiffness: 100}} className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
