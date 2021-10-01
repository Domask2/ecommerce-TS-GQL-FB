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