import React, { useContext } from 'react'
import { Storecontext } from '../../component/Context/Storecontext'
import './Cart.css'

const Cart = () => {

  const {clothes_list,removefromCart,count} = useContext(Storecontext);

  //const allItems = [...clothes_list, ...women_clothes, ...kids_clothes]

  return (
    <div className='cart-main'>
      <div className='cart-items'>
        <div className='cart-list'>
<li>Item</li>
<li>Title</li>
<li>Price</li>
<li>Quantity</li>
<li>Total</li>
<li>Remove</li>
        </div>

        <hr />

        {clothes_list.map((item ,index)=>{
          

if(count[item.id]>0){ 
  return (

  <div className='items-lists'>
 <img src={item.img} alt="" />
 <p>{item.brand}</p>
 <p>{item.price}</p>
 <p>{count[item.id]}</p>
 <p>{item.price*count[item.id]}</p>
 <h4 onClick={(()=>removefromCart(item.id))}>x</h4>
  </div>
)


}  


        }) }

      </div>
  
    </div>
  )
}

export default Cart
