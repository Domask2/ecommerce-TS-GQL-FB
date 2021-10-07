import { IProduct } from './../Products/products.types';
import { cartTypes, CartAction } from './cart.types';
import { handleAddToCart, handleRemoveCartitem, handleReduceCartItem } from './cart.helpers';

type TInitialState = typeof initialState;

const initialState = {
  cartItems: [] as IProduct[] | any,
};

export const cartReducer = (state = initialState, action: CartAction): TInitialState => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: handleAddToCart({
          prevCartItems: state.cartItems,
          nextCartItem: action.payload,
        }),
      };
    case cartTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: handleReduceCartItem({
          prevCartItems: state.cartItems,
          cartItemToReduce: action.payload,
        }),
      };
    case cartTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: handleRemoveCartitem({
          prevCartItems: state.cartItems,
          cartItemToRemove: action.payload,
        }),
      };

    default:
      return state;
  }
};
