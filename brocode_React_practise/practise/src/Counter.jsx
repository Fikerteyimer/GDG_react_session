import { useState } from "react"
function Counter(){
const[number,setNumber]=useState(0);

const increment=()=>{
    setNumber(number+1);
}
const reset=()=>{
    setNumber(0);
}
return(
    <>
    <p>count: {number}</p>
    <button className="button-click" onClick={increment}>Increment</button>
    <button className="button-click" onClick={()=>number>0&&setNumber(number-1)}>Decrement</button>
    <button className="button-click" onClick={reset}>Reset</button>
     
    </>
);
}
export default Counter