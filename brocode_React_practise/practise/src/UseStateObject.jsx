import React,{useState} from "react"
function UseStateObject(){
const [car,setCar]=useState({year:2024,
                             make:"Ford",
                             model:"Mustang"});
function HandleYear(event){
  setCar(c=>({...car,year : event.target.value}))
} 
function handleMake(event){
  setCar({...car,make : event.target.value}) 
}
function handleModel(event){
 setCar({...car,model : event.target.value})   
}
return (
    <div>
        <p>My favorite car is: {car.year} {car.model} {car.make}</p>
        <input type="number" value={car.year} onChange={HandleYear}/>
        <input type="text" value={car.model} onChange={handleModel}/>
        <input type="text" value={car.make} onChange={handleMake}/>
    </div>
);
}
export default UseStateObject