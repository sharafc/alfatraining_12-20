import React, { ReactElement } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import BookMonkey from "./pages/BookMonkey";
import Exercises from "./pages/Exercises";
import Footer from "./partials/Footer";
import Header from "./partials/Header";

export default function App(): ReactElement {
    
    return (
        <Router>
            <div className="container">
                <Header />

                <Switch>
                    <Route path="/exercise" component={Exercises} />
                    <Route path="/bookmonkey" component={BookMonkey} />
                </Switch>

                <Footer />
            </div>
        </Router>
    );
}
