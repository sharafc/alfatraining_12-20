import React, { ReactElement } from 'react'
import Book from '../../types/BookBase';
import LoadingSpinner from '../assets/LoadingSpinner';
import StarIcon from '../assets/StarIcon';
import AuthorList from '../AuthorList';
import ImageRenderer from '../renderer/ImageRenderer';
import { useHistory, useParams } from 'react-router-dom';
import { useBookApi } from '../../hooks/useBookApi';
import axios from 'axios';

export default function BookDetails(): ReactElement {
    const { isbn } = useParams<{ isbn: string }>();
    const history = useHistory();
    const book = useBookApi<Book>("get", `books/${isbn}`)[0];

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
     * use JS history function to push history
     */
    const goToList = () => {
        history.push("/bookmonkey/books");
    };

    /**
     * Delete current book from store
     */
    const deleteBook = () => {
        axios({
            method: "delete",
            url: `https://api3.angular-buch.com/books/${isbn}`,
        }).then(goToList);
    };

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
            <button onClick={goToList} className="ui green button">
                Back to List
            </button>
            <button onClick={deleteBook} className="ui red button">
                Delete Book
            </button>
        </div>
    );
}
