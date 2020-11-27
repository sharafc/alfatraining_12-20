import React, { ReactElement } from "react";
import PostListItem from "./PostListItem";
import Post from "../types/Post";
import LoadingSpinner from "./assets/LoadingSpinner";
import { usePostApi } from "../shared/PostApi";

export default function PostList(): ReactElement {
    const posts = usePostApi<Post[]>("GET", "posts");

    if (!posts) {
        return <LoadingSpinner />
    }

    return (
        <div className="ui cards">
            {
                /**
                 * key attribute needed for iteration over virtualDOM of React
                 */
                posts.map(post => (
                    <PostListItem
                        post={post}
                        key={post.id}
                    />
                ))
            }
        </div>
    );
}
