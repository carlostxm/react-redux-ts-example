import { State } from "../reducers";

export const selectCount = (state: State) => state.counterReducer.value;
