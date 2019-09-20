import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import { logMiddleware, stingMiddleware } from './enhancers';
import reduxThunk from 'redux-thunk';

const store = createStore(
  reducer,
  applyMiddleware(reduxThunk, logMiddleware, stingMiddleware)
);

export default store;
