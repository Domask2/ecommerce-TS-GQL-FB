import { firestore } from '../../firebase/utils';

export const handleSaveOrder = (order: any) => {
  return new Promise<void>((resolve, reject) => {
    firestore
      .collection('orders')
      .doc()
      .set(order)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};
