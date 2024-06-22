import {  createContext, useState } from "react";
import { clothes_list} from "../../images/assets";

export const Storecontext = createContext('null')

const Storecontextprovider = (props)=>{

    const[count, setCount]= useState({})


    const addCount=(itemid)=>{
        if(!count[itemid]){
            setCount((prev)=>({...prev,[itemid]:1}))

            console.log(count)
        }
       

        else{
            setCount((prev)=>({...prev,[itemid]:prev[itemid]+1}))
            console.log(count)
        }

    }

    const removefromCart= (itemid)=>{
setCount((prev)=>({...prev,[itemid]:prev[itemid]-1}))
console.log(count)

    }




const createvalue= {

    clothes_list,
    addCount,
    removefromCart,
    count,
    setCount,

}

return(

<Storecontext.Provider value= {createvalue}>
    {props.children}
</Storecontext.Provider>

)

}

export default Storecontextprovider;