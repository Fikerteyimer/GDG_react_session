import { useState } from "react";
function ArrayOfObject(){
    const [cars,setCars]=useState([]);
    const[carYear,setCarYear]=useState(new Date().getFullYear());
    const[CarMake,setCarMake]=useState("");
    const[CarModel,setCarModel]=useState("");
    
function handleYear(event){
  setCarYear(event.target.value);
}
function handleMake(event){
  setCarMake(event.target.value);
}
function handleModel(event){
  setCarModel(event.target.value);
 
}
function handleButton(){
  const newCar={year:carYear,
                make:CarMake,
                model:CarModel
  }
  setCars(c=>[...c,newCar]);
}
return(
    <div>
       <ul>
      {cars.map((car,index)=><li key={index}>{car.year} {car.make} {car.model}</li>)}
    </ul> 
    <input type="number" value={carYear} onChange={handleYear} placeholder="enter the year" />
    <input type="text" value={CarMake} onChange={handleMake} placeholder="enter the make" />
    <input type="text" value={CarModel} onChange={handleModel} placeholder="enter the model" />
    <button onClick={handleButton}>Add Car objects</button> 
    </div>
   
    
);


}
export default ArrayOfObject