import React, { ReactElement } from 'react'
import Book from '../types/Book';
import AuthorList from './AuthorList';

interface Props {
    selectedBook: Book;
    showList: () => void;
}

export default function BookDetails(props: Props): ReactElement {
    return (
        <div>
            <h1>{props.selectedBook.title}</h1>
            <div className="ui divider"></div>
            <div className="ui grid">
                <div className="four wide column">
                    <h4>Autoren</h4>
                    {props.selectedBook.authors.map((author, index) => (
                        <AuthorList author={author} key={index} />
                    ))}
                </div>
                <div className="four wide column">
                    <h4>ISBN</h4>
                    {props.selectedBook.isbn}
                </div>
                <div className="four wide column">
                    <h4>Erschienen</h4>
                    { (props.selectedBook.published).toLocaleDateString() }
                </div>
                <div className="four wide column">
                    <h4>Rating</h4>
                    BOOK_RATING mit getRatings Methode mappen und jeweils ein
                    icon mit css Klassen yellow star icon setzen
                </div>
                <h4>Beschreibung</h4>
                {props.selectedBook.description}
                <div className="ui small images">
                    BOOK_THUMBNAILS jeweils zu einem img Element mappen
                </div>
            </div>
            <button onClick={() => { props.showList }}>Back to List</button>
        </div>
    );
}
