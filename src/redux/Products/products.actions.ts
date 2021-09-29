import { productTypes } from './products.types';
import { IProduct } from './products.types';

export const addProductStart = (productData: IProduct) => ({
  type: productTypes.ADD_NEW_PRODUCT_START,
  payload: productData,
});

export const fetchProductsStart = (filters = {}) => ({
  type: productTypes.FETCH_PRODUCTS_START,
  payload: filters,
});

export const setProducts = (products: IProduct[]) => ({
  type: productTypes.SET_PRODUCTS,
  payload: products,
});

export const deleteProductStart = (productID: string) => ({
  type: productTypes.DELETE_PRODUCT_START,
  payload: productID,
});

export const fetchProductStart = (productID: string) => ({
  type: productTypes.FETCH_PRODUCT_START,
  payload: productID,
});

export const setProduct = (product: any) => ({
  type: productTypes.SET_PRODUCT,
  payload: product,
});
