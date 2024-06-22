import React from 'react'
import './About Us.css'
import { items } from '../../../images/assets'

const AboutUs = () => {
  return (
    <div className='main-about'>
      <div className="left">
<img src={items.aboutback} alt="" />
      </div>
      <div className="right">
        <div className="contains">
        <h1>About Us</h1>
        <p>This website is all about Fashion u can <span> order clothes as well as customized ur clothes</span> </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
