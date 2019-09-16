interface IInitialState {
  books: Array<{
    id: number,
    price: number,
    title: string,
  }>;
  isLoading: boolean;
  error: null | object;

}

const initialState: IInitialState = {
  books: [],
  isLoading: false,
  error: null,
};

function updateBooksList(state: any, action: { type?: any; payload?: any }) {
  if (state === undefined) return initialState;

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

    default:
      return state.booksList;
  }
}

export default updateBooksList;
