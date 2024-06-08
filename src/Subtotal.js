import React from 'react'
import './Subtotal.css'
import { useStateValue} from './StateProvider'
import { getBasketTotal } from './reducer';

function Subtotal() {

  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
        <p>
          Subtotal ({basket?.length} items): <strong>{getBasketTotal(basket)}</strong>
        </p>
        <small className="subtotal_gift">
          <input type="checkbox" name="" id="" />
          This order containes a gift
        </small>


        <button>Proceed to Checkout</button>
    </div>

  )
}

export default Subtotal