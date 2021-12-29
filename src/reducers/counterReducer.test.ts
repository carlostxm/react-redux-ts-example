import { counterReducer } from ".";
import { BaseAction, IncrementByAmountAction } from "../actions";
import { ACTIONS_ENUM } from "../actions/action.const";
import { CounterStatus } from "../model";
import { CounterState } from "./counterReducer";

test("should decrement in one unit when decrement action is received", () => {
  const INITIAL_STATE: CounterState = {
    status: CounterStatus.idle,
    value: 1,
  };
  const decrementAction: BaseAction = {
    type: ACTIONS_ENUM.DECREMENT_COUNTER,
  };

  const newState = counterReducer(INITIAL_STATE, decrementAction);

  expect(newState).not.toBe(INITIAL_STATE);
  expect(newState.value).toEqual(INITIAL_STATE.value - 1);
});

test("should increment in one unit when increment action is received", () => {
  const INITIAL_STATE: CounterState = {
    status: CounterStatus.idle,
    value: 1,
  };
  const incrementAction: BaseAction = {
    type: ACTIONS_ENUM.INCREMENT_COUNTER,
  };

  const newState = counterReducer(INITIAL_STATE, incrementAction);

  expect(newState).not.toBe(INITIAL_STATE);
  expect(newState.value).toEqual(INITIAL_STATE.value + 1);
});

test("should increment in the amount given action is received", () => {
  const INITIAL_STATE: CounterState = {
    status: CounterStatus.idle,
    value: 1,
  };
  const incrementByAmountAction: IncrementByAmountAction = {
    type: ACTIONS_ENUM.INCREMENT_COUNTER_BY_AMOUNT,
    payload: { amount: 10 },
  };

  const newState = counterReducer(INITIAL_STATE, incrementByAmountAction);

  expect(newState).not.toBe(INITIAL_STATE);
  expect(newState.value).toEqual(
    INITIAL_STATE.value + incrementByAmountAction.payload.amount
  );
});
