import { ADD_CART, DELETE_CART } from "../actions/types";
import _ from "lodash";

const INITIAL_STATE = {
    items: {},
};
export const cartReducer = (state = INITIAL_STATE, action) => {
    console.log("Inside cart Reducer");
    switch (action.type) {
        case ADD_CART:
            console.log("ADD CART : ", action.payload);
            state.items[action.payload._id] = action.payload;
            return {
                ...state,
            };
        case DELETE_CART: {
            console.log("DELETE CART :", action.payload);
            state.items = _.omit(state.items, action.payload);
            console.log(state);
            return {
                ...state,
            };
        }
        default:
            console.log("Inside Default : ", action.payload);
            return state;
    }
};
