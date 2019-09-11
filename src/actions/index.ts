function booksRequested() {
    return {
        type: "FETCH_BOOKS_REQUEST",
    }
}

function booksLoaded (newBooks: []) {
    return {
        type: "FETCH_BOOKS_SUCCESS",
        payload: newBooks
    }
}

function booksError (error: {}) {
    return {
        type: "FETCH_BOOKS_FAILURE",
        payload: error
    }
}

const fetchBooks = (dispatch: any, service: any) => () => {
    dispatch(booksRequested());

    service.getBooks()
        .then((data: any) => {
            dispatch(booksLoaded(data));
        })
        .catch((error: {}) => dispatch(booksError(error)));
};

function addToOrder(id: number) {
    return {
        type: "ADD_TO_ORDER",
        payload: id,
    }
}

function removeFromOrder(id: number) {
    return {
        type: "REMOVE_FROM_ORDER",
        payload: id,
    }
}

function removeOrder(id: number) {
    return {
        type: "REMOVE_ORDER",
        payload: id,
    }
}

export {
    fetchBooks,
    addToOrder,
    removeFromOrder,
    removeOrder,
};