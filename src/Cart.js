import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { remove } from "./store/cartSlice";

const Cart= function(){
    const [pay,setpay]=useState(0);
    
   

   const dispatch=useDispatch()
 
var itemsp=useSelector((state)=>{
    return(
        state.cart  
    )
    
})

function Removeitem(id){
 console.log(id)
 dispatch(remove(id))
      }
function Dothe(){
   
  var p=0;
   itemsp.map((a)=>{
    return(
    p=p+(a.price)
    )
   })
   setpay(p);
}
    
    return(
<div>
<h1 style={{textAlign:"center"}}>this is a cart page</h1>
<div className="linee">
        {itemsp.map((a,index)=>{
            return(
                <div className="da">
                <div>
                <h1>{a.title}</h1>
                <img alt="loading"  style={{height:"300px",width:"300px"}} src={`${a.images[0]}`}/>
             <h1>{a.price}</h1>
             </div>
             
             <div>
            <button id={index} onClick={()=>{Removeitem(a.id)}}>Remove</button>
            </div>
             </div> 
            )
        })}
        </div>
        <button onClick={Dothe} style={{marginLeft:600,height:32,fontSize:20,marginTop:20}}>place order</button>
        {pay!=0 ? <h1>your total bill amount is {pay}</h1> :null}

       
</div>
    )
}

export default Cart;