
function ConditionalRendering(){
 const tasks=[{id:1,title:"Learn react basics",completed:true},
                {id:2,title:"practise jsx",completed:true},
                {id:3,title:"understand conditional rendering",completed:false}
  ];
 
  return(
    <div>
    <ul>
   {tasks.map((task)=><li key={task.id}>{task.id}{task.title}{(task.completed)?"yes completed":"not completed"}</li>)};
  {tasks.filter((task) => task.completed).map((task) => (<li key={task.id}>{task.id} {task.title} completed </li>
    ))}
   </ul>
     
    </div> 
  );
}
export default ConditionalRendering