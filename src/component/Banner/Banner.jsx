import React from 'react'
import { items } from '../../images/assets'
import './Banner.css'

const Banner = () => {
  return (
    <div className='main-banner'>
      <div className='left-banner'>
<img src={items.banner} alt="" />
<div className='banner-text'>
<p>Cozy deal</p>
        <h2>buy 1 get 1 free</h2>
        <p>The best dress is on sell</p>
        <button>Check</button>
</div>
      </div>

      <div className="right-banner">
       <img src={items.boy} alt="" />

       <div className='banner-text'>
        <p>Cozy deal</p>
        <h2>buy 1 get 1 free</h2>
        <p>The best dress is on sell</p>
        <button>Check</button>


       </div>
      </div>


      </div>


  )
}

export default Banner


