import { firestore } from '../../firebase/utils';
import { TProduct } from './products.types';

export const handleAddProduct = (product: any) => {
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
