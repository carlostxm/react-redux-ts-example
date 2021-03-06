import { incrementByAmount } from "../../actions";
import { State } from "../../reducers";
import { selectCount } from "../../selectors";
import { Dispatch, Thunk } from "../thunk.model";

export const incrementIfOdd =
  (amount: number): Thunk =>
  (dispatch: Dispatch, getState: () => State) => {
    const currentValue = selectCount(getState());
    const currentValueIsOdd = currentValue % 2 === 1;
    if (currentValueIsOdd) {
      dispatch(incrementByAmount(amount));
    }
  };
