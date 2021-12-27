import React from "react";
import logo from "./logo.svg";
import "./app.css";
import { Counter } from "./app/components";

export interface AppDataProps {
  count: number;
}

export interface AppFunctionalProps {
  onDecrement: () => void;
  onIncrement: () => void;
  onIncrementByAmount: (amount: number) => void;
  onIncrementAsync: (amount: number) => void;
  onIncrementIfOdd: (amount: number) => void;
}

export type AppProps = AppDataProps & AppFunctionalProps;

export const App: React.FC<AppProps> = (props) => {
  const {
    count,
    onDecrement,
    onIncrement,
    onIncrementByAmount,
    onIncrementAsync,
    onIncrementIfOdd,
  } = props;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter
          count={count}
          onDecrement={onDecrement}
          onIncrement={onIncrement}
          onIncrementAsync={onIncrementAsync}
          onIncrementByAmount={onIncrementByAmount}
          onIncrementIfOdd={onIncrementIfOdd}
        />
        <p>
          Edit <code>src/app.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
};

export default App;
