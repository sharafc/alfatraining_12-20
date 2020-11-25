import React, { ReactElement } from 'react'
import Thumbnail from '../../types/Thumbnail';
import ThumbnailRenderer from "./ThumbnailRenderer";

interface Props {
    thumbnails: Thumbnail[];
    singleView: boolean;
}

export default function ImageRenderer(props: Props): ReactElement {
    return (
        <>
            {props.singleView ? (
                <ThumbnailRenderer thumbnail={props.thumbnails[0]} key={props.thumbnails[0].url} />
            ) : (
                props.thumbnails.map((thumbnail) => {
                    return (
                        <ThumbnailRenderer
                            thumbnail={thumbnail}
                            key={thumbnail.url}
                        />
                    );
                })
            )}
        </>
    );
}
