import {useDispatch, useSelector} from "react-redux";
import { increment, decrement } from "./store/counter/counterAction";

export const ReduxCounter = () => {
const dispatch = useDispatch();
const value = useSelector((state: any) => state.counterReducer.count)

  return (
    <div className="wrapper">
      <h1>{value}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};
