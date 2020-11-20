import React, { ReactElement } from "react";
import BookListItem from "./BookListItem";
import { books } from "../shared/books";

export default function PostList(): ReactElement {
    return (
        <div className="ui middle aligned selection divided list">
            {books.map((book) => (
                <BookListItem book={book} key={book.isbn} thumbnail={book.thumbnails[0]} />
            ))}
        </div>
    );
}
