import React from "react";
import { Todo } from "../lib/drizzle";

const getData = async () => {
  const url = process.env.URL || "http://127.0.0.1:3000";
  const res = await fetch(`${url}/api/todo`, {
    cache: "no-cache",
  });
  const data = await res.json();
  console.log("data :>> ", data);
  return data;
};
const ItemsList = async () => {
  const data: Todo[] = await getData();
  return (
    <>
      {data &&
        data.map((item: Todo) => (
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
