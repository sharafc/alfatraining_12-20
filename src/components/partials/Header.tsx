import React, { ReactElement } from 'react'
import MainNavigation from './MainNavigation'

export default function Header(): ReactElement {
    return (
        <header className="ui borderless main menu">
            <div className="ui text container">
                <h1 className="header item">Hello Adventurer</h1>
                <MainNavigation />
            </div>
        </header>
    );
}
