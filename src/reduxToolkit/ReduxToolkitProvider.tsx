import { Provider } from "react-redux";
import { store } from "./store/store";
import { ReduxToolkitCounter } from "./ReduxToolkitCounter";

export const ReduxToolkitProvider = () => {
  return (
    <Provider store={store}>
      <h1>REDUX-TOOLKIT</h1>
      <ReduxToolkitCounter />
    </Provider>
  );
};
