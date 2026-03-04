import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import Student from './Student'
import UserGreeting from './UserGreeting'
import List from './List'
import Buttons from './Buttons'
import Profile from './Profile'
import ReactHook from './ReactHook'
import Counter from './Counter'
import InputChange from './InputChange'
import ColorPicker from './ColorPicker'
import UseStateObject from './UseStateObject'
import ArrayUseState from './ArrayUseState'
import ArrayOfObject from './ArrayOfObject'
import TodoList from './TodoList'
import DigitalClock from './DigitalClock'


function App() {
 
  return (
    <>
      <Card/>
      <Student name="Nancy" age="20" isStudent={true}></Student>
       <Student name="haymanot" age={30} isStudent={false}></Student>
       <Student />
       <UserGreeting isLoggedIn={true} name="katalina"></UserGreeting>
       <UserGreeting isLoggedIn={false} name="hemen"></UserGreeting>
       <List/>
       <Buttons/>
       <Profile/>
       <ReactHook/>
       <Counter/>
       <InputChange/>
       <ColorPicker/>
       <UseStateObject/>
       <ArrayUseState/>
       <ArrayOfObject/>
       <TodoList/>
       <DigitalClock/>
    


      
       
      
    </>
  );
}

export default App
