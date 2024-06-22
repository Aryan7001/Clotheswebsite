import React from 'react'
import './SignInfooter.css'

const SignInfooter = ({setShowlogin}) => {
  return (
    <div className='main-sign'>
      <div className='sign-content'>
<h2>SignUP for Newsletter</h2>
<p>Get email update about our latest produts and <span>and special offer</span></p>
      </div>

      <div className='sign-inputs'>
      <input type="text" placeholder='type here'/>
<button onClick={()=>setShowlogin(true)}>Signup</button>
      </div>
   
    </div>
  )
}

export default SignInfooter;
