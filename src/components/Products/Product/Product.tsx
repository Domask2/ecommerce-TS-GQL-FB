import React from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from '../../../redux/Products/products.types';
import { ProductWrapper } from './Product.style';
import Button from '../../forms/Button/Button';

const Product: React.FC<IProduct> = ({
  productThumbnail,
  productName,
  productPrice,
  documentID,
}: IProduct) => {
  if (!productThumbnail || !productName || !productPrice || !documentID) return null;

  const configAddToCardBtn = {
    type: 'button',
  };

  return (
    <ProductWrapper>
      <div className="thumb">
        <Link to={`/product/${documentID}`}>
          <img src={productThumbnail} alt={productName} />
        </Link>
      </div>

      <div className="details">
        <ul>
          <li>
            <span className="name">
              <Link to={`/product/${documentID}`}>{productName}</Link>
            </span>
          </li>
          <li>
            <span className="price">${productPrice}</span>
          </li>
          <li>
            <div className="addToCard">
              <Button {...configAddToCardBtn} pd="10px" wd="100%">
                Add to card
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </ProductWrapper>
  );
};

export default Product;
