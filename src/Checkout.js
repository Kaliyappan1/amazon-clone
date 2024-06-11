import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal.js'
import CheckoutProduct from './CheckoutProduct.js'


function Checkout() {
  return (
    <div className='checkout'>
        <div className="checkout_left">
            <img className='checkout_ad' src="https://media.gettyimages.com/id/1309469380/vector/bank-insurance-concept-vector-illustration-for-website-banner-advertisement-and-marketing.jpg?s=612x612&w=gi&k=20&c=9Ekan1ZiEHl4BjoidQf_-MBYGq7A7jy-GKQY_nwl4UI=" alt="" />
            <div>
                <h2 className="checkout_title">Your shopping Basket</h2>

                <CheckoutProduct/>
            </div>
        </div>
        <div className="checkout_right">
            <Subtotal/>
            
        </div>
        <button>remove from bashket</button>
    </div>

  )
}

export default Checkout