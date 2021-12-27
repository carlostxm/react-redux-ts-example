import { BaseAction } from "../../actions";
import { ACTIONS_ENUM } from "../action.const";

export type IncrementByAmountAction = BaseAction<{ amount: number }>;

export const incrementByAmount = (amount: number): IncrementByAmountAction => ({
  type: ACTIONS_ENUM.INCREMENT_COUNTER_BY_AMOUNT,
  payload: { amount },
});
