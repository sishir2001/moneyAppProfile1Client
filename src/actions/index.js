import { ADD_CART, DELETE_CART } from "./types";

export const add_to_cart = (prod) => {
    return {
        type: ADD_CART,
        payload: prod,
    };
};

export const delete_from_cart = (itemId) => {
    return {
        type: DELETE_CART,
        payload: itemId,
    };
};
