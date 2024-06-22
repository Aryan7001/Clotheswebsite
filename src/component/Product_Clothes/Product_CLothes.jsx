import React from 'react'
import Productitems from '../Productitems/Productitems'
import './Product_CLothes.css'

const Product_CLothes = ({title,product}) => {

  return (
    <div className='main-product'>
     <h1>{title}</h1>
     <div className='list'>
{product.map((product)=>(
<Productitems  id={product.id} img={product.img} brand={product.brand} name={product.name} rating={product.rating} price={product.price} />

))}
     </div>
    </div>
  )
}

export default Product_CLothes
