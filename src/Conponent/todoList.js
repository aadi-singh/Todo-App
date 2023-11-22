

import delete1 from "../delete.png";
import "./todoList.css"

function TODOLIST( {todos , setTodo}){
  
  function handleClick(index){
      const copy = [...todos];
       copy[index].completed = true ; 
       setTodo(copy); 
  }

    function deleteTodo(todo){
      const copy = [...todos];
      const copy1=copy.filter((item)=>{
        return item !==todo; 
      })
      setTodo(copy1);
    }
 

  return(
    
    <div>
      <div className="root">
      {todos.map((todo , index)=>{
        
        if(todo.completed === true){
          return( <div className="todoItem"> <div className="task" key={index}><input className="checkBox" type="checkbox" onClick={()=>handleClick(index)}></input>   <p><strike>{todo.task} </strike> </p>  <button className="deleteButton" onClick={()=>deleteTodo(todo)}> <img src={delete1} alt="delete" /> </button>  </div> </div>);
        }else{
          return ( <div className="todoItem"> <div className="task" key={index}><input className="checkBox" type="checkbox" onClick={()=>handleClick(index)}></input>    <p>{todo.task}  </p><button className="deleteButton" onClick={()=>deleteTodo(todo)}> <img src={delete1} alt="delete" /> </button>     </div> </div>);
        }})} 
      
      </div>
    </div>
  )
}




export default TODOLIST;