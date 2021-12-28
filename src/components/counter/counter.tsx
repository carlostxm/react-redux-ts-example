import React, { useState } from "react";
import styles from "./counter.module.css";

interface CounterProps {
  count: number;
  onDecrement: () => void;
  onIncrement: () => void;
  onIncrementByAmount: (amount: number) => void;
  onIncrementAsync: (amount: number) => void;
  onIncrementIfOdd: (amount: number) => void;
}
export const DEFAULT_AMOUNT_VALUE = 2;
export const Counter: React.FC<CounterProps> = (props) => {
  const {
    count,
    onDecrement,
    onIncrement,
    onIncrementByAmount,
    onIncrementAsync,
    onIncrementIfOdd,
  } = props;
  const [incrementAmount, setIncrementAmount] = useState(DEFAULT_AMOUNT_VALUE);

  const incrementValue = Number(incrementAmount) || 0;

  const handleIncrementByAmount = (inputString: string): void => {
    const sanitizedAmount = parseInt(inputString);
    if (Number.isInteger(sanitizedAmount)) {
      setIncrementAmount(sanitizedAmount);
    } else {
      setIncrementAmount(0);
    }
  };

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={onDecrement}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={onIncrement}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => handleIncrementByAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => onIncrementByAmount(incrementValue)}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => onIncrementAsync(incrementValue)}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => onIncrementIfOdd(incrementValue)}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};
