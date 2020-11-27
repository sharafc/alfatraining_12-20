import React, { ReactElement } from "react";
import { useHistory, useParams } from "react-router-dom";
import { usePostApi } from "../shared/PostApi";
import Post from "../types/Post";
import PostListItem from "./PostListItem";

export default function PostDetails(): ReactElement {
    const { postId } = useParams<{ postId: string }>();
    const history = useHistory();
    const post = usePostApi<Post>("GET", `posts/${postId}`);

    if (!post) {
        return <p>Lade</p>;
    }

    const onGoToNext = () => {
        if (window.confirm("Sure?")) {
            history.push(`/posts/${+postId + 1}`);
        }
    };

    return (
        <>
            <div className="ui cards">
                <PostListItem post={post} />
            </div>

            <button className="ui button" onClick={onGoToNext}>
                Go To Next
            </button>
            <button className="ui button" onClick={history.goBack}>
                Go Back
            </button>
        </>
    );
}
