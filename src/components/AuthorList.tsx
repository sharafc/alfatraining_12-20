import React, { ReactElement } from "react";

interface Props {
    readonly author: string;
    readonly view: string;
}

export default function AuthorList(props: Props): ReactElement {
    return (
        <span>
            {props.author}
            {/**
             * Fragment <></> for easy rendering of HTML
             */}
            {props.view === "detail" ? <br /> : <>,&nbsp;</> }
        </span>
    );
}
