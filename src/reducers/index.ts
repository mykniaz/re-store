type TInitialState = {
    books: Array<{
        id: number,
        price: number,
        title: string,
    }>,
    isLoading: boolean,
    error: null | object,
    orderItems: Array<{
        id: number,
        title: string,
        count: number,
        total: number,
    }>,
    orderTotal: number,
};

const initialState: TInitialState = {
    books: [],
    isLoading: false,
    error: null,
    orderItems: [],
    orderTotal: 0,
};

function reducer (state = initialState, action: { type?: any; payload?: any }) {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                isLoading: true,
                error: null,
            };

        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                isLoading: false,
                error: null,
            };

        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                isLoading: false,
                error: action.payload,
            };

        case 'ADD_TO_ORDER': {
            const bookId: number = action.payload;
            const book = state.books.find((book) => book.id === bookId);

            if (book === undefined) return state;

            const newOrderItems = [...state.orderItems];
            const bookInOrderIndex = newOrderItems.findIndex((item) => item.id === bookId);
            const newOrderItem = newOrderItems[bookInOrderIndex];

            if (bookInOrderIndex !== -1) {
                newOrderItem.count = newOrderItem.count + 1;
                newOrderItem.total = newOrderItem.total + book.price;

                return {
                    ...state,
                    orderItems: newOrderItems,
                    orderTotal: state.orderTotal + book.price,
                }
            }


            return {
                ...state,
                orderItems: state.orderItems.concat([
                    {
                        id: bookId,
                        title: book.title,
                        count: 1,
                        total: book.price,
                    }
                ]),
                orderTotal: state.orderTotal + book.price,
            };
        }


        default:
            return state;
    }
}

export default reducer;