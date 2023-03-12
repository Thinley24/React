import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {

  let myStyle = {
    minHeight: "70vh",
    margin: "10px auto"
  }

  return (
    <div className='container' style={myStyle}>
      <h3 className='text-center my-3'>Todos List</h3>

      {props.todos.length===0? <p><i>SORRY!</i>... No Todos to display</p>:
      
      props.todos.map((todo)=>{ //rendering all todo list using a loop as follows
        return (
          <>
            <TodoItem todo={todo} key={todo.slno} onDelete={props.onDelete}/><hr/>
          </>
        )
      })
      }

      {/* <TodoItem todo={props.todos[0]}/>
      <TodoItem todo={props.todos[1]}/> */}
    </div>
  )
}

