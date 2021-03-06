import React from "react";
import { Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import { WithBookStoreService } from "../HOC"

import Header from "../Header";

import { HomePage, CardPage, OrderPage } from "../Pages"

const App = () => {
    return (
        <div className="app">
            <div className="container">
                <Header />
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
                    <Route
                        path="/order"
                        component={OrderPage}
                    />
                </Switch>
            </div>
        </div>
    )
};

export default WithBookStoreService()(App);