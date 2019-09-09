const initialState = {
    books: [],
    isLoading: false,
    error: null,
};

function reducer (state = initialState, action: { type?: any; payload?: any }) {
    switch (action.type) {
        case 'SET_STATE':
            return {
                ...state,
                ...action.payload,
            };

        case 'TOGGLE_LOADING':
            return {
                ...state,
                isLoading: action.payload !== undefined ? action.payload : !state.isLoading,
            };

        case 'BOOKS_LOADED':
            return {
                ...state,
                books: action.payload,
                error: null,
            };

        case 'BOOKS_ERROR':
            return {
                ...state,
                books: [],
                error: action.payload,
            };

        default:
            return state;
    }
}

export default reducer;