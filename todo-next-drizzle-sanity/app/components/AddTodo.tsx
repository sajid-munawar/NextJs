import Image from "next/image";
import React from "react";

const AddTodo = () => {
  return (
    <div>
      <form className="flex gap-3">
        <input
          placeholder="Write a new task"
          type="text"
          className="w-full rounded-full px-3 py-2 focus:outline-seconday"
        />
        <button
          type="button"
          className="shrink-0 rounded-full bg-gradient-to-b from-seconday to-primary p-2"
        >
          <Image src={"/Vector.svg"} width={20} height={20} alt="save" />
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
