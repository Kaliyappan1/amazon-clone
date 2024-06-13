import React from 'react'
import './Subtotal.css'
import { useStateValue} from './StateProvider'
import { getBasketTotal } from './reducer';

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
    <button>Proceed to Checkout</button>
    </div>

  )
}

export default Subtotal;