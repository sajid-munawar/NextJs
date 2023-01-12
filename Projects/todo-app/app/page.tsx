import React from 'react'


let todos=async function(){
  let res=await fetch('http://localhost:3001/api/todo/list')
  let data=await res.json()
  console.log('AAAAAAAAAAAAAAAAAAaa',data.todos)
  return data.todos
}
todos()

export default function Page() {
  return (
    <div>
      <div>
      <input type="text" />
      <button type='submit'>Add</button>
    </div>
    </div>
  )
}
