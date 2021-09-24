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

type TPaylad = {
  filterType: string;
};

export const handleFetchProducts = (filters: any) => {
  let type = filters.payload.filterType;

  return new Promise((resolve, reject) => {
    let ref = firestore.collection('products').orderBy('createDate');

    if (type) {
      ref = ref.where('productCategory', '==', type);
    }

    ref
      .get()
      .then((snapshot) => {
        const productsArray = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            documentID: doc.id,
          };
        });
        resolve(productsArray);
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
