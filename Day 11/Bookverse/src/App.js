import React, { useState } from 'react';
import BookList from './components/BookList';

export default function App() {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const featuredBooks = [
    { id: 1, title: 'The Silent Patient', author: 'Alex Michaelides', price: 499 },
    { id: 2, title: 'Atomic Habits', author: 'James Clear', price: 399 },
    { id: 3, title: 'Ikigai', author: 'Héctor García', price: 299 },
    { id: 4, title: 'The Psychology of Money', author: 'Morgan Housel', price: 359 },
  ];

  const filteredBooks = featuredBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <header className="header">
        <h1>BookVerse</h1>
        <div>
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className={viewMode === 'grid' ? 'active' : ''}
            onClick={() => setViewMode('grid')}
          >
            Grid
          </button>
          <button
            className={viewMode === 'list' ? 'active' : ''}
            onClick={() => setViewMode('list')}
          >
            List
          </button>
        </div>
      </header>

      <BookList books={filteredBooks} viewMode={viewMode} />
    </div>
  );
}
