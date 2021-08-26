interface IProduct {
  productCategory: string;
  productName: string;
  productThumbnail: string;
  productPrice: string;
  documentID?: any
}

export type TProduct = IProduct ;

export enum productTypes {
  ADD_NEW_PRODUCT_START = 'ADD_NEW_PRODUCT_START',
  FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START',
  SET_PRODUCTS = 'SET_PRODUCTS',
  DELETE_PRODUCT_START = 'DELETE_PRODUCT_START'
}

interface FetchProductAction {
  type: productTypes.SET_PRODUCTS;

  payload: any;
}

export type ProductAction = FetchProductAction;
