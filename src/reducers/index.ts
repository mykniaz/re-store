import updateBooksList from "./updateBooksList";
import updateShoppingCard from "./updateShoppingCard";

function reducer (state: any, action: { type?: any; payload?: any }) {
    if (state === undefined) return {
        booksList: updateBooksList(state, action),
        shoppingCard: updateShoppingCard(state, action),
    };

    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
        case 'FETCH_BOOKS_SUCCESS':
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                booksList: updateBooksList(state, action)
            };

        case 'ADD_TO_ORDER':
        case 'REMOVE_FROM_ORDER':
        case 'REMOVE_ORDER':
            return {
                ...state,
                shoppingCard: updateShoppingCard(state, action)
            };

        default:
            return state;
    }
}

export default reducer;
