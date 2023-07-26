import { DECREMENT, INCREMENT } from "./counterAction";
import { IAction, IInitialState } from "./type";

const initialState: IInitialState = { count: 0 };

export const counterReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};
