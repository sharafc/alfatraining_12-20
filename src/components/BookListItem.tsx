import React, { ReactElement } from "react";
import Book from "../types/Book";
import ImageRenderer from "./renderer/ImageRenderer";
import AuthorList from "./AuthorList";

interface Props {
    readonly book: Book;
    clickedBook: (book: Book) => void;
}

export default function BookListItem(props: Props): ReactElement {
    return (
        <div className="item" onClick={() => props.clickedBook(props.book)}>
            {
                props.book.thumbnails ? <ImageRenderer thumbnails={props.book.thumbnails} /> : null
            }
            
            <div className="content">
                <div className="header">{props.book.title}</div>
                <div className="description">{props.book.description}</div>
                <div className="metadata">
                    {props.book.authors.map((author, index) => (
                        <AuthorList author={author} key={index} />
                    ))}
                    <br />
                    {props.book.isbn}
                </div>
            </div>
        </div>
    );
}
