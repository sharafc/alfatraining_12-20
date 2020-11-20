import React, { ReactElement } from "react";
import PostListItem from "./PostListItem";
import { posts } from "../shared/posts";

export default function PostList(): ReactElement {
    return (
        <div className="ui cards">
            {
                posts.map(post => <PostListItem post={post}  key={post.id} />)
            }
        </div>
    );
}
