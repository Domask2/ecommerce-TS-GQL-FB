import { cartTypes, CartAction } from './cart.types';
import { ICart} from './cart.types';

type TInitialState = typeof initialState;

const initialState = {
  cartItems: [] as any,
};

export const cartReducer = (state = initialState, action: CartAction): TInitialState => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            ...action.payload
          }
        ]
      };

    default:
      return state;
  }
};