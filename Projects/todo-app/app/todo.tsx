"use client";
import React from "react";
import { useRouter } from "next/navigation";

async function update(
  id: string,
  isDone: boolean,
  refresh: { (): void; (): void }
) {
  await fetch("/api/todo/update", {
    method: "POST",
    body: JSON.stringify({ id, isDone }),
  });
  refresh();
}

let deleteTodo = async (id: string, refresh: { (): void; (): void }) => {
  await fetch(`/api/todo/delete?id=${id}`, {
    method: "DELETE",
  });
  refresh();
};

/*
Alternate code
async function deleteTodo(id: string, refresh: { (): void; (): void }){
    await fetch(`/api/todo/delete?id=${id}`, {
      method: "DELETE",
    });
    refresh();
  };
  */

export default function Todo({
  todo,
}: {
  todo: { id: string; name: string; isDone: boolean };
}) {
  const router = useRouter();
  return (
    <>
      <input
        type="checkbox"
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
          update(todo.id, ev.target.checked, router.refresh)
        }
        checked={todo.isDone}
      />
      {todo.name}
      <button onClick={() => deleteTodo(todo.id, router.refresh)}>
        Delete
      </button>
    </>
  );
}
// }
