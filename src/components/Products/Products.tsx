import React, { useEffect } from 'react';
import { IProduct } from '../../redux/Products/products.types';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { fetchProductsStart } from '../../redux/Products/products.actions';
import Product from './Product/Product';
import { Wrapper } from './Products.style';

type Tproducts = IProduct[] | null;

const ProductsResults: React.FC = () => {
  const dispatch = useDispatch();
  const products: Tproducts = useTypedSelector((state) => state.products.products);
  console.log(products);
  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);

  if (products!.length < 1) {
    return (
      <div className="products">
        <p>No search results.</p>
      </div>
    );
  }

  return (
    <Wrapper>
      <div className="products">
        <h1>Browse Products</h1>
        <div className="productsWrapper">
          <div className="productsResults">
            {products!.map((product: IProduct, pos) => {
              const { productThumbnail, productName, productPrice } = product;

              if (!productThumbnail || !productName || !productPrice) return null;

              const configProduct = {
                productThumbnail,
                productName,
                productPrice,
              };

              return <Product {...configProduct} />;
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductsResults;
