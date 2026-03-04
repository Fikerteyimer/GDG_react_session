//In this chapter we have learned conditional rendering 
//props and components started simple chatbot project
//split them into different components
import Nav from './Nav'
import Body from './Body'
import Counter from './Counter'
import Chatbot from './Chatbot'
import Chatmessage from './Chatmessage'
import LoginForm from './LoginForm'
import ProductDetails from './ProductDetails'
import crown from './assets/crown.png';
import dress from './assets/dress.jpg';
import m from './assets/m.jpg';
import { send } from 'vite'
function App() {
  const chatMessage=[
    {
      message:'hello chatbot',
      sender:'user'},
    {
      message:'hello,how can I help you?',
      sender:"robot"
    },
    {
      message:'can you get me today date?',
      sender:"user"
    },
    {
      message:'february 3',
      sender:"robot"
    },
  ];
  return (
    <>
    <Chatbot/>
    {chatMessage.map((chat, index) => {
  return (
    <Chatmessage 
      key={index}
      message={chat.message} 
      sender={chat.sender} 
    />
  );
})}
   
    <LoginForm/>
    <ProductDetails name="Crown" price={10.90} discounted={5.45} image={crown}/>
    <ProductDetails name="dress" price={6.90} image={dress}/>
    <ProductDetails name="microscope" price={7.99} discounted={2.50} image={m}/>
    </>
  );
}

export default App;
