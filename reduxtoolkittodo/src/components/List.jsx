import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { editTodo} from '../features/todoSlice';
import { removeTodo } from '../features/todoSlice';
function List(){
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    return(

        <>
          {
            todos.map((todo)=>(
                <div key={todo.id}>
                    <p>{todo.text}</p>
                    <button onClick={()=>(dispatch(removeTodo(todo.id)))}>Delete</button>
                    <button onClick={()=>(dispatch(editTodo(todo.id)))}>Edit</button>
                </div>
            )
        )
          }
        </>
    )
}
export default List;