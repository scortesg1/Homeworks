import React from 'react'

function TodoList({todos = []}) {
  return (
      <ul>
          {
           todos.map( (todo, key) => {
               return(
                   <TodoItem key={key} todo={todo}></TodoItem>
               )
           })   
          }
      </ul>
  )
}

export default TodoList