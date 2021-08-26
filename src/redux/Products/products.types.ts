interface IProduct {
  productCategory: string;
  productName: string;
  productThumbnail: string;
  productPrice: string;
}

export type TProduct = IProduct | [];

export enum productTypes {
  ADD_NEW_PRODUCT_START = 'ADD_NEW_PRODUCT_START',
  FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START',
  SET_PRODUCTS = 'SET_PRODUCTS',
}

interface FetchProductAction {
  type: productTypes.SET_PRODUCTS;

  payload: any;
}

export type ProductAction = FetchProductAction;
