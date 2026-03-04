import { useState } from "react"
function ReactHook(){
const[name,setName]=useState("guest");
const[age,setAge]=useState(0);
const[isemployed,setisEmployed]=useState(false);
const updateName=()=>{
    //name="maya" and we want to run it like console.log(name)// it will not work
    setName("gelila");
    setAge(30);
    setisEmployed("true");
}
return(
    <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>isEmployed: {isemployed ?"yes":"No"}</p>
        <button onClick={updateName}>setName</button>
    </div>
);

}
export default ReactHook