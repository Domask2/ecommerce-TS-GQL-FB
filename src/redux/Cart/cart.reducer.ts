import { IProduct } from './../Products/products.types';
import { cartTypes, CartAction } from './cart.types';
import { handleAddToCart } from './cart.helpers';

type TInitialState = typeof initialState;

const initialState = {
  cartItems: [] as IProduct[],
};

export const cartReducer = (state = initialState, action: CartAction): TInitialState => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: handleAddToCart({
          prevCartItems: state.cartItems,
          nextCartItem: action.payload
        })
      };

    default:
      return state;
  }
};