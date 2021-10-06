import React from 'react';
import { useDispatch } from 'react-redux';
import { IProduct } from '../../../redux/Products/products.types';
import { Wrapper } from './Item.style';
import { removeCartItem } from '../../../redux/Cart/cart.actions';

const Item: React.FC<IProduct> = (product) => {
  const dispatch = useDispatch();

  const { productName, productThumbnail, productPrice, quantity, documentID } = product;

  const handleRemoveCartItem = (documentID: any) => {
    dispatch(removeCartItem({ documentID }));
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
              <span className="cartBtn">{`< `}</span>
              <span>{quantity}</span>
              <span className="cartBtn">{` >`}</span>
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
