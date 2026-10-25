import React, { use } from 'react';
import { useParams } from 'react-router';
import booksPromise from '../../data/books';
import ErrorPage from '../ErrorPage/ErrorPage';

const BooksDetails = () => {
    const { id } = useParams();
    const books = use(booksPromise);
    const book = books.find((item) => item.bookId === Number(id));

    if (!book) {
        return <ErrorPage />;
    }

    return (
        <main className="mx-auto grid w-10/12 max-w-6xl gap-8 py-8 md:grid-cols-2 md:items-start">
            <div className="flex min-h-[350px] items-center justify-center rounded-xl bg-[#f3f3f3] p-8 sm:min-h-[420px]">
                <img
                    src={book.image}
                    alt={book.bookName}
                    className="max-h-[360px] w-auto max-w-full object-contain"
                />
            </div>

            <section aria-labelledby="book-title">
                <h1 id="book-title" className="text-3xl font-bold text-[#131313]">
                    {book.bookName}
                </h1>
                <p className="mt-2 text-sm text-base-content/80">By: {book.author}</p>

                <p className="mt-4 border-y border-base-300 py-3 text-sm">
                    {book.category}
                </p>

                <div className="border-b border-base-300 py-4">
                    <h2 className="mb-2 text-sm font-bold">Review:</h2>
                    <p className="text-sm leading-6 text-base-content/70">{book.review}</p>
                </div>

                <div className="flex flex-wrap items-center gap-2 border-b border-base-300 py-4">
                    <span className="text-sm font-bold">Tags</span>
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                <dl className="grid grid-cols-[1fr_2fr] gap-x-4 gap-y-3 py-4 text-sm">
                    <dt className="text-base-content/70">Number of Pages:</dt>
                    <dd className="font-semibold">{book.totalPages}</dd>
                    <dt className="text-base-content/70">Publisher:</dt>
                    <dd className="font-semibold">{book.publisher}</dd>
                    <dt className="text-base-content/70">Year of Publishing:</dt>
                    <dd className="font-semibold">{book.yearOfPublishing}</dd>
                    <dt className="text-base-content/70">Rating:</dt>
                    <dd className="font-semibold">{book.rating}</dd>
                </dl>

                <div className="flex gap-3">
                    <button type="button" className="btn btn-outline btn-sm">
                        Read
                    </button>
                    <button
                        type="button"
                        className="btn btn-sm border-0 bg-cyan-500 text-white hover:bg-cyan-600"
                    >
                        Wishlist
                    </button>
                </div>
            </section>
        </main>
    );
};

export default BooksDetails;