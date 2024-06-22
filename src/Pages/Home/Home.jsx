import React from 'react'
import Body from '../../component/Body/Body'
import Products from '../../component/Products/Products'
import Banner from '../../component/Banner/Banner'
import SignInfooter from '../../component/SignInfooter/SignInfooter'
import Login from '../../component/Login/Login'

import { useState } from 'react'

const Home = () => {

  const[Showlogin,setShowlogin] = useState(false)

  return (
   
    <div>
      <Body/>
      <Products/>
      <Banner/>
      <>
  {Showlogin===true? <Login setShowlogin={setShowlogin} />  :null}
  <SignInfooter setShowlogin={setShowlogin} />
  </>
    </div>
  
  )
}

export default Home




