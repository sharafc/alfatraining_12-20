import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

export default function MainNavigation(): ReactElement {
    return (
        <React.Fragment>
            <NavLink to="/exercise" className="item" activeClassName="active">
                Exercises
            </NavLink>
            <NavLink to="/bookmonkey" className="item" activeClassName="active">
                Book Monkey
            </NavLink>
        </React.Fragment>
    );
}
