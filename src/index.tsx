import ReactDOM from "react-dom/client";
import "./global.css";
import { ReduxToolkitProvider } from "./reduxToolkit/ReduxToolkitProvider";
import { ReduxProvider } from "./redux/ReduxProvider";
import { MobXProvider } from "./mobX/MobXProvider"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <ReduxToolkitProvider />
    <ReduxProvider />
    <MobXProvider/>
  </>
);
