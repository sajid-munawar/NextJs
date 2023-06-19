import React from "react";
import { Todo } from "../lib/drizzle";

const getData = async () => {
  const res = await fetch("http://127.0.0.1:3000/api/todo");
  const data = await res.json();
  return data;
};
const ItemsList = async () => {
  const data: { data: Todo[] } = await getData();
  console.log("data from items list", data);
  return (
    <>
      {data.data.map((item: Todo) => (
        <div
          className="mb-3 flex w-full items-center gap-4 rounded-lg bg-white px-3 py-2"
          key={item.id}
        >
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
