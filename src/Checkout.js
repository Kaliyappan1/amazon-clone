import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js";
import checkoutbanner from './asets/image copy 2.png'
import CheckoutProduct from "./CheckoutProduct.js";
import { useStateValue } from "./StateProvider.js";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_ad" src={checkoutbanner} alt="" />
        <div>

          <h3>Hello {user?.email}</h3>
          <h2 className="checkout_title">Your shopping Basket</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
