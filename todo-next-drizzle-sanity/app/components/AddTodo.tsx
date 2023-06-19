"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { NewTodo } from "../lib/drizzle";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

const AddTodo = () => {
  const { refresh } = useRouter();
  const [task, setTask] = useState<NewTodo | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    try {
      if (task) {
        const res = await fetch("/api/todo", {
          method: "POST",
          body: JSON.stringify({ task: task.task }),
        });
        console.log(res.ok);
        (inputRef.current as HTMLInputElement).value = "";
        toast("Task added successfully");
        refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <form className="flex gap-3">
          <input
            ref={inputRef}
            placeholder="Write a new task"
            type="text"
            className="w-full rounded-full px-3 py-2 focus:outline-seconday"
            onChange={(e) => setTask({ task: e.target.value })}
          />
          <button
            type="button"
            className="shrink-0 rounded-full bg-gradient-to-b from-seconday to-primary p-2"
            onClick={handleSubmit}
          >
            <Image src={"/Vector.svg"} width={20} height={20} alt="save" />
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddTodo;
