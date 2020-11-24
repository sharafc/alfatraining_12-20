import React, { ReactElement } from 'react'
import Book from '../types/Book';
import StarIcon from './assets/StarIcon';
import AuthorList from './AuthorList';
import ImageRenderer from './renderer/ImageRenderer';

interface Props {
    selectedBook: Book;
    showList: () => void;
}

export default function BookDetails(props: Props): ReactElement {

    const getRatings = (): number[] => {
        const ratingArray = [];
        for (let i = 0; i < (props.selectedBook.rating || 0); i++) {
            ratingArray.push(i);
        }
        return ratingArray;
    };

    return (
        <div>
            <h1>{props.selectedBook.title}</h1>
            <h3>{props.selectedBook.subtitle}</h3>
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
                    {props.selectedBook.published.toLocaleDateString()}
                </div>
                <div className="four wide column">
                    <h4>Rating</h4>
                    {getRatings().map((acc) => {
                        return <StarIcon key={acc} />;
                    })}
                </div>
            </div>
            <h4>Beschreibung</h4>
            {props.selectedBook.description}
            <div className="ui small images">
                {props.selectedBook.thumbnails ? (
                    <ImageRenderer thumbnails={props.selectedBook.thumbnails} />
                ) : null}
            </div>
            <button onClick={props.showList} className="ui red button">
                Back to List
            </button>
        </div>
    );
}
