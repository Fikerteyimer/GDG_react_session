import fott from './assets/fott.jpg'
function Profile(){
 const imageUrl="./assets/fott.jpg";
 const handleclick=()=>console.log("ouch");
 return(
    <img src={imageUrl} onClick={handleclick}></img>
 );
}
export default Profile