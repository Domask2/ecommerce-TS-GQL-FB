import React, { useEffect } from 'react';
import { IProduct } from '../../redux/Products/products.types';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { fetchProductsStart } from '../../redux/Products/products.actions';
import { useHistory, useParams } from 'react-router';
import Product from './Product/Product';
import { Wrapper } from './Products.style';
import FormSelect from './../forms/FormSelect/FormSelect';

type Tproducts = IProduct[] | null;

const ProductsResults: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType }: { filterType: string } = useParams();
  const products: Tproducts = useTypedSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProductsStart({ filterType }));
  }, [filterType]);

  if (products!.length < 1) {
    return (
      <div className="products">
        <p>No search results.</p>
      </div>
    );
  }

  const handleFilter = (e: any) => {
    const nextFilter = e.target.value;
    history.push(`/search/${nextFilter}`);
  };

  return (
    <Wrapper>
      <div className="products">
        <h1>Browse Products</h1>

        <FormSelect
          defaultValue={filterType}
          options={[
            {
              value: '',
              name: 'Show All',
            },
            {
              value: 'classic',
              name: 'Classic',
            },
            {
              value: 'modern',
              name: 'Modern',
            },
          ]}
          handleChange={handleFilter}
        />

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
    </Wrapper>
  );
};

export default ProductsResults;
