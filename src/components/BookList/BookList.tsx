import React, { ReactElement } from "react";
import BookListItem from "../BookListItem";
import Book from "../../types/BookBase";
import LoadingSpinner from "../assets/LoadingSpinner";
import bookApi from "../../shared/BookApi";
import { useBookApi } from "../../hooks/useBookApi";

export default function BookList(): ReactElement {
    const [books, setBooks] = useBookApi<Book[]>("get", "books");
    
    const resetBookstore = (): void => {
        bookApi<string>("delete", "books", () => {
            bookApi<Book[]>("get", "books", setBooks);
        });
    };

    if (!books) return <LoadingSpinner />;

    return (
        <div className="ui middle aligned selection divided list">
            <h1>Booklist</h1>
            {books.length === 0 ? (
                <div>
                    <p>No books available</p>
                    <button className="ui red button" onClick={resetBookstore}>
                        Reset Bookstore
                    </button>
                </div>
            ) : (
                books.map((book) => (
                    <BookListItem
                        book={book}
                        key={book.isbn}
                    />
                ))
            )}
        </div>
    );
}
