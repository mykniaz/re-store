import React from "react";
import ReactDom from "react-dom";
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import App from "./components/App";
import ErrorBoundary from "./components/ErrorBoundry";
import BookStoreService from "./services/BookStoreService";
import { BookStoreServiceProvider } from "./components/ServiceContext";

import store from "./store/store";

const bookStoreService = new BookStoreService();

ReactDom.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookStoreServiceProvider value={bookStoreService}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </BookStoreServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root'),
);