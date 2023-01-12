import React from "react";
import AddTodo from "./add-todo";
import Todo from "./todo";

let getTodo = async function () {
  let todos = await fetch("http://localhost:3001/api/todo/list");
  return todos.json();
};

export default async function Page() {
  let { todos } = await getTodo();
  return (
    <div>
      <AddTodo />
      <div>
        <ul style={{ listStyle: "none"}}>
          {todos.map((t: { id: string; name: string; isDone: boolean }) => {
            return (
              <li key={t.id} style={{ display:'flex',justifyContent:'space-between',maxWidth:185 }}>
                <Todo todo={t} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
