import { addTodo } from '../features/todoSlice';
import {useState} from 'react'
import {useDispatch} from 'react-redux'
export default function Add(){
    const dispatch = useDispatch()
    const [todo,setTodo]=useState()

    function onClickHandler(e){
        e.preventDefault()
        dispatch(addTodo(todo))
        setTodo('')
    }
    return(<>
    <input type="text"
    value={todo}
    placeholder='write todo'
    onChange={(e)=>setTodo(e.target.value)}/>
    <button onClick={onClickHandler}>ADD</button>
    </>)
}