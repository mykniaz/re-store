const initialState = {
    books: [],
};

const reducer = (state = initialState, action: { type?: any; payload?: any }) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;