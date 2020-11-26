import React, { ReactElement, useState } from "react";
import BookList from "../BookList/BookList";
import BookDetails from "../BookDetails/BookDetails";
import Book from "../../types/Book";

type ViewState = "list" | "detail";

export default function BookMonkey(): ReactElement {
    const [viewState, setViewState] = useState<ViewState>("list");
    const [book, setBook] = useState<Book>();

    const clickedBook = (currentBook: Book): void => {
        setBook(book ? undefined : currentBook);
        setViewState("detail");
    };

    const showList = (): void => {
        setBook(undefined);
        setViewState("list");
    }

    const selectBookView = () => {
        if (viewState === "list") {
            return <BookList clickedBook={clickedBook} showList={showList} />;
        }
        if (viewState === "detail" && book) {
            return <BookDetails selectedBook={book.isbn} showList={showList} />;
        }
    };

    return (
        <div className="ui container">
            {/**
             * defer logic of choosing correct template to its own function
             */}
            {selectBookView()}
        </div>
    );
}
