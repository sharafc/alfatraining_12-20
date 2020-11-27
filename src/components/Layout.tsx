import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";

interface Props {
    children: ReactElement;
}

export default function Layout(props: Props): ReactElement {
    return (
        <>
            <div className="ui menu">
                {/* activeClassName ist css Klasse fuer aktive Route, `active` ist default */}
                <NavLink to="/exercise/posts" exact className="item" activeClassName="active">
                    Posts
                </NavLink>
                <NavLink to="/clock" className="item">
                    Clock
                </NavLink>
                <NavLink to="/counter/functional" className="item">
                    Functional Counter
                </NavLink>
                <NavLink to="/counter/class" className="item">
                    Class Counter
                </NavLink>
            </div>

            <div className="ui container">{props.children}</div>
        </>
    );
}
