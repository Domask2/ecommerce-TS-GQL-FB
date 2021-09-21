import { productTypes } from './products.types';
import { IProduct } from './products.types';

export const addProductStart = (productData: IProduct) => ({
  type: productTypes.ADD_NEW_PRODUCT_START,
  payload: productData,
});

export const fetchProductsStart = () => ({
  type: productTypes.FETCH_PRODUCTS_START,
});

export const setProducts = (products: IProduct[]) => ({
  type: productTypes.SET_PRODUCTS,
  payload: products,
});

export const deleteProductStart = (productID: string) => ({
  type: productTypes.DELETE_PRODUCT_START,
  payload: productID,
});
