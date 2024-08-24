import { CartItem } from "./cart.types";
import { AnyAction } from "redux-saga";
import { setCartItems, setIsCartOpen } from "./cart.action";

const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export type CartState = {
  isCartOpen: boolean | undefined;
  cartItems: CartItem[];
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction,
): CartState => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }
  if (setCartItems.match(action)) {
    return {
      ...state,
      // @ts-ignore
      cartItems: action.payload,
    };
  }
  return state;
};
