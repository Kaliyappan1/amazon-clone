import React from 'react'
import './Subtotal.css'
import { useStateValue} from './StateProvider'
import { getBasketTotal } from './reducer';
import { Link } from 'react-router-dom';

function Subtotal() {

  const [{basket}] = useStateValue();

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

  const basketTotal = getBasketTotal(basket);

  return (

    <div className='subtotal'>
        <p>
          Subtotal ({basket?.length} items): <strong>{formatCurrency(basketTotal)}</strong>
        </p>
        <small className="subtotal_gift">
          <input type="checkbox"/>
          This order containes a gift
        </small>
   <Link to="/processcheckout">
    <button className='subtotal_button'>Proceed to Checkout</button>
   </Link>
    </div>

  )
}

export default Subtotal;