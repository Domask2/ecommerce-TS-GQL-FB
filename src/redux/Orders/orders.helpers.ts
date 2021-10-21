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

export const handleGetUserOrderHistory = (uid: any) => {
  return new Promise((resolve, reject) => {
    let ref = firestore.collection('orders').orderBy('orderCreatedDate');
    ref = ref.where('orderUserID', '==', uid);

    ref
      .get()
      .then((snap) => {
        const data = [
          ...snap.docs.map((doc) => {
            return {
              ...doc.data(),
              documentID: doc.id,
            };
          }),
        ];

        resolve({ data });
      })
      .catch((err) => {
        reject(err);
      });
  });
};
