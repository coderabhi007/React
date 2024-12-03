import { useState ,useEffect} from 'react'
import './App.css'
import { TodoProvider } from './Contexts'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {
  const [Todos,setTodos]=useState([])
  const addTodo=(Todo)=>{
    setTodos((prevTodo)=>([{id:Date.now(),...Todo},...prevTodo]));
  }
const updateTodo=(Todo,id)=>{
  setTodos((prevTodo)=>(
    prevTodo.map((todo)=>(todo.id===id?Todo:todo))
  ))
}
const deleteTodo =(id)=>{
  setTodos((prevTodo)=>(
    prevTodo.filter((todo)=>todo.id!==id)
  ))
}
const toggleComplete=(id)=>{
  console.log(id)
  setTodos((prevTodo)=>(
    prevTodo.map((todo)=>(todo.id===id ?{...todo,complete:!todo.complete} : todo ))
  )
  )
}
useEffect(()=>{
  const storedTodos=JSON.parse(localStorage.getItem('todos'))
  if(storedTodos && storedTodos.length>0){
    setTodos(storedTodos)
  }
},[])
useEffect(()=>{
  localStorage.setItem('todos',JSON.stringify(Todos))
},[Todos])
  return (
    <TodoProvider value={{Todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
  
  <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                       {
                        Todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                              <TodoItem todo={todo}/>
                          </div>
                        ))
                       }
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
