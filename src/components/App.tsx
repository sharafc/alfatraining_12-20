import React, { ReactElement } from "react";
import BookList from "./BookList";
import PostList from "./PostList";
import ClassCounter from "./ClassCounter";
import Post from "../types/Post";

export default function App(): ReactElement {

    const clickedPostItem = (post: Post): void => {
        console.log("Post: ", post);
    }

    return (
        <div className="ui container">
            <h1>My book list:</h1>
            <BookList />

            <h2>My posts:</h2>
            <PostList clickedPostItem={clickedPostItem} />
            {/**
             * Props in quotes always string, in expression of returned type
             */}
            <ClassCounter startValue={42} />
        </div>
    );
}
