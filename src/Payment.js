import React, { useState } from 'react';
import './Payment.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';


function Payment() {
    const [{ basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = e => {
      // do all the fancy stripe stuff...

    }

    const handleChange = async (e) => {
        // listen for changes in the cardelement
        // and display and errors as the customer types their card details
      if ( !stripe || !elements) {
        return;
      }
    }

  return (
    <div className='Procedcheckout'>
      <div className="payment_container">
        <h1>
          Checkout (
            <Link to={"/checkout"}>{basket?.length} items</Link>
          )
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

        {/* payment method */}
        <div className="payment_section">
            <div className="payment_title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment_details">
              {/* stipe payment */}

              <form onSubmit={handleSubmit}>
                <CardElement/>
              </form>

            </div>
        </div>


      </div>
    
    </div>
  )
}

export default Payment