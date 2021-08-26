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

export const handleFetchProducts = () => {
  return new Promise((resolve,reject) => {
    firestore
      .collection('products')
      .get()
      .then(snapshot => {
        const productsArray = snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            documentID: doc.id
          }
        });
        resolve(productsArray);
      })
      .catch(error => {
        reject(error);
      })
  })
};

export const handleDeleteProduct = (documentID:string) => {
  return new Promise<void>((resolve, reject) => {
    firestore
      .collection('products')
      .doc(documentID)
      .delete()
      .then(() => {
        resolve();
      })
      .catch(error => {
        reject(error)
      })
  })
};
