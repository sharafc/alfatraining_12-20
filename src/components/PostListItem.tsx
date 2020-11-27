import React, { ReactElement } from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import Post from "../types/Post";

/**
 * Interface definition to state type definition for props to not use :any which TypeScript doesn't like
 * Also readonly because Props are always readonly in the Component. By this we already get a TypeScript error
 * on transpile and not later in the browser
 */
interface Props {
    readonly post: Post;
}

export default function PostListItem(props: Props): ReactElement {    
    const post = props.post;
    const { url } = useRouteMatch();
    
    return (
        <Link to={`${url}/${post.id}`} className="card">
            <div className="content">
                <div className="header">{post.title}</div>
                <div className="description">{post.body}</div>
            </div>
            <div className="extra content">
                User Id: {post.userId} Post Id: {post.id}
            </div>
        </Link>
    );
}
