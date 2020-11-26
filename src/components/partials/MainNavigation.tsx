import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

export default function MainNavigation(): ReactElement {
    return (
        <React.Fragment>
            <Link to="/exercise" className="item">
                Exercises
            </Link>
            <Link to="/bookmonkey" className="item">
                Book Monkey
            </Link>
        </React.Fragment>
    )
}
