import React from 'react'
import Home from './Pages/Home/Home'
import Navbar from './component/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import AboutUs from './component/Navbar_info/About Us/About Us'
import Blog from './component/Navbar_info/Blog/Blog'
import ContactUs from './component/Navbar_info/Contact Us/Contact Us'
import Shop from './component/Navbar_info/Shop/Shop'
import Footer from './component/Footer/Footer'
import Product_CLothes from './component/Product_Clothes/Product_CLothes'
import SearchResult from './component/SearchResult/SearchResult'

const App = () => {



  return (
  

<div>
<Navbar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Cart' element={<Cart/>}/>
<Route path='/About Us' element={<AboutUs/>} />
<Route path='/Blog' element={<Blog/>} />
<Route path='/Contact Us' element={<ContactUs/>} />
<Route path='/Shop' element={<Shop/>} />
<Route path='/Product_CLothes' element={<Product_CLothes/>}  >
<Route path=':Productid' element={<Product_CLothes/>}/>
</Route>
<Route path='/search' element={<SearchResult/>} />
</Routes>
<Footer/>
       
    </div>

 
  )
}

export default App
