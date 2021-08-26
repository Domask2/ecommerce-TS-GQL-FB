import { productTypes } from './products.types';
import { TProduct } from './products.types';

export const addProductStart = (productData: any) => ({
  type: productTypes.ADD_NEW_PRODUCT_START,
  payload: productData,
});
