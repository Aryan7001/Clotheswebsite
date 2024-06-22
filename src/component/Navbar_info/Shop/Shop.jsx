import React, { useContext } from 'react'
import './Shop.css'
import { Storecontext } from '../../Context/Storecontext'
import Product_CLothes from '../../Product_Clothes/Product_CLothes'




const Shop = () => {

 const{clothes_list} =useContext(Storecontext) 

const KidsClothes = clothes_list.filter(product=> product.category==='Kids')
const WomenClothes = clothes_list.filter(product=> product.category==='Women')
const NormalClothes = clothes_list.filter(product=> product.category==='Normal')

  return (
    <div className='shop-main'>
      <div className='shop-texts'>
<h1>Welcome to our shop</h1>
      </div>
      <Product_CLothes title='Normal' product={NormalClothes}   />
      <Product_CLothes title='Kids' product={KidsClothes}    />
      <Product_CLothes  title='Women' product={WomenClothes}  />
 </div>
  )
}

export default Shop

/* <Women/>
<Kids/>*/  //  this is inserted under products along with this import Women from '../../Products/Women/Women' import Kids from '../../Products/Kids/Kids'
