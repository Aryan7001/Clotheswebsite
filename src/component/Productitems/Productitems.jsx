import React, { useContext} from 'react'
import './Productitems.css'
import { Storecontext } from '../Context/Storecontext'


const Productitems = ({id, img, brand, name, rating, price,title}) => {


const {addCount,removefromCart,count}= useContext(Storecontext)

  return (
    <div className='main-products'>
      <div className='clothes-img'>
<img src={img} alt="" />
      </div>
<div className='clothes-desc'>
<p>{brand}</p>
<p>{name}</p>
<p>{rating}</p>
<div className='icon'>
<p>{price}</p>


 
{!count[id]? <span onClick={()=> addCount(id)} class="material-symbols-outlined shopping" >shopping_cart</span> :

<div className="item-list">
<span onClick={()=> addCount(id)} class="material-symbols-outlined">add</span>
<p>{count[id]}</p>
<span onClick={()=> removefromCart(id)} class="material-symbols-outlined">remove</span>
</div>

}

</div>

</div>

    </div>
  )
}

export default Productitems;
