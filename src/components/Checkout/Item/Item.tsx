import React from "react";
import { IProduct } from "../../../redux/Products/products.types";
import { Wrapper } from "./Item.style";

const Item: React.FC<IProduct> = (product) => {
  const { productName, productThumbnail, productPrice, quantity, documentID } =
    product;

  return (
    <Wrapper>
      <table
        className="cartItem"
        style={{ border: 0 }}
        cellPadding="0"
        cellSpacing="0"
      >
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
              <span className="cartBtn remove">X</span>
            </td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Item;
