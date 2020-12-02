import React, { ReactElement } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

interface Props {
    children: ReactElement;
}

export default function BookMonkeyLayout(props: Props): ReactElement {
    return (
        <Router>
            <div className="ui menu">
                <NavLink to="/bookmonkey/monkeyhome" className="item">
                    Home
                </NavLink>
                <NavLink to="/bookmonkey/books" className="item">
                    Books
                </NavLink>
                <NavLink to="/bookmonkey/books/create" className="item">
                    Create Book
                </NavLink>
            </div>

            <div className="ui container">{props.children}</div>
        </Router>
    );
}
