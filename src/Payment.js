import React, { useEffect, useState } from "react";
import "./Payment.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { set } from "firebase/database";
import { getBasketTotal } from "./reducer";
import axios from "./axios";

function Payment() {
  
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState()
  const [processing, setProcessing] = useState()

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true)

  useEffect (() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios ({
        method: 'post',
        // STRIPE EXPECTS THE TOTAL IN A CURRENNCIES SUBUNITS
        url: `/payments/create?total=${getBasketTotal(basket)*100}`
      })
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
  }, [basket]) 

  const handleSubmit = async(e) => {
    // do all the fancy stripe stuff...
    e.preventDefault();
    setProcessing(true);

    const payload =await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then((paymentIntent) => {
      // paymentIntent = payment confirmation

      setSucceeded(true);
      setError(null)
      setProcessing(false)

      navigate('/orders')
    })


  };

  const handleChange = (e) => {
    // listen for changes in the cardelement
    // and display and errors as the customer types their card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  // currency forment
  const navigate = useNavigate();

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  const basketTotal = getBasketTotal(basket);

  return (
    <div className="Procedcheckout">
      <div className="payment_container">
        <h1>
          Checkout (<Link to={"/checkout"}>{basket?.length} items</Link>)
        </h1>

        {/* delivery address */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123 React lane</p>
            <p>Los Angles, CA</p>
          </div>
        </div>

        {/* review items */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
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

        {/* payment method */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            {/* stipe payment */}

            <form onSubmit={handleSubmit}>
              <CardElement />
              <div className="payment_priceContainer">
                <h3>
                  Order Total{" "}
                  <strong>{formatCurrency(basketTotal)}</strong>
                </h3>
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now" }</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
