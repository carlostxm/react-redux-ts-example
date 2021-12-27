export { counterReducer } from "./counterReducer";
export type { State } from "./reduxState.model";

import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { State } from "./reduxState.model";

export const reducers = combineReducers<State>({
  counterReducer,
});
