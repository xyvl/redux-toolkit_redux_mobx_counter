import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./type";

const initialState: IInitialState = { count: 0 };

const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const { decrement, increment } = counterSlice.actions;
