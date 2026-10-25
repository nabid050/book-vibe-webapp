import { use, useMemo, useState } from 'react';
import { Link } from 'react-router';
import booksPromise from '../../data/books';

const Books = () => {
    const books = use(booksPromise);
    const [activeTab, setActiveTab] = useState('read');
    const [sortBy, setSortBy] = useState('');

    const sortedBooks = useMemo(() => {
        if (!sortBy) return books;

        return [...books].sort((firstBook, secondBook) => {
            if (sortBy === 'rating') {
                return Number(secondBook.rating) - Number(firstBook.rating);
            }

            if (sortBy === 'pages') {
                return Number(secondBook.totalPages) - Number(firstBook.totalPages);
            }

            return Number(secondBook.yearOfPublishing) - Number(firstBook.yearOfPublishing);
        });
    }, [books, sortBy]);

    return (
        <main className="books-page">
            <header className="books-heading">
                <h1>Books</h1>
            </header>

            <div className="books-sort-wrapper">
                <button type="button" className="books-sort-btn">
                    Sort By
                </button>
            </div>

            <div className="books-tabs" role="tablist" aria-label="Book list tabs">
                <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'read'}
                    className={activeTab === 'read' ? 'books-tab active' : 'books-tab'}
                    onClick={() => setActiveTab('read')}
                >
                    Read Books
                </button>
                <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'wishlist'}
                    className={activeTab === 'wishlist' ? 'books-tab active' : 'books-tab'}
                    onClick={() => setActiveTab('wishlist')}
                >
                    Wishlist Books
                </button>
            </div>

            {activeTab === 'read' ? (
                <section className="books-list" role="tabpanel">
                    {sortedBooks.map((book) => (
                        <article className="book-list-item" key={book.bookId}>
                            <div className="book-list-cover">
                                <img src={book.image} alt={book.bookName} />
                            </div>

                            <div className="book-list-body">
                                <h2>{book.bookName}</h2>
                                <p className="book-list-author">By: {book.author}</p>

                                <div className="book-list-tags">
                                    {book.tags.slice(0, 2).map((tag) => (
                                        <span key={`${book.bookId}-${tag}`} className="book-list-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="book-list-details">
                                    <span>
                                        <strong>Year:</strong> {book.yearOfPublishing}
                                    </span>
                                    <span>
                                        <strong>Publisher:</strong> {book.publisher}
                                    </span>
                                    <span>
                                        <strong>Pages:</strong> {book.totalPages}
                                    </span>
                                </div>

                                <div className="book-list-actions">
                                    <span className="book-list-category">{book.category}</span>
                                    <span className="book-list-rating">★ {Number(book.rating).toFixed(1)}</span>
                                    <Link to={`/bookDetails/${book.bookId}`} className="book-list-link">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            ) : (
                <div className="wishlist-empty" role="tabpanel">
                    <p>No books in wishlist yet.</p>
                </div>
            )}
        </main>
    );
};

export default Books;