import { applyMiddleware, compose, createStore } from "redux";
import { reducers } from "./reducers";
import reduxThunk from "redux-thunk";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?? compose;

const middlewares = [reduxThunk];

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);
