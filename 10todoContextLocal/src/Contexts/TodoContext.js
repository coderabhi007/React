import React from 'react';
export const TodoContext=React.createContext({
    Todos : [{
    }], 
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=> {},
    toggleComplete:(id)=>{}

})

export const TodoProvider =TodoContext.Provider
export const useTodo=()=>{
    return React.useContext(TodoContext)
}

