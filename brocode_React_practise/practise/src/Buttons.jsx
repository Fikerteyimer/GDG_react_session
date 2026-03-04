function Buttons(){
    let count=0
     const handleclick=(name)=>{
       if(count<3){
        count++;
        console.log(`${name}you clicked me ${count} times` );
       }else{
        console.log(`${name} stop clicking me`);
       }
     }
     //event handler
     const handler=(e)=>e.target.textContent="ouch";
        
     const handleclick2=(age)=>console.log(`${name} stop clicking me`)
 return(
   
   <button onDoubleClick={(e)=>handler(e)}>Click me</button>
 );
}
export default Buttons