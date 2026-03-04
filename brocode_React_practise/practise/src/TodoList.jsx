import { useState } from "react";
  function TodoList(){
    const[tasks,setTask]=useState([]);
    const[addTask,setAddTask]=useState("");
    function handleTask(event){
      setAddTask(event.target.value);
    }
    function handleButton(event){
       event.preventDefault(); 
       if (addTask.trim() === "") return;
      setTask([...tasks, addTask]);
      setAddTask("");
    }
    function deleteTask(index){
     setTask(tasks.filter((__,i)=>i!==index));
    }
    return(
      <div className="todoContainer">
        <h1>To-Do-List</h1>
        <div className="button-input-container">
        <input type="text" value={addTask} onChange={handleTask} placeholder="Enter a task"/>
        <button onClick={handleButton}>Add Task</button>
        </div>
        <ul className="todoListContainer">
        {tasks.map((task,index)=><li key={index}>{task} <button onClick={()=>deleteTask(index)}>Delete</button></li>)}
        </ul>
      </div>
    );

  } 
  export default TodoList     
    