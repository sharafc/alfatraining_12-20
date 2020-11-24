import React, { ReactElement } from "react";
import Thumbnail from "../../types/Thumbnail";

interface Props {
    thumbnail: Thumbnail;
}

export default function ThumbnailRenderer(props: Props): ReactElement {
    return (
        <img
            src={props.thumbnail.url}
            className="ui tiny image"
            alt={props.thumbnail.title}
        />
    );
}
