import React from "react";
import { useCustomDispatch, useCustomSelector } from "./hooks/redux";
import { decrement, increment } from "./store/counter/counterSlice"

export const ReduxToolkitCounter = () => {
	const dispatch = useCustomDispatch()
  const value = useCustomSelector((state) => state.counterReducer.count);

  return (
      <div className="wrapper">
        <h1>{value}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
  );
};
