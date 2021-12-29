import { BaseAction, IncrementByAmountAction } from "../actions";
import { ACTIONS_ENUM } from "../actions/action.const";
import { CounterStatus } from "../model";

export interface CounterState {
  value: number;
  status: CounterStatus;
}

const initializeCounterState = (initialValue = 0): CounterState => {
  return {
    value: initialValue,
    status: CounterStatus.idle,
  };
};

export const counterReducer = (
  state: CounterState = initializeCounterState(),
  action: BaseAction
): CounterState => {
  switch (action.type) {
    case ACTIONS_ENUM.DECREMENT_COUNTER:
      return {
        ...state,
        value: state.value - 1,
      };
    case ACTIONS_ENUM.INCREMENT_COUNTER:
      return {
        ...state,
        value: state.value + 1,
      };
    case ACTIONS_ENUM.INCREMENT_COUNTER_BY_AMOUNT:
      const { payload } = action as IncrementByAmountAction;
      const amountToIncrement = payload.amount ?? 0;
      return {
        ...state,
        value: state.value + amountToIncrement,
      };
  }
  return state;
};
