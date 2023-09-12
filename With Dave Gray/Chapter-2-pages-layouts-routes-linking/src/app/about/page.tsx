import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

const page = () => {
  // throw new Error("Something went wrong!");
  return (
    <>
      <main className={styles.main}>
        <h1>About page</h1>
        <Link href="/">Go to home</Link>
      </main>
    </>
  );
};

export default page;
