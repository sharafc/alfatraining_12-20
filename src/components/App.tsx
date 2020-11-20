import React, { ReactElement } from "react";
import BookList from "./BookList";
import PostList from "./PostList";
import ClassCounter from "./ClassCounter";

export default function App(): ReactElement {
    return (
        <div className="ui container">
            <h1>My book list:</h1>
            <BookList />

            <h2>My posts:</h2>
            <PostList />
            {/**
             * Props in quotes always string, in expression of returned type
             */}
            <ClassCounter startValue={42} />
        </div>
    );
}
