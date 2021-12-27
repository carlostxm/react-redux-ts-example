type CounterActionsKeys =
  | "INCREMENT_COUNTER"
  | "DECREMENT_COUNTER"
  | "INCREMENT_COUNTER_BY_AMOUNT";
export type CounterActionsEnum = { [key in CounterActionsKeys]: string };

export const COUNTER_ACTIONS_ENUM: CounterActionsEnum = {
  INCREMENT_COUNTER: "Counter incremented in one unit",
  DECREMENT_COUNTER: "Counter decremented in one unit",
  INCREMENT_COUNTER_BY_AMOUNT: "Counter incremented in the amount entered",
};
