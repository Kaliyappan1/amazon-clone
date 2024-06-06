import React from 'react'
import './Product.css'
import Tshirt from './asets/image.png'

function Product() {
  return (
    <div className='product'>
        <div className="product_info">
            <p>Colur Tshort</p>
            <p className="product_price">
                <small>$</small>
                <strong>19.99</strong>
            </p>
            <div className="product_rating">
                <p>⭐</p>
                <p>⭐</p>
                <p>⭐</p>
                <p>⭐</p>
                <p>⭐</p>
            </div>
        </div>
        <img src={Tshirt} alt="" />
        <button>Add to Basket</button>
    </div>
  )
}

export default Product