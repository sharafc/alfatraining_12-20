import React, { ReactElement } from "react";
import Book from "../../types/BookBase";
import ImageRenderer from "../renderer/ImageRenderer";
import AuthorList from "../AuthorList";
import { Link } from "react-router-dom";

interface Props {
    readonly book: Book;
}

export default function BookListItem(props: Props): ReactElement {
    return (
        <Link to={`/bookmonkey/books/${props.book.isbn}`} className="item">
            
                {props.book.thumbnails ? <ImageRenderer thumbnails={props.book.thumbnails} singleView={true} /> : null}

                <div className="content">
                    <div className="header">{props.book.title}</div>
                    <div className="description">{props.book.subtitle}</div>
                    <div className="metadata">
                        {props.book.authors.map((author, index) => (
                            <AuthorList author={author} key={index} view="list" />
                        ))}
                        <br />
                        {props.book.isbn}
                    </div>
                </div>
           
        </Link>
    );
}
