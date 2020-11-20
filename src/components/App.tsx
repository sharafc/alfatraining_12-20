import React, { ReactElement } from "react";
import ClassCounter from "./ClassCounter";
import PostList from "./PostList";

export default function App(): ReactElement {
    return (
        <div className="ui container">
            <h1>List of posts:</h1>

            <PostList />

            {/**
             * Props in quotes always string, in expression of returned type
             */}
            <ClassCounter startValue={42} />
        </div>
    );
}
