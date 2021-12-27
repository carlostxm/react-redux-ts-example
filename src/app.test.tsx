import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store";
import { AppContainer } from "./container";

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
