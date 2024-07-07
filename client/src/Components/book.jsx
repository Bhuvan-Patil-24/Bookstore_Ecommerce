
// src/components/Book.js
import React from 'react';

const Book = ({ book }) => {
  return (
    <div className="book">
      <img src={book.imageUrl} alt={book.title} />
      <div className="book-details">
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <p>${book.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Book;
