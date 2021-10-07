import { handleAddProduct } from './../Products/products.helpers';
import { IProduct } from './../Products/products.types';
import { firestore } from '../../firebase/utils';
import { ICart } from './cart.types';

export const handleAddCart = (product: ICart) => {
  return new Promise<void>((resolve, reject) => {
    firestore
      .collection('products')
      .doc()
      .set(product)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};
interface IHandleProduct {
  prevCartItems: IProduct[];
  nextCartItem: IProduct;
}

interface IHandleRemove {
  prevCartItems: IProduct[];
  cartItemToRemove: string;
}

interface IHandleReduce {
  prevCartItems: IProduct[];
  cartItemToReduce: any;
}

export const existingCartItem = ({ prevCartItems, nextCartItem }: IHandleProduct) => {
  return prevCartItems.find((cartItem) => cartItem.documentID === nextCartItem.documentID);
};

export const handleAddToCart = ({ prevCartItems, nextCartItem }: IHandleProduct) => {
  const quantityIncrement = 1;
  const cartItemExists = existingCartItem({ prevCartItems, nextCartItem });

  if (cartItemExists) {
    return prevCartItems.map((cartItem) =>
      cartItem.documentID === nextCartItem.documentID
        ? {
            ...cartItem,
            quantity: cartItem.quantity + quantityIncrement,
          }
        : cartItem,
    );
  }

  return [
    ...prevCartItems,
    {
      ...nextCartItem,
      quantity: quantityIncrement,
    },
  ];
};

export const handleRemoveCartitem = ({ prevCartItems, cartItemToRemove }: IHandleRemove) => {
  return prevCartItems.filter((item: IProduct) => item.documentID !== cartItemToRemove);
};

export const handleReduceCartItem = ({ prevCartItems, cartItemToReduce }: IHandleReduce) => {
  const existingCartItem = prevCartItems.find(
    (cartItem: IProduct) => cartItem.documentID === cartItemToReduce.documentID,
  );

  if (existingCartItem!.quantity === 1) {
    return prevCartItems.filter(
      (item: IProduct) => item.documentID !== existingCartItem!.documentID,
    );
  }

  return prevCartItems.map((cartItem: IProduct) =>
    cartItem.documentID === existingCartItem?.documentID
      ? {
          ...cartItem,
          quantity: cartItemToReduce.quantity - 1,
        }
      : cartItem,
  );
};
