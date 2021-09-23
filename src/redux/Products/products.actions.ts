import { productTypes } from './products.types';
import { IProduct } from './products.types';

export const addProductStart = (productData: IProduct) => ({
  type: productTypes.ADD_NEW_PRODUCT_START,
  payload: productData,
});

type filterType = { filterType: string };
type TFilters = {
  type: productTypes.FETCH_PRODUCTS_START;
  payload: filterType | {};
};

export const fetchProductsStart = (filters?: any) => ({
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
