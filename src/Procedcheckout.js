import React from 'react';
import './CheckoutProduct.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider';

function Procedcheckout({id, image, title, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();

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
    <div className='Procedcheckout'>
        <img className='checkoutProduct_image' src={image} alt="" />
        <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">
                {title}
            </p>
            <p className="checkoutProduct_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct_rating">
                {Array(rating)
                .fill()
                .map((_,i) => (
                    <p>⭐</p>
                ))
                }
            </div>
        </div>
    </div>
  )
}

export default Procedcheckout