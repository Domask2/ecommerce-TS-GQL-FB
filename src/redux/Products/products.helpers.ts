import { firestore } from '../../firebase/utils';
import { IProduct } from './products.types';

export const handleAddProduct = (product: IProduct) => {
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

export const handleFetchProducts = ({ filterType, startAfterDocs, persistProducts = [] }: any) => {
  return new Promise((resolve, reject) => {
    const pageSize = 6;

    let ref = firestore.collection('products').orderBy('createDate').limit(pageSize);

    if (filterType) ref = ref.where('productCategory', '==', filterType);
    if (startAfterDocs) ref = ref.startAfter(startAfterDocs);

    ref
      .get()
      .then((snapshot) => {
        const totalCount = snapshot.size;

        const data = [
          ...persistProducts,
          ...snapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              documentID: doc.id,
            };
          }),
        ];
        resolve({
          data,
          queryDoc: snapshot.docs[snapshot.docs.length - 1],
          isLastPage: totalCount < pageSize,
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const handleDeleteProduct = (documentID: string) => {
  return new Promise<void>((resolve, reject) => {
    firestore
      .collection('products')
      .doc(documentID)
      .delete()
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const handleFetchProduct = (productID: string) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('product')
      .doc(productID)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          resolve(snapshot.data());
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};
