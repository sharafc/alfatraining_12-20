import React, { ReactElement } from "react";
import Book from "../types/Book";
import Thumbnail from "../types/Thumbnail";
import AuthorList from "./AuthorList";

interface Props {
    readonly book: Book;
    readonly thumbnail: Thumbnail;
}

export default function PostListItem(props: Props): ReactElement {
    return (
        <div className="item">
            <img
                className="ui tiny image"
                alt={props.thumbnail.title ? props.thumbnail.title : ""}
                src={props.thumbnail.url}
            />
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
