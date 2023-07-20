"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

const DeleteItem = ({ id }: { id: number }) => {
  const { refresh } = useRouter();
  const handleDelete = async () => {
    try {
      if (id) {
        const res = await fetch(`/api/todo/?id=${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          refresh();
          toast.success("Task deleted successfully");
          const data = await res.json();
          // Handle the response data here, if needed
          console.log(data);
        } else {
          // Handle non-successful response (e.g., 404 Not Found)
          console.error("Error:", res.status, res.statusText);
        }
      } else {
        console.error('Error: "id" is missing or falsy.');
      }
    } catch (error) {
      // Handle any other errors that occurred during the request
      console.error("Error:", error);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        rtl={false}
        theme="light"
      />
      <div>
        <button
          type="button"
          className="shrink-0 rounded-full bg-gradient-to-b from-seconday to-primary p-2"
          onClick={handleDelete}
        ></button>
      </div>
    </>
  );
};

export default DeleteItem;