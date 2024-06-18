import React from 'react';
import './CheckoutProduct.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider';

function Procedcheckout() {
    const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='Procedcheckout'>
      
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
  )
}

export default Procedcheckout