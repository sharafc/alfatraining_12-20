import React, { ReactElement, useEffect, useState } from 'react'
import Book from '../../types/Book';
import LoadingSpinner from '../assets/LoadingSpinner';
import StarIcon from '../assets/StarIcon';
import AuthorList from '../AuthorList';
import ImageRenderer from '../renderer/ImageRenderer';
import bookApi from '../../shared/BookApi';

interface Props {
    selectedBook: string;
    showList: () => void;
}

export default function BookDetails(props: Props): ReactElement {
    const [book, setBook] = useState<Book>();

    /**
     * get ratings from Book API
     */
    const getRatings = (): number[] => {
        const ratingArray = [];
        if (book) {
            for (let i = 0; i < (book.rating || 0); i++) {
                ratingArray.push(i);
            }
        }        
        return ratingArray;
    };

    /**
     * Delete current book from store
     */
    const deleteBook = (): void => {
        bookApi("DELETE", "books/" + props.selectedBook, props.showList);
    }

    useEffect(() => {
        bookApi("GET", "books/" + props.selectedBook, setBook);
    }, [props.selectedBook]);

    /**
     * Guardian: Return if book is not available
     */
    if (!book) return <LoadingSpinner />;

    return (
        <div>
            <h1>{book.title}</h1>
            <h3>{book.subtitle}</h3>
            <div className="ui divider"></div>
            <div className="ui grid">
                <div className="four wide column">
                    <h4>Autoren</h4>
                    {book.authors.map((author, index) => (
                        <AuthorList author={author} key={index} view="detail" />
                    ))}
                </div>
                <div className="four wide column">
                    <h4>ISBN</h4>
                    <span>{book.isbn}</span>
                </div>
                <div className="four wide column">
                    <h4>Erschienen</h4>
                    <span>{new Date(book.published).toLocaleDateString()}</span>
                </div>
                <div className="four wide column">
                    <h4>Rating</h4>
                    <span>
                        {getRatings().map((acc) => {
                            return <StarIcon key={acc} />;
                        })}
                    </span>
                </div>
            </div>
            <h4>Beschreibung</h4>
            {book.description}
            <div className="ui small images">
                {book.thumbnails ? (
                    <ImageRenderer
                        thumbnails={book.thumbnails}
                        singleView={false}
                    />
                ) : null}
            </div>
            <button onClick={props.showList} className="ui red button">
                Back to List
            </button>
            <button onClick={deleteBook} className="ui red button">
                Delete Book
            </button>
        </div>
    );
}
