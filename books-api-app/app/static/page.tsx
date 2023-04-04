import React from "react";

type BOOK = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};

const getBooks = async () => {
  const res = await fetch("https://simple-books-api.glitch.me/books");
  const books = await res.json();
  return books;
};

const Static = async () => {
  const books = await getBooks();
  console.log(books);
  return (
    <div>
      <h1>Static</h1>
      <ul>
        {books.map((book: BOOK) => (
          <>
            <li key={book.id}>
              {book.name} - {book.type} -{" "}
              {book.available ? "Available" : "Not available"}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Static;
