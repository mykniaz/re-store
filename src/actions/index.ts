import Service from '../services/Service';

import { IUser } from '../reducer/updateUser';

function productsRequested() {
  return {
    type: 'FETCH_PRODUCT_REQUEST',
  };
}

function productsLoaded(newProducts: []) {
  return {
    type: 'FETCH_PRODUCT_SUCCESS',
    payload: newProducts,
  };
}

function productsError(error: {}) {
  return {
    type: 'FETCH_PRODUCT_FAILURE',
    payload: error,
  };
}

const fetchProducts = (dispatch: any) => {
  dispatch(productsRequested);

  const service = new Service();

  service.getProducts()
    .then((data: any) => {
      dispatch(productsLoaded(data));
    })
    .catch((error: {}) => dispatch(productsError(error)));
};

function addToOrder(id: number) {
  return {
    type: 'ADD_TO_ORDER',
    payload: id,
  };
}

function removeFromOrder(id: number) {
  return {
    type: 'REMOVE_FROM_ORDER',
    payload: id,
  };
}

function removeOrder(id: number) {
  return {
    type: 'REMOVE_ORDER',
    payload: id,
  };
}

function initUser(userData: IUser, dispatch: any) {
  dispatch(productsRequested());

  const service = new Service();

  service.initUser(userData)
    .then((data: any) => {
      dispatch(loggedIn(data));
    });
}

function loggedIn(userData: IUser) {
  return {
    type: 'USER_LOGGED_IN',
    payload: userData,
  };
}

function loggedOut() {
  return {
    type: 'USER_LOGGED_OUT',
  };
}

export {
  fetchProducts,
  addToOrder,
  removeFromOrder,
  removeOrder,
  initUser,
  loggedIn,
  loggedOut,
};
