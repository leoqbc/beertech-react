import CounterActions from "./CounterActions";
import { CounterState } from "./App";

export type CounterAction = {
    type: number,
    payload?: { [key: string]: any }
}

const counterReducer = (state: CounterState, action: CounterAction) => {
    switch (action.type) {
        case CounterActions.COUNTER_INCREMENT:
            if (action.payload === undefined) {
                throw new Error();
            }

            return {
                ...state,
                counter: state.counter + action.payload?.quantity
            };
        case CounterActions.COUNTER_DECREMENT:
            if (action.payload === undefined) {
                throw new Error();
            }

            return {
                ...state,
                counter: state.counter - action.payload?.quantity
            };
    }
    return state;
};

export default counterReducer;