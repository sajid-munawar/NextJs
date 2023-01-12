"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

async function addTodoItem(name: string, refresh: { (): void; (): void }) {
  await fetch(`/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });
  refresh();
}

export default function AddTodo() {
  let router = useRouter();
  let [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button type="submit"
       onClick={ async()=>{
         await addTodoItem(name, router.refresh)
         setName('')
        }}>
        Add
      </button>
    </div>
  );
}
