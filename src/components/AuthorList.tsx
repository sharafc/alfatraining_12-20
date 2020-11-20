import React, { ReactElement } from "react";

interface Props {
    readonly author: string;
}

export default function AuthorList(props: Props): ReactElement {
    return (
        <span>
            { props.author }&nbsp;
        </span>
    );
}
