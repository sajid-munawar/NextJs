import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <h1 className="underline  font-bold text-3xl">Hello, Next.js!</h1>
      <h1
        style={{
          color: "blue",
          lineHeight: 2,
          padding: 5,
          textAlign: "center",
        }}
      >
        Home page
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingLeft: 150,
        }}
      >
        <Link href="/student">Student</Link>
        <br />
        <Link href="/student/name">Name</Link>
        <br />
        <Link href="/student/city">City</Link>
        <br />
        <br />
        <br />
        <br />
      </div>
      <h2>This is home page</h2>
      <Link href="/address">Adress bar testing</Link>
    </>
  );
}
