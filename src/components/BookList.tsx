import React, { ReactElement } from "react";
import BookListItem from "./BookListItem";
import { books } from "../shared/books";
import Book from "../types/Book";

interface Props {
    clickedBook: (book: Book) => void;
}

export default function PostList(props: Props): ReactElement {
    return (
        <div className="ui middle aligned selection divided list">
            {books.map((book) => (
                <BookListItem
                    book={book}
                    key={book.isbn}
                    thumbnail={book.thumbnails[0]}
                    clickedBook={props.clickedBook}
                />
            ))}
        </div>
    );
}
