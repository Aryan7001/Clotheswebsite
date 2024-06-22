import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { Storecontext } from '../Context/Storecontext'
import './SearchResult.css'

const SearchResult = () => {

const{clothes_list}= useContext(Storecontext);

const Location = useLocation();
const queryResult = new URLSearchParams(Location.search);
const query= queryResult.get('query')?.toLowerCase();

const result = query ? clothes_list.filter(clothes =>clothes.name.toLowerCase().includes(query)):[];

  return (
    <div className='search-main'>
      <h1>
        search result for '{query}'
      </h1>
      {result.length > 0 ? (
    <ul className='result-pro'>
        {result.map((clothes,index)=>(
           <li key={clothes.id}>
           <div>
             <img src={clothes.img} alt={clothes.name} />
             <p>Brand: {clothes.brand}</p>
             <p>Name: {clothes.name}</p>
             <p>Price: ${clothes.price}</p>
             <p>Rating: {clothes.rating}</p>
           </div>
         </li>
        ))}
    </ul>  
  ) : (
    <p> no result found </p>
  )
}
    </div>
  )
}

export default SearchResult
