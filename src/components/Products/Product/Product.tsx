import React from 'react';
import { IProduct } from '../../../redux/Products/products.types';
import { ProductWrapper } from './Product.style';

const Product: React.FC<IProduct> = ({productThumbnail, productName, 
productPrice}: IProduct) => {

  if (!productThumbnail || !productName || !productPrice) return null;

  return (
    <ProductWrapper>
      <div className="thumb">
        <img src={productThumbnail} alt={productName} />
      </div>

      <div className="details">
        <ul>
          <li>
            <span>
              {productName}
            </span>
          </li>
          <li>
            <span>
              {productPrice}
            </span>
          </li>
        </ul>
      </div>
    </ProductWrapper>
  )
}

export default Product
