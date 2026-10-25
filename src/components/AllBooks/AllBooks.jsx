import React, { use } from 'react';

const booksPromise = fetch('/booksData.json').then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);

  return (
    <section className="all-books-wrapper">
      <div className="all-books-grid">
        {books.slice(0, 9).map((book) => (
          <article key={book.bookId} className="book-card">
            <div className="book-cover-box">
              <img src={book.image} alt={book.bookName} className="book-cover" />
            </div>

            <div className="book-tags">
              {book.tags.slice(0, 2).map((tag, index) => (
                <span key={`${book.bookId}-${tag}-${index}`} className="book-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="book-details">
              <h3 className="book-title">{book.bookName}</h3>
              <p className="book-author">By: {book.author}</p>
            </div>

            <div className="book-footer">
              <span className="book-category">{book.category}</span>
              <span className="book-rating">★ {Number(book.rating).toFixed(2)}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AllBooks;