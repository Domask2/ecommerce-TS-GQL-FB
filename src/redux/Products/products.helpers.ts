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

export const handleFetchProducts = ({ payload }: any) => {
  let type = payload.filterType;
  let startAfterDoc = payload.startAfterDocs;
  // let persistProducts = filters.payload.persistProducts;
  // console.log(startAfterDoc);
  return new Promise((resolve, reject) => {
    const pageSize = 6;

    let ref = firestore.collection('products').orderBy('createDate').limit(pageSize);

    if (type) ref = ref.where('productCategory', '==', type);
    if (startAfterDoc) ref = ref.startAfter(startAfterDoc);

    ref
      .get()
      .then((snapshot) => {
        const totalCount = snapshot.size;

        const data = [
          // ...persistProducts,
          ...snapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              documentID: doc.id,
            };
          }),
        ];
        resolve({
          data,
          queryDoc: snapshot.docs[totalCount - 1],
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
