import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { BaseAction } from ".";

export type Dispatch = ThunkDispatch<any, unknown, BaseAction>;
export type Thunk<ReturnType = void> = ThunkAction<
  ReturnType,
  any,
  unknown,
  BaseAction
>;
