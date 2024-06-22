import React, {  useState } from 'react'
import { items } from '../../images/assets'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

const navigate = useNavigate();
const[menu, setMenu]= useState("Shop")
const[burger,setBurger] = useState(false);
const[search,setSearch] = useState()


const searchHandleChange = (e)=>{
setSearch(e.target.value)
}

const searchLocation = ()=>{
if(search) {
  navigate(`/search?query=${encodeURIComponent(search)}`)
}
}

const handleKeyPress = (e) => {
  if (e.key === 'Enter') {
    searchLocation();
  }
};

  return (
    <div className='main-nav'>
      <div className='nav-img'>
<Link to= '/'><img src={items.logo} alt="" />    </Link> 
      </div>
<ul className={`nav-list ${burger ? 'open' : ''}` }> 
    <Link className='link1' to = './'> <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>  </Link> 
    <Link className='link1' to ='./Shop'> <li onClick={()=>setMenu("Shop")} className={menu==="Shop"?"active":""}>Shop</li> </Link>
    <Link className='link1' to = './Blog'>  <li onClick={()=>setMenu("Blog")} className={menu==="Blog"?"active":""}>Blog</li>   </Link>
    <Link className='link1' to = './About Us'> <li onClick={()=>setMenu("About Us")} className={menu==="About Us"?"active":""}>About Us</li>  </Link>  
    <Link className='link1' to = './Contact Us'>  <li onClick={()=>setMenu("Contact Us")} className={menu==="Contact"?"active":""}>Contact Us</li> </Link> 

</ul>

<div className='search-items'>
<input type="search" placeholder='search anything' value={search} onChange={searchHandleChange} onKeyPress={handleKeyPress}  />
</div>

<div className='nav-items'>
 <Link to = "/Cart"><span class="material-symbols-outlined">shopping_bag</span>  </Link> 
</div>

<div className='ham-burger'>
<span onClick={()=>setBurger(!burger)} class="material-symbols-outlined">menu</span>
</div>


    </div>
  )
}

export default Navbar
