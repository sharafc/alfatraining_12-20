import React, { ReactElement } from 'react'
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
    return (
        <div className="card">
            <div className="content">
                <div className="header">{props.post.title}</div>
                <div className="description">{props.post.body}</div>
            </div>
            <div className="extra content">
                User Id: {props.post.userId} Post Id: {props.post.id}
            </div>
        </div>
    );
}
