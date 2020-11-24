import React, { ReactElement } from 'react'
import Thumbnail from '../../types/Thumbnail';
import ThumbnailRenderer from "./ThumbnailRenderer";

interface Props {
    thumbnails: Thumbnail[];
}

export default function ImageRenderer(props: Props): ReactElement {
    return (
        <>
            {
                props.thumbnails.map((thumbnail) => {
                    return (
                        <ThumbnailRenderer
                            thumbnail={thumbnail}
                            key={thumbnail.url}
                        />
                    );
                })
            }            
        </>
    );
}
