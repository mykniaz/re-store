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
      const { orderItems, orderTotal } = state.shoppingCard;
      const bookId: number = action.payload;
      const book = state.booksList.books.find((book: { id: number }) => book.id === bookId);

      if (book === undefined) return state;

      const newOrderItems = [...orderItems];
      const bookInOrderIndex = newOrderItems.findIndex((item) => item.id === bookId);
      const newOrderItem = newOrderItems[bookInOrderIndex];

      if (bookInOrderIndex !== -1) {
        newOrderItem.count = newOrderItem.count + 1;
        newOrderItem.total = newOrderItem.total + book.price;

        return {
          orderItems: newOrderItems,
          orderTotal: orderTotal + book.price,
        };
      }

      return {
        orderItems: orderItems.concat([
          {
            id: bookId,
            title: book.title,
            count: 1,
            total: book.price,
          },
        ]),
        orderTotal: orderTotal + book.price,
      };
    }

    case 'REMOVE_FROM_ORDER': {
      const { orderItems, orderTotal } = state.shoppingCard;

      const orderId: number = action.payload;
      const orderIndex = state
        .shoppingCard.orderItems
        .findIndex((order: { id: number }) => order.id === orderId);
      const orderItem = state.shoppingCard.orderItems[orderIndex];
      const oneBookPrice = orderItem.total / orderItem.count;

      if (orderItem.count === 1) {
        const newOrderItems = [
          ...orderItems.splice(0, orderIndex),
          ...orderItems.splice(orderIndex + 1),
        ];

        return {
          ...state,
          orderItems: newOrderItems,
          orderTotal: orderTotal - oneBookPrice,
        };
      }

      if (orderItem.count > 1) {
        const newOrderItems = [
          ...orderItems.splice(0, orderIndex),
          {
            ...orderItem,
            count: orderItem.count - 1,
            total: orderItem.total - oneBookPrice,
          },
          ...orderItems.splice(orderIndex + 1),
        ];

        return {
          ...state,
          orderItems: newOrderItems,
          orderTotal: orderTotal - oneBookPrice,
        };
      }

      return state;
    }

    case 'REMOVE_ORDER': {
      const { orderItems, orderTotal } = state.shoppingCard;

      const orderId: number = action.payload;
      const orderIndex = orderItems.findIndex((order: { id: number }) => order.id === orderId);
      const orderItem = orderItems[orderIndex];
      const orderPrice = orderItem.total;

      const newOrderItems = [
        ...orderItems.splice(0, orderIndex),
        ...orderItems.splice(orderIndex + 1),
      ];

      return {
        ...state,
        orderItems: newOrderItems,
        orderTotal: orderTotal - orderPrice,
      };
    }

    default:
      return state.shoppingCard;
  }
}
