export interface IBook {
  id: number;
  title: string;
  author: string;
  price: number;
  img: string;
}

interface IInitialState {
  books: IBook[];
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
        books: [],
        isLoading: true,
        error: null,
      };

    case 'FETCH_BOOKS_SUCCESS':
      return {
        books: action.payload,
        isLoading: false,
        error: null,
      };

    case 'FETCH_BOOKS_FAILURE':
      return {
        books: [],
        isLoading: false,
        error: action.payload,
      };

    default:
      return state.booksList;
  }
}

export default updateBooksList;
