import { observer } from "mobx-react"
import { counter } from "./store/counter/counterStore"

export const MobXCounter = observer(() => {
  return (
    <div className="wrapper">
      <h1>{counter.count}</h1>
      <button onClick={() => counter.increment()}>+</button>
      <button onClick={() => counter.decrement()}>-</button>
    </div>
  );
});
