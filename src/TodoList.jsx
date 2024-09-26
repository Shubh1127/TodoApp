import { useState } from "react";
import './Todo.css'
import { v4 as uuidv4 } from "uuid";
export default function TodoList() {
  let [todos, settodos] = useState([{ task: "sample Task", id: uuidv4(),isDone:false }]);
  let [newTodo, setnewTodo] = useState("");
  let addNewTask = () => {
    settodos([...todos, { task: newTodo, id: uuidv4(),isDone:false }]);
    setnewTodo("");
  };
  let updateTodoValue = (event) => {
    setnewTodo(event.target.value);
  };
  let TodoDelete=(id)=>{
        settodos(todos.filter((todo)=> todo.id !=id));
  }
  let UpperCaseALL=()=>{
    settodos((todos)=>
      todos.map((todo)=>{
        return {
          ...todo,
          isDone:true
        }
      })
    )
  }
  let MarkAsDone=(id)=>{
    settodos((todos)=>
      todos.map((todo)=>{
        if(todo.id==id){
          return {
            ...todo,
            isDone:true,
          } 
        }
        else{
          return todo;
        }
      })
    )
  }
  
  return (
    <div className="box">
      <h2>To-Do List</h2>
      <div className="box2">
      <input
        placeholder="add a Task"
        value={newTodo}
        onChange={updateTodoValue} className="input"
        />
      
      <button onClick={addNewTask} className="bt">Add Task
      </button>
        </div>
        <br></br>
      <hr></hr>
      <h4>Tasks Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="st">
            <span style={todo.isDone ? {textDecorationLine:"line-through"} : {}}
            >
              {todo.task}
              &nbsp;
              &nbsp;
              &nbsp;
             <button onClick={()=>TodoDelete(todo.id)} className="task">Delete</button>
              <button onClick={()=>MarkAsDone(todo.id) } className="task">Mark as Done</button>
            </span>
              </li>
        ))}
      </ul>
      <hr></hr>
        <button onClick={UpperCaseALL}>Mark all as Done</button>
    </div>
  );
}
