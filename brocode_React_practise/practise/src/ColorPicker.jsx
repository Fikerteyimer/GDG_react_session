import React, { useState } from "react";

function ColorPicker(){
 const [color,setColor]=useState("#000000");
 function handleColor(event){
    setColor(event.target.value);
 }
 return(
    <div className="colorContainer">
     <div className="color-display"style={{backgroundColor:color}}>
         <h1>color picker</h1>
         <p>Color: {color} </p>
     </div>
    

    <label>Pick a Color: <input type="color" value={color} onChange={handleColor} /></label>
    
 </div> 
 ); 

}
export default ColorPicker