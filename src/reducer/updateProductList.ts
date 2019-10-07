export interface IProduct {
  id?: number;
  title: string;
  description: string;
  price: number;
  img: string;
}

interface IInitialState {
  products: IProduct[];
  isLoading: boolean;
  error: null | object;
}

const initialState: IInitialState = {
  products: [],
  isLoading: false,
  error: null,
};

function updateProductList(state: any, action: { type?: any; payload?: any }) {
  if (state === undefined) return initialState;

  switch (action.type) {
    case 'FETCH_PRODUCTS_REQUEST':
      return {
        products: [],
        isLoading: true,
        error: null,
      };

    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        products: action.payload,
        isLoading: false,
        error: null,
      };

    case 'FETCH_PRODUCTS_FAILURE':
      return {
        products: [],
        isLoading: false,
        error: action.payload,
      };

    default:
      return state.productList;
  }
}

export default updateProductList;
