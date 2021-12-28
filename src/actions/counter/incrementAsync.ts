import { fetchCount } from "../../api/counterAPI";
import { Thunk } from "../thunk.model";
import { incrementByAmount } from "./incrementByAmount";

export const incrementAsync =
  (amount: number): Thunk<Promise<void>> =>
  (dispatcher) => {
    return fetchCount(amount).then((amount) => {
      dispatcher(incrementByAmount(amount));
    });
  };
