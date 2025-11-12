import React from 'react';

const BookCard = ({ title, author, price }) => {
  return (
    <div className="book-card">
      <div className="book-title">{title}</div>
      <div className="book-author">by {author}</div>
      <div className="book-price">₹{price}</div>
    </div>
  );
};

export default BookCard;
