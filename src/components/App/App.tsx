import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import { WithBookStoreService } from "../HOC"

import { HomePage, CardPage } from "../Pages"

const App = () => {
    return (
        <div className="app">
            <header className="navbar navbar-expand flex-column flex-md-row navbar-dark bg-dark">
                <Link className="navbar-brand mr-0 mr-md-2" to="/" aria-label="ReStore">ReStore</Link>
                <div className="navbar-nav-scroll">
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item">
                            <Link className="nav-link " to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/">Home</Link>
                        </li>
                    </ul>
                </div>
            </header>
            <div className="container">
                <Switch>
                    <Route
                        path="/"
                        exact={true}
                        component={HomePage}
                    />
                    <Route
                        path="/card/:id"
                        component={CardPage}
                    />
                </Switch>
            </div>
        </div>
    )
};

export default WithBookStoreService()(App);