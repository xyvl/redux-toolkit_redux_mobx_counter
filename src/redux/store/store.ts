import {createStore, combineReducers} from 'redux'
import { counterReducer } from "./counter/counterReducer"

const rootReducer = combineReducers({counterReducer})

export const store = createStore(rootReducer)