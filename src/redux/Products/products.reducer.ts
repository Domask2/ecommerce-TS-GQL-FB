import { productTypes, FetchProductAction } from './products.types';
import { IProduct } from './products.types';

type TInitialState = typeof initialState;

const initialState = {
  products: [] as IProduct[] | null,
  product: [] as any,
};

export const productReducer = (state = initialState, action: FetchProductAction): TInitialState => {
  switch (action.type) {
    case productTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case productTypes.SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};
