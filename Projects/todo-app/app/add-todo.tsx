'use client';
import React from 'react'

async function addTodoItem(text:string) {
  // await fetch(`http://localhost:3001/api/todo/list`,{
  //   method:"POST",
  // })
  console.log(text);
  
}


export default function AddTodo() {
  return (
    <div>
    <input type="text" />
    <button type='submit' onClick={()=>addTodoItem('Aa')}>Add</button>
  </div>
  )
}
