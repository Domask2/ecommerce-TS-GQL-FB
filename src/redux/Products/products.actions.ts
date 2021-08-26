import { productTypes } from './products.types';
import { TProduct } from './products.types';

export const emailSignInStart = (useCredentials: any) => ({
  type: productTypes.ADD_NEW_PRODUCT_START,
  payload: useCredentials,
});
