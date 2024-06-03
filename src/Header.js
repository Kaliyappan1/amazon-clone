import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG12.png' />
        <div className='header_search'>
            <input className='header_searchInput' type='text'/>
        </div>
        <div className='header_nav'>
            
        </div>

    </div>
  )
}

export default Header