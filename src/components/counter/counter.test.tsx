import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Counter, COUNTER_TESTID } from "./counter";

afterEach(() => {
  jest.clearAllMocks();
});

test("counter is initialized to count prop value", () => {
  const INITIAL_COUNTER_VALUE = 1;
  render(
    <Counter
      count={INITIAL_COUNTER_VALUE}
      onDecrement={jest.fn()}
      onIncrement={jest.fn()}
      onIncrementAsync={jest.fn()}
      onIncrementByAmount={jest.fn()}
      onIncrementIfOdd={jest.fn()}
    />
  );

  expect(screen.getByTestId(COUNTER_TESTID)).toHaveTextContent(
    String(INITIAL_COUNTER_VALUE)
  );
});

test("onIncrement callback is called each time that + button is clicked", () => {
  const onIncrementMock = jest.fn();
  const COUNTER_INITIAL_VALUE = 1;
  const { getByText, getByTestId } = render(
    <Counter
      count={COUNTER_INITIAL_VALUE}
      onDecrement={jest.fn()}
      onIncrement={onIncrementMock}
      onIncrementAsync={jest.fn()}
      onIncrementByAmount={jest.fn()}
      onIncrementIfOdd={jest.fn()}
    />
  );
  expect(getByText("+")).toBeDefined();
  expect(getByTestId(COUNTER_TESTID)).toHaveTextContent("1");

  fireEvent.click(getByText("+"));
  fireEvent.click(getByText("+"));
  expect(onIncrementMock).toHaveBeenCalledTimes(2);
});
