import React from 'react'
import './Footer.css'
import { items } from '../../images/assets'


const Footer = () => {
  return (
    <div className='footer-main'>
     <div className='footer1'>
<img src={items.logo} alt="" />
<h4>Contact</h4>
<p>Adress: <span>Kalanki-14, Kathmandu, Nepal</span></p>
<p>phone: <span>9420320428</span></p>

<div className='icons'>
  <h4>Follow Us</h4>
<img src={items.facebook} alt="" />
<img src={items.instagram} alt="" />
<img src={items.linkedin} alt="" />
</div>
     </div>

<div className='footer-2'>
  <h4>About Us</h4>
  <p>Delivery Information</p>
<p>Privacy Policy</p>
<p>Terms and Condition</p>
<p>Contact Us</p>
</div>

<div className='footer-3'>
  <h4>My Account</h4>
  <p>Sign In</p>
<p>View Cart</p>
<p>My Wishlist</p>
<p>Track My Order</p>
<p>Help</p>

</div>

<div className='footer-4'>
  <h4>Install Apps</h4>
  <p>From google play store</p>
  <div className='footer-icons'>
  <img src={items.play} alt="" />
  <img src={items.app1} alt="" />
  </div>
  <p>Secure Payement Gateway</p>
  <div className='footer-icons'>
  <img src={items.card} alt="" />
  <img src={items.card} alt="" />
  </div>
  
</div>

      </div>
  )
}

export default Footer
