import React, { ReactElement, useState } from "react";
import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ClassCounter from "../ClassCounter";
import PostList from "../PostList";
import PostDetails from "../PostDetails";
import FunctionalCounter from "../FunctionalCounter";
import Clock from "../Clock/Clock";
import Layout from "../Layout";

export default function Exercises(): ReactElement {
    const [showCounter, setShowCounter] = useState(true);

    return (
        <div className="ui container">
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/posts/:postId">
                            <PostDetails />
                        </Route>
                        <Route path="/posts">
                            <PostList />
                        </Route>
                        <Route path="/clock">
                            <Clock />
                        </Route>
                        <Route path="/counter/functional">{showCounter && <FunctionalCounter startValue={4} />}</Route>
                        <Route path="/counter/class">
                            <ClassCounter startValue={4} />
                        </Route>
                        <Route path="/home">
                            <p>Welcome on Home</p>
                        </Route>
                        <Route path="/">
                            <Redirect to="/home" />
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        </div>
    );
}
