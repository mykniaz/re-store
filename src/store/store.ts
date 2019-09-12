import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";
import { logMiddleware, stingMiddleware } from "./enhancers";
import thunkMiddleware from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logMiddleware, stingMiddleware));

export default store;