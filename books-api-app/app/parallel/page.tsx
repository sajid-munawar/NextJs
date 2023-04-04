import React from "react";

type BOOK = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};

const getFiction = async () => {
  const res = await fetch("https://simple-books-api.glitch.me/books?type=fiction",{
    cache: 'no-cache',
  });
  const books = await res.json();
  return books;
};
const getNonFiction = async () => {
    const res = await fetch("https://simple-books-api.glitch.me/books?type=non-fiction",{
      cache: 'no-cache',
    });
    const books = await res.json();
    return books;
  };

const Parallel = async () => {
    const fiction = getFiction();
    const nonFiction = getNonFiction();
    const [fictionBooks,nonFictionBooks] = await Promise.all([fiction,nonFiction]);
  return (
    <div>
      <h1>Parallel</h1>
      <h2>Fiction Books</h2>
      <ul>
        {fictionBooks.map((book: BOOK) => (
          <>
            <li key={book.id}>
              {book.name} - {book.type} -{" "}
              {book.available ? "Available" : "Not available"}
            </li>
          </>
        ))}
      </ul>
      <h2>Non Fiction Books</h2>
      <ul>
        {nonFictionBooks.map((book: BOOK) => (
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

export default Parallel;
