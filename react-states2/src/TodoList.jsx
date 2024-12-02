import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
 function TodoList(){
    let [todo,setTodo]=useState([])
    let [newTodo,setNewTodo]=useState("")
    function addTask(){
       // todo.push(newTodo)
        setTodo([...todo,{task:newTodo,id:uuidv4(),isDone:false}])
        setNewTodo("")
    }
    function updateTodo(event){
        setNewTodo(event.target.value)
    }
    function deleteTodo(id){
       setTodo((prev)=>(prev.filter((todo)=> todo.id!=id)))
    }
    //update all
    function updateAll() {
        setTodo((prevTodos) =>
            prevTodos.map((to) => ({
                ...to,
                task: to.task.toUpperCase(),
            }))
        );
    }
    function update(id) {
        setTodo((prev) =>
            prev.map((to) => {
                if (to.id === id) {
                    return {
                        ...to,
                        task: to.task.toUpperCase(),
                    };
                }
                return to;
            })
        );
    }
    function AllDone(){
        setTodo((prev)=>prev.map((to)=>({
            ...to,
            isDone:true,
        }))
    )}
    function Done(id){
        setTodo(
        todo.map((to)=>{
            if(to.id===id){
                return{
                ...to,
                isDone:true,
            }}
            else
            return to;
    }))}
    
    return(
        <div>
            <input type="text" placeholder="Add a task" id="input1" value={newTodo} onChange={updateTodo}/>
            <button onClick={addTask}>Add task</button>
            <br />
            <br />
            <br />
        <hr />
            <h4>TODO LIST</h4>
           <ul>
                {
                    todo.map((todo)=>(
                        <li key={todo.id}>
                           <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
                            {todo.task}</span>
                            <button onClick={()=>deleteTodo(todo.id)} >delete</button>
                            <button onClick={()=>update(todo.id)}>update</button>
                            <button onClick={()=>Done(todo.id)}>mark as done</button>
                            </li>
                    ))
                }
           </ul>
        <button onClick={updateAll}>Uperrcase All</button>
        <button onClick={AllDone}>mark as done All</button>
        </div>
    );
}
export default TodoList;