import React from "react";
import { Todo } from "../lib/drizzle";
import DeleteItem from "./DeleteItem";

const getData = async () => {
  const url = process.env.URL || "http://127.0.0.1:3000";
  const res = await fetch(`${url}/api/todo`, {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
};
const ItemsList = async () => {
  const data: Todo[] = await getData();
  return (
    <>
      <div className="mb-4 max-h-96 overflow-y-auto px-2 pt-4">
        {data &&
          data.map((item: Todo) => (
            <div
              className="mb-3 flex  w-full items-center gap-4 rounded-lg bg-white px-3 py-2"
              key={item.id}
            >
              {/* circle */}
              <div className="rounded-full bg-seconday p-1"></div>
              {/* Text */}
              <div>{item.task}</div>
              <div className="ml-auto cursor-pointer">
                <DeleteItem id={item.id} />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ItemsList;
