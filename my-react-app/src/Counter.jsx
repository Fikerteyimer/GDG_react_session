import { useState } from "react";

function Counter(){
 const [count,setCount]=useState(0);
 function decrements(){
   setCount(count-1)
   if(count===0){
    setCount(0);
   }
 }
  function reset(){
   setCount(count-1)
  setCount(0);
 }

 return(
    <div>
        <p>{count}</p>
    <button onClick={()=>setCount(count+1)}>increment</button>
    <button onClick={decrements}>decrement</button>
     <button onClick={reset}>reset</button>
    </div>
);
}
export default Counter