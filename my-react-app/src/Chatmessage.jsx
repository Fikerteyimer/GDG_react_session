import pro from './assets/pro.svg';
import user from './assets/user.jpg';
function Chatmessage({message,sender}){
    //const message=props.message;// we also have ashortcut called const{message,profile}=props;
    //const profile=props.sender;
        return(
        <div>            
            {sender==="robot" && 
              <img src={pro} width={50}/> } 
              {message}
            {sender==="user" && 
               <img src={user} width={50}/> }
        </div>
       );
    }
   
export default Chatmessage;