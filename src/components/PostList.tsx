import React, { ReactElement } from "react";
import PostListItem from "./PostListItem";
import { posts } from "../shared/posts";

export default function PostList(): ReactElement {
    return (
        <div className="ui cards">
            {
                /**
                 * key attribute needed for iteration over virtualDOM of React
                 */
                posts.map(post => <PostListItem post={post}  key={post.id} />)
            }
        </div>
    );
}
