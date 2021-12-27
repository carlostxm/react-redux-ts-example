import { COUNTER_ACTIONS_ENUM } from "./counter/counter.const";

type ActionsEnum = typeof COUNTER_ACTIONS_ENUM /** & OtherActionsEnum */;

export const ACTIONS_ENUM: ActionsEnum = {
  ...COUNTER_ACTIONS_ENUM,
};
