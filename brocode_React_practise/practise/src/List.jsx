function List(){
 const fruits=[{name:"banana", calorie:100},
    {name:"orange", calorie:200},
    {name:"apple",calorie:300}];
//fruits.sort((a,b)=>a.name.localeCompare(b.name));//normal sorting
//fruits.sort((a,b)=>b.name.localeCompare(a.name))
//fruits.sort((a,b)=>a.calorie-b.calorie);
//fruits.sort((a,b)=>b.calorie-a.calorie);
//const highCalorie=fruits.filter(fruit=>fruit.calorie>200);
 const listItems=fruits.map(fruit=><li key={fruit.name}>{fruit.name}:&nbsp;{fruit.calorie}</li>);

 return(
    <div>
   
    <ol>{listItems}</ol> 
    </div>
 );
}
export default List