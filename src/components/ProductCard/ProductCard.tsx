import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { fetchProductStart, setProduct } from '../../redux/Products/products.actions';
import Button from '../forms/Button/Button';
import { Wrapper } from './ProductCard.style';
import { IProduct } from './../../redux/Products/products.types';

const ProductCard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { productID }: { productID: string } = useParams();
  const product = useTypedSelector((state) => state.products.product);

  const { productThumbnail, productName, productPrice, productDesc } = product;

  useEffect(() => {
    dispatch(fetchProductStart(productID));

    return () => {
      dispatch(setProduct({}));
    };
  }, []);

  const handleAddToCart = (product: IProduct) => {
    // if (!product) return;
    // dispatch(
    //   addProduct(product)
    // );
    // history.push('/cart');
    console.log('handle add card');
  };

  const configAddToCartBtn = {
    type: 'button',
    pd: '10px',
  };

  return (
    <Wrapper>
      <div className="productCard">
        <div className="hero">
          <img src={productThumbnail} alt={productName}/>
        </div>
        <div className="productDetails">
          <ul>
            <li>
              <h1>{productName}</h1>
            </li>
            <li>
              <span>£{productPrice}</span>
            </li>
            <li>
              <div className="addToCart">
                <Button {...configAddToCartBtn} onClick={() => handleAddToCart(product)}>
                  Add to cart
                </Button>
              </div>
            </li>
            <li>
              <span className="desc" dangerouslySetInnerHTML={{ __html: productDesc }} />
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductCard;
