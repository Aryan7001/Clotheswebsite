import React, { useContext} from 'react'
import { Storecontext } from '../Context/Storecontext'
import Productitems from '../Productitems/Productitems';
import './Products.css'

const Products = () => {

const{clothes_list} = useContext(Storecontext);

const filterItems = clothes_list.filter(product=>product.price >1300)
console.log('vako xa',filterItems)

  return (
    <div className='main-product'>
      <h1>Featured Products</h1>
      <h3>Summer Collection and new design</h3>
<div className='clothes-list'>
{filterItems.map((item, index)=>{
return <Productitems key={index} id={item.id} img={item.img} brand={item.brand} name={item.name} rating={item.rating} price={item.price} />
    
})}
</div>

<hr />
    </div>


  )
}

export default Products;
