import React from 'react';
import { useDispatch } from 'react-redux';
import { IProduct } from '../../../redux/Products/products.types';
import { Wrapper } from './Item.style';
import { removeCartItem, addProduct, reduceCartItem } from '../../../redux/Cart/cart.actions';

const Item: React.FC<IProduct> = (product) => {
  const dispatch = useDispatch();

  const { productName, productThumbnail, productPrice, quantity, documentID } = product;

  const handleRemoveCartItem = (documentID: string | undefined) => {
    dispatch(removeCartItem(documentID));
  };

  const handleAddProduct = (product: IProduct) => {
    dispatch(addProduct(product));
  };

  const handleReduceProduct = (product: IProduct) => {
    dispatch(reduceCartItem(product));
  };

  return (
    <Wrapper>
      <table className="cartItem" style={{ border: 0 }} cellPadding="0" cellSpacing="0">
        <tbody>
          <tr>
            <td>
              <img src={productThumbnail} alt={productName} />
            </td>
            <td>{productName}</td>
            <td>
              <span onClick={() => handleReduceProduct(product)} className="cartBtn">{`< `}</span>
              <span>{quantity}</span>
              <span onClick={() => handleAddProduct(product)} className="cartBtn">{` >`}</span>
            </td>
            <td>${productPrice}</td>
            <td align="center">
              <span className="cartBtn remove" onClick={() => handleRemoveCartItem(documentID)}>
                X
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Item;
