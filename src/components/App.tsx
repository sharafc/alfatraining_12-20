import React, { ReactElement, useState } from "react";
import BookList from "./BookList";
import PostList from "./PostList";
import ClassCounter from "./ClassCounter";
import Post from "../types/Post";
import PostDetails from "./PostDetails";

export default function App(): ReactElement {

    // object, function
    const [post, setPost] = useState<Post>();

    const clickedPostItem = (currentPost: Post): void => {
        console.log("Post: ", currentPost);
        setPost(post ? undefined : currentPost);
    } 

    return (
        <div className="ui container">
            <h1>My book list:</h1>
            <BookList />

            <h2>My posts:</h2>
            {
                post ? (
                  <PostDetails post={post} clickedPostItem={clickedPostItem} />
                ) : <PostList clickedPostItem={clickedPostItem} />
            }

            {JSON.stringify(post || {})}
            
            {/**
             * Props in quotes always string, in expression of returned type
             */}
            <ClassCounter startValue={42} />
        </div>
    );
}

