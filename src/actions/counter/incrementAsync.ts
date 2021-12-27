import { fetchCount } from "../../api/counterAPI";
import { Thunk } from "../thunk.model";
import { incrementByAmount } from "./incrementByAmount";

export const incrementAsync = (): Thunk<Promise<void>> => (dispatcher) => {
  return fetchCount().then((amount) => {
    dispatcher(incrementByAmount(amount.data));
  });
};
