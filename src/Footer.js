import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer_backtotop">
            <span>Back to top</span>
        </div>
        <div className="footer_container">
            <div className="footer_containerRow1">
                <h3>Get to Know Us</h3>
                <span>About Us</span>
                <span>Carrers</span>
                <span>Press Releases</span>
            </div>
            <div className="footer_containerRow2">
                <h3>Connect with Us</h3>
                <span>Facebook</span>
                <span>Twitter</span>
                <span>Instagram</span>
            </div>
            <div className="footer_containerRow3">
                <h3>Make Money with Us</h3>
                <span>Sell on Amazon</span>
                <span>Sell under Amazon Accelerator</span>
                <span>Amazon Global Selling</span>
                <span>Become an Affiliate</span>
            </div>
            <div className="footer_containerRow4">
                <h3>Let Us Help You</h3>
                <span>COVID-19 and Amazon</span>
                <span>Your Account</span>
                <span>Returns Centre</span>
                <span>Become an Affiliate</span>
            </div>
        </div>
    </div>
  )
}

export default Footer