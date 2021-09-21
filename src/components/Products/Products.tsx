import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { fetchProductsStart } from '../../redux/Products/products.actions';
import { Wrapper } from './Products.style';

const Products: React.FC = () => {
  const dispatch = useDispatch();
  const productsData = useTypedSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);
  console.log(productsData);
  return (
    <Wrapper>
      <h1>Products</h1>
    </Wrapper>
  );
};

export default Products;
