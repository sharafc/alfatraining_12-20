import React, { ReactElement } from "react";
import PostListItem from "./PostListItem";
import Post from "../types/Post";
import { posts } from "../shared/posts";

interface Props {
    clickedPostItem: (post: Post) => void;
}

export default function PostList(props: Props): ReactElement {
    return (
        <div className="ui cards">
            {
                /**
                 * key attribute needed for iteration over virtualDOM of React
                 */
                posts.map(post => <PostListItem post={post} key={post.id} clickedPostItem={props.clickedPostItem} />)
            }
        </div>
    );
}
