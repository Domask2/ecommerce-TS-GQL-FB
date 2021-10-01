import { cartTypes } from './cart.types';
import { ICart} from './cart.types';

export const addProduct = (nextCartItem: ICart) => ({
  type: cartTypes.ADD_TO_CART,
  payload: nextCartItem,
});