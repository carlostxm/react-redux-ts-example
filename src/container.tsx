import { connect } from "react-redux";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
} from "./actions";
import { Dispatch } from "./actions/thunk.model";
import App, { AppDataProps, AppFunctionalProps } from "./app";
import { State } from "./reducers";
import { selectCount } from "./selectors";

const mapStateToProps = (state: State): AppDataProps => ({
  count: selectCount(state),
});

const mapDispatchToProps = (dispatch: Dispatch): AppFunctionalProps => ({
  onDecrement: () => dispatch(decrement()),
  onIncrement: () => dispatch(increment()),
  onIncrementAsync: (amount) => dispatch(incrementAsync(amount)),
  onIncrementByAmount: (amount) => dispatch(incrementByAmount(amount)),
  onIncrementIfOdd: (amount) => dispatch(incrementIfOdd(amount)),
});

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
