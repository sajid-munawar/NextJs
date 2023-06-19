import React from "react";
import { Todo } from "../lib/drizzle";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/todo");
  const data = await res.json();
  return data.data;
};

const ItemsList = async () => {
  const data: Todo[] = await getData();
  console.log(data);
  return (
    <>
      {data.map((item: Todo) => (
        <div className="mb-3 flex w-full items-center gap-4 rounded-lg bg-white px-3 py-2">
          {/* circle */}
          <div className="rounded-full bg-seconday p-1"></div>
          {/* Text */}
          {item.task}
        </div>
      ))}
    </>
  );
};

export default ItemsList;
