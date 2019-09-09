function setState (newState: {} = {}) {
    return {
        type: "SET_STATE",
        payload: newState
    }
}

function toggleLoading (isLoading?: boolean) {
    return {
        type: "TOGGLE_LOADING",
        payload: isLoading
    }
}

function booksLoaded (newBooks: []) {
    return {
        type: "BOOKS_LOADED",
        payload: newBooks
    }
}

function booksError (error: {}) {
    return {
        type: "BOOKS_LOADED",
        payload: error
    }
}

export {
    setState,
    toggleLoading,
    booksLoaded,
    booksError,
};