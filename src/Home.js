import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { add } from "./store/cartSlice";
import { minus } from "./store/dartSlice";
import { addd } from "./store/dartSlice";
import { changedata, changedatasec } from "./store/dataslice";
import { useSelector } from "react-redux";
import "./index.css";
const Home =()=>{

    const [data,setdata]=useState([]);

    const dispatch=useDispatch()
    const dispatchg=useDispatch()
 const disp=useDispatch();

 const ite=useSelector((state)=>{
    return(
        state.dart
    )
  })
  const itee=useSelector((state)=>{
    return(
        state.data
    )
  })

useEffect(()=>{
fetchapi();
    },[])


    function fetchapi(){
        fetch("https://dummyjson.com/products").then(
            (result)=>{result.json().then(
                (resp)=>{console.log(resp.products);
            setdata(resp.products);
           // console.log(data);
           // console.log(data[0]);

        })})
    }

    function handleadd(a){
        dispatch(add(a));
            }

             function Dothae(){
               // console.log()
                dispatchg(addd())
                     }

                     function Dothamin(){
                        // console.log()
                         dispatchg(minus())
                              }
                              function Changename(){
                                // console.log()
                                 disp(changedata())
                                      }
                                      function Changenamea(){
                                        // console.log()
                                         disp(changedatasec())
                                              }
return(
    <div>
    <h1>This is a Home page</h1>
    {ite===3 && itee==="poonam" ? <h1>poonam</h1> : null}
    <button onClick={Dothae} style={{marginLeft:330,marginBottom:20}}>counter-add</button>
    <button onClick={Dothamin} style={{marginLeft:20,marginBottom:20}}>counter-minus</button>
    <button onClick={Changename} style={{marginLeft:20,marginBottom:20}}>name-change</button>
    <button onClick={Changenamea} style={{marginLeft:20,marginBottom:20}}>change-name</button>

    <div className="line">
    {data.map((a,b)=>{
        return(
            <div className="da">
            <h1>{a.title}</h1>
            <img alt="loading"  style={{height:"300px",width:"300px"}} src={`${a.images[0]}`}/>
         <h1>{a.price}</h1>
        <button className="pl"  onClick={()=> handleadd(a)}>add to cart</button>
       
         </div>
        )
    })}
    </div>
    </div>
)
}

export default Home;