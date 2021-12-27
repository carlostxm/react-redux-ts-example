import { BaseAction } from "../../actions";
import { ACTIONS_ENUM } from "../action.const";

export const decrement = (): BaseAction => ({
  type: ACTIONS_ENUM.DECREMENT_COUNTER,
});
