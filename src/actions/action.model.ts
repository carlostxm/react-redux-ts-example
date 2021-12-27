export interface BaseAction<T = any> {
  type: string;
  payload?: T;
}
