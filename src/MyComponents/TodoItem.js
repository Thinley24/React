import React from 'react'

export const TodoItem = ({todo, onDelete}) => { //destructuring instead of using props
  return (
    <div>
      <h4><i>{todo.slno}.</i> {todo.title}</h4>
      <p><i>{todo.desc}</i></p>
      <button type='button' className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
} 
