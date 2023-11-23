

import { useRef } from 'react';
import './App.css';
import TODOLIST from './Conponent/todoList';


import useLocalStorage from './Custom_Hook/useLocalStorage';

function App() {

  const initialValue = [];


  const [todos, setTodo] = useLocalStorage("todos", initialValue);

  const inputRef = useRef(null);

    

  function addTodo() {
    const todo = document.getElementById("todoInput").value;
    setTodo([...todos, { task: todo, completed: false }])
     inputRef.current.value="";
  }

    function handleKey(event){
      if(event.key==='Enter'){
        addTodo();
      }
    }


    
  return (
    <div className="App">
      <div className='InnerApp'>
        <div className='InvisibleDiv'>
      <h1 id="todo">TO DO</h1>
      <div id="inputAndButton">
      <input id="todoInput" placeholder='Create a TO-DO task ' name="todoInput" onKeyDown={handleKey}  ref={inputRef}  />
      <button onClick={addTodo}  id="addTodo"> Add Task </button>
      </div>
      <TODOLIST todos={todos} setTodo={setTodo} />
      </div>
      </div>
    </div>
  );
}

export default App;
