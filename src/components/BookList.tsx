import React, { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import BookListItem from "./BookListItem";
import Book from "../types/Book";
import LoadingSpinner from "./assets/LoadingSpinner";

interface Props {
    clickedBook: (book: Book) => void;
    showList: () => void;
}

export default function PostList(props: Props): ReactElement {
    const BASE_URL = "https://api3.angular-buch.com/books";
    const [books, setBooks] = useState<Book[]>();

    const resetBookstore = (): void => {
        axios.delete(BASE_URL).then(() => {
            window.location.reload();
        });
    };

    useEffect(() => {
        axios.get(BASE_URL).then((response) => {
            setBooks(response.data);
        });
    }, []);

    if (!books) return <LoadingSpinner />;

    return (
        <div className="ui middle aligned selection divided list">
            <h1>Booklist</h1>
            {books.length === 0 ? (
                <div>
                    <p>No books available</p>
                    <button className="ui red button" onClick={resetBookstore}>Reset Bookstore</button>
                </div>
            ) : (
                books.map((book) => (
                    <BookListItem
                        book={book}
                        key={book.isbn}
                        clickedBook={props.clickedBook}
                    />
                ))
            )}
        </div>
    );
}
