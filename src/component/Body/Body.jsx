import React from 'react'
import './Body.css'
import {Link} from 'react-router-dom'

const Body = () => {
  return (
    <div className='main-body'>

      <div className='left-body'>
<p>Trade in offer</p>
<h2>Super Value deal <br /><span>On all products</span></h2>
<p>save more money on the deal</p>
<Link to = './Shop'><button>Explore</button></Link>
      </div>

    </div>
  )
}

export default Body
