import React from 'react'

const DisplayTodo = ({allTodo}) => {
 
  return (
    <>
      {allTodo.map((eachTodo)=>(
        <div>
          <h1>{eachTodo}</h1>
        </div>
      ))}
    </>
  )
}

export default DisplayTodo