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

export const handleFetchProducts = ({filterType, startAfterDocs, persistProducts=[]}: any) => {
  return new Promise((resolve, reject) => {
    const pageSize = 3;

    let ref = firestore.collection('products').orderBy('createDate').limit(pageSize);

    if (filterType) ref = ref.where('productCategory', '==', filterType);
    if (startAfterDocs) ref = ref.startAfter(startAfterDocs);
    console.log(startAfterDocs)
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
          isLastPage: totalCount < 1,
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
