import { productTypes, ProductAction } from './products.types';
import { TProduct } from './products.types';

type TInitialState = typeof initialState;

const initialState = {
  products: [] as Array<TProduct>,
  product: {} as TProduct,
};

export const productReducer = (state = initialState, action: ProductAction): TInitialState => {
  switch (action.type) {
    case productTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
