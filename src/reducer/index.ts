import updateBooksList from './updateBooksList';
import updateShoppingCard from './updateShoppingCard';
import updateUser from './updateUser';

function reducer(state: any, action: { type?: any; payload?: any }) {
  return {
    booksList: updateBooksList(state, action),
    shoppingCard: updateShoppingCard(state, action),
    user: updateUser(state, action),
  };
}

export default reducer;
