import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./reducers/todoReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  todoReducer,
  compose(applyMiddleware(thunk), composeEnhancers())
);
