// src/components/BookList.js
import React, { useState, useEffect } from 'react';
import Book from './Book';

const BookList = () => {
  const [books, setBooks] = useState([]);

  // Simulated data fetch (replace with actual API call)
  useEffect(() => {
    fetch('https://api.example.com/books')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className="book-list">
      {books.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
