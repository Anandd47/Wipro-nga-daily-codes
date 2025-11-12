import React from 'react';
import BookCard from './Bookcard';

const BookList = ({ books, viewMode }) => {
  if (!books.length) {
    return <p>No books found.</p>;
  }

  return (
    <div className={viewMode === 'grid' ? 'grid' : 'list'}>
      {books.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  );
};

export default BookList;
