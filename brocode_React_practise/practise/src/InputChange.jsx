import React,{useState} from "react"
function InputChange(){
const[name,setName]=useState("haymi");
const[quantity,setQuantity]=useState(0);
const[comment,setComment]=useState();
const[payment,setPayment]=useState("");
const[shipping,setShipping]=useState("pick up");
function handleNameChange(){
    setName(event.target.value);
}
function handleQuantityChange(){
  setQuantity(event.target.value);
}
function handleComment(){
  setComment(event.target.value);
}
function handlePayment(){
  setPayment(event.target.value);
}
function handleShipping(event){
  setShipping(event.target.value);
}

return(
  <div>
     <input value={name} onChange={handleNameChange} />
     <p>Name: {name}</p>
      <input value={quantity} onChange={handleQuantityChange} />
     <p>Name: {quantity}</p>
     <textarea value={comment} onChange={handleComment} placeholder="write your message"></textarea>
     <p>Message: {comment}</p>
     <select value={payment} onChange={handlePayment}>
      <option value="">Select an option</option>
      <option value="visa">Visa</option>
      <option value="gift card">Gift Card</option>
      <option value="master card">MasterCard</option>
     </select>
     <p> Selected: {payment}</p>
     <label>Checked</label>
     <input type="radio" value="pick up" checked={shipping==="pick up"} onChange={handleShipping} />
     <label><input type="radio" value="delivery" checked={shipping==="delivery"} onChange={handleShipping} />Delievery</label>
     <p>Shipping: {shipping}</p>
      </div>
);
}
export default InputChange

