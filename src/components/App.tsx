import React, { ReactElement } from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import BookMonkey from "./pages/BookMonkey";
import Exercises from "./pages/Exercises";

export default function App(): ReactElement {
    return (
        <Router>
            <header className="ui borderless main menu">
                <div className="ui text container">
                    <h1 className="header item">Hello Adventurer</h1>
                    <Link to="/exercise" className="item">
                        Exercises
                    </Link>
                    <Link to="/bookmonkey" className="item">
                        Book Monkey
                    </Link>
                </div>
            </header>

            <Switch>
                <Route path="/exercise" component={Exercises} />
                <Route path="/bookmonkey" component={BookMonkey} />
            </Switch>
        </Router>
    );
}
