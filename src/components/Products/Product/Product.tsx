import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IProduct } from '../../../redux/Products/products.types';
import { ProductWrapper } from './Product.style';
import Button from '../../forms/Button/Button';
import { addProduct } from '../../../redux/Cart/cart.actions';

const Product: React.FC<IProduct> = (product: IProduct) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { productThumbnail, productName, productPrice, documentID } = product;

  if (!productThumbnail || !productName || !productPrice || !documentID) return null;

  const configAddToCardBtn = {
    type: 'button',
  };

  const handleAddToCart = (product: IProduct) => {
    if(!product) return;
    
    dispatch(addProduct(product));

    history.push('/cart')
  }

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
              <Button 
                onClick={() => handleAddToCart(product)}  
                pd="10px" 
                wd="100%" 
                {...configAddToCardBtn} 
              >
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
