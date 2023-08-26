"use client";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    const response = await res.json();
    console.log("response", response);
    if (response.status === 200) {
      router.push("/");
    } else {
      alert("Login failed");
    }
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>
          User Name
          <input type="text" name="username" placeholder="Username" />
        </label>
        <label>
          Password
          <input type="password" name="password" placeholder="Enter password" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default page;
