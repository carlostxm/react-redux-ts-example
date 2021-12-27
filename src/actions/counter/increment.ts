import { BaseAction } from "../../actions";
import { ACTIONS_ENUM } from "../action.const";

export const increment = (): BaseAction => ({
  type: ACTIONS_ENUM.INCREMENT_COUNTER,
});
