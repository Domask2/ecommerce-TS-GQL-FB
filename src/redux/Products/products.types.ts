export interface IProduct {
  productCategory?: string;
  productName: string;
  productThumbnail: string;
  productPrice: string;
  documentID?: any;
  createDate?: Date;
  productAdminUserUID?: string;
}

export enum productTypes {
  ADD_NEW_PRODUCT_START = 'ADD_NEW_PRODUCT_START',
  FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START',
  SET_PRODUCTS = 'SET_PRODUCTS',
  DELETE_PRODUCT_START = 'DELETE_PRODUCT_START',
}

export interface FetchProductAction {
  type: productTypes.SET_PRODUCTS;
  payload: any;
}
