interface IProduct {
  productCategory: string;
  productName: string;
  productThumbnail: string;
  productPrice: string;
}

export type TProduct = IProduct | [];

export enum productTypes {
  ADD_NEW_PRODUCT_START = 'ADD_NEW_PRODUCT_START',
}

interface FetchProductAction {
  type: productTypes.ADD_NEW_PRODUCT_START;

  payload: any;
}

export type ProductAction = FetchProductAction;
