interface IProduct {
  id: string;
}

export type TProduct = IProduct | null;

export enum productTypes {
  ADD_NEW_PRODUCT_START = 'ADD_NEW_PRODUCT_START',
}

interface FetchProductAction {
  type: productTypes.ADD_NEW_PRODUCT_START;

  payload: any;
}

export type ProductAction = FetchProductAction;
