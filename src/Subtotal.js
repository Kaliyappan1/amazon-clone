import React from 'react'
import './Subtotal.css'

function Subtotal() {
  return (
    <div className='subtotal'>
        <p>
          Subtotal (0 items): <strong>0</strong>
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