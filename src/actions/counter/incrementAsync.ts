import { fetchCount } from "../../api/counterAPI";
import { BaseAction } from "../action.model";
import { Thunk } from "../thunk.model";
import { COUNTER_ACTIONS_ENUM } from "./counter.const";
import { incrementByAmount } from "./incrementByAmount";

export const incrementAsyncFailed = (error: string): BaseAction => {
  return {
    type: COUNTER_ACTIONS_ENUM.INCREMENT_ASYNC_FAILED,
    payload: error,
  };
};

export const incrementAsync =
  (): Thunk<Promise<BaseAction>> => (dispatcher) => {
    return fetchCount()
      .then((response) => dispatcher(incrementByAmount(response)))
      .catch((error) => dispatcher(incrementAsyncFailed(error)));
  };
