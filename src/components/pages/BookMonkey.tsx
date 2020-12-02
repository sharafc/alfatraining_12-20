import React, { ReactElement, useState } from "react";
import BookList from "../BookList";
import BookDetails from "../BookDetails";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import Layout from "../layouts/BookMonkeyLayout";
import MonkeyHome from "./MonkeyHome";
import BookForm from "../BookForm/BookForm";

export default function BookMonkey(): ReactElement {
    const { url } = useRouteMatch();
    
    return (
        <div className="ui container">
            <Layout>
                <Switch>
                    <Route path={`${url}/books/create`}>
                        <BookForm />
                    </Route>

                    <Route path={`${url}/books/:isbn`}>
                        <BookDetails />
                    </Route>

                    <Route path={`${url}/books`}>
                        <BookList />
                    </Route>

                    <Route path={`${url}/monkeyhome`}>
                        <MonkeyHome />
                    </Route>
                </Switch>
            </Layout>
        </div>
    );
}
