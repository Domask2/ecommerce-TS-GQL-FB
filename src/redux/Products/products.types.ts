export interface IProduct {
  productCategory?: string;
  productName: string;
  productThumbnail: string;
  productPrice: string;
  documentID?: string;
  createDate?: Date;
  productAdminUserUID?: string;
  productDesc?: any;
  quantity?: any;
}

export enum productTypes {
  ADD_NEW_PRODUCT_START = 'ADD_NEW_PRODUCT_START',
  FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START',
  SET_PRODUCTS = 'SET_PRODUCTS',
  DELETE_PRODUCT_START = 'DELETE_PRODUCT_START',
  FETCH_PRODUCT_START = 'FETCH_PRODUCT_START',
  SET_PRODUCT = 'SET_PRODUCT',
}

export interface FetchProductAction {
  type: productTypes.SET_PRODUCTS | productTypes.SET_PRODUCT;
  payload: any;
}
