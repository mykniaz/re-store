interface IInitialState {
  orderItems: Array<{
    id: number,
    title: string,
    count: number,
    total: number,
  }>;
  orderTotal: number;
}

const initialState: IInitialState = {
  orderItems: [],
  orderTotal: 0,
};

export default function updateShoppingCard(state: any, action: { type?: any; payload?: any }) {
  if (state === undefined) return initialState;

  switch (action.type) {
    case 'ADD_TO_ORDER': {
      return state.shoppingCard;
    }

    case 'REMOVE_FROM_ORDER': {
      return state.shoppingCard;
    }

    case 'REMOVE_ORDER': {
      return state.shoppingCard;
    }

    default:
      return state.shoppingCard;
  }
}
