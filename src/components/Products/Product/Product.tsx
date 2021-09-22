import React from 'react';
import { IProduct } from '../../../redux/Products/products.types';
import { ProductWrapper } from './Product.style';
import Button from '../../forms/Button/Button';

const Product: React.FC<IProduct> = ({ productThumbnail, productName, productPrice }: IProduct) => {
  if (!productThumbnail || !productName || !productPrice) return null;

  const configAddToCardBtn = {
    type: 'button',
  };

  return (
    <ProductWrapper>
      <div className="thumb">
        <img src={productThumbnail} alt={productName} />
      </div>

      <div className="details">
        <ul>
          <li>
            <span className="name">{productName}</span>
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
