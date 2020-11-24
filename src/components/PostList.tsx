import React, { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import PostListItem from "./PostListItem";
import Post from "../types/Post";

interface Props {
    clickedPostItem: (post: Post) => void;
}

export default function PostList(props: Props): ReactElement {
    const [posts, setPosts] = useState<Post[]>([]);

    /**
     * empty array doesn't trigger, only one call.
     * -> same as componentDidMount() on ClassComponent
     */
    useEffect(() => {
        axios
            .get("http://jsonplaceholder.typicode.com/posts/")
            .then((response) => {
                setPosts(response.data);
            });
    }, []);

    return (
        <div className="ui cards">
            {
                /**
                 * key attribute needed for iteration over virtualDOM of React
                 */
                posts.map((post) => (
                    <PostListItem
                        post={post}
                        key={post.id}
                        clickedPostItem={props.clickedPostItem}
                    />
                ))
            }
        </div>
    );
}
