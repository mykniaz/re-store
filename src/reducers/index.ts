import updateBooksList from './updateBooksList';
import updateShoppingCard from './updateShoppingCard';

function reducer(state: any, action: { type?: any; payload?: any }) {
  return {
    booksList: updateBooksList(state, action),
    shoppingCard: updateShoppingCard(state, action),
  };
}

export default reducer;
