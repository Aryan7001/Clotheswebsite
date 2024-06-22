import React, { useState } from 'react'
import "./Login.css"

const Login = ({setShowlogin}) => {

const[currState, setCurrState]= useState("Login")

  return (
    <div className='login-main'>
      <div className='login-items'>
       
        <div className='login-head'>
        <h2>{currState}</h2>
<span onClick={()=>setShowlogin(false)} class="material-symbols-outlined close">close</span>
        </div>


    <div className="login-text">
        {currState==="Login"?null:<input type="Username" placeholder='Username' />}
        <input type="Email" placeholder='Email' />
        <input type="Password" placeholder='Password' />
    </div>
    <button>{currState==="Signup"?"Create Account":"Login"}</button>

    <div className='login-condition'>
<input type="checkbox" />
<p>By accepting our terms and condition </p>
</div>
    {currState==="Login"?  
    <p>Do not have account? <span onClick={()=>setCurrState("Signup")}>Click here</span></p>:    
<p>Already have account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
 
}


</div>
    </div>
  )
}

export default Login
