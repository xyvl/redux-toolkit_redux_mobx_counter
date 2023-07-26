import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {TypedUseSelectorHook} from 'react-redux'
import { counterReducer } from "./counter/counterSlice";

const rootReducer = combineReducers({counterReducer});

export const store = configureStore({ reducer: rootReducer });

export type TypeDispatch = typeof store.dispatch;
export type TypeSelector =  ReturnType<typeof store.getState>;