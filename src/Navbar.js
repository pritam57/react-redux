import React from "react"

import {Link} from "react-router-dom"
import { useSelector } from "react-redux";
const Navbar =()=>{

   
const items=useSelector((state)=>{
  return(
      state.cart
  )
})

const dp=useSelector((state)=>{
  return(
      state.dart
  )
})
const dataa=useSelector((state)=>{
  return(
      state.data
  )
})
  
return(
    <div>
  <ul className="ullist">
 <Link to="/" ><li>Home </li></Link>
 <Link to="/cartr"> <li>Cart- {items.length}</li></Link>
  
  <li style={{marginLeft:160}}>counter {dp}</li>
  <li>data : {dataa}</li>
  </ul>

    </div>
)
}

export default Navbar;