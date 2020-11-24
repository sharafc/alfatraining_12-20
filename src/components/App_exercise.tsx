import React, { ReactElement, useState } from "react";
import ClassCounter from "./ClassCounter";
import PostList from "./PostList";
import PostDetails from "./PostDetails";
import Post from "../types/Post";


export default function App(): ReactElement {
    // object, function
    const [post, setPost] = useState<Post>();
    const clickedPostItem = (currentPost: Post): void => {
        console.log("Post: ", currentPost);
        setPost(post ? undefined : currentPost);
    };

    return (
        <div className="ui container">            
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
