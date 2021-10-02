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
  prevCartItems: IProduct[],
  nextCartItem: IProduct
}

export const existingCartItem = ({
  prevCartItems,
  nextCartItem
}: IHandleProduct) => {
  return prevCartItems.find(
    cartItem => cartItem.documentID === nextCartItem.documentID
  );
}

export const handleAddToCart = ({
  prevCartItems,
  nextCartItem
}: IHandleProduct) => {
  const quantityIncrement = 1;
  const cartItemExists = existingCartItem({prevCartItems,
    nextCartItem})

  if(cartItemExists) {
    return prevCartItems.map(cartItem => 
      cartItem.documentID === nextCartItem.documentID
        ? {
          ...cartItem,
          quantity: cartItem.quantity + quantityIncrement
        } : cartItem
      
      )
  }

  return [
    ...prevCartItems,
    {
      ...nextCartItem,
      quantity: quantityIncrement
    }
  ]
}