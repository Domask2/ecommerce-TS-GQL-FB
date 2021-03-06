import React, { useEffect } from 'react';
import { IProduct } from '../../redux/Products/products.types';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { fetchProductsStart } from '../../redux/Products/products.actions';
import { useHistory, useParams } from 'react-router';
import Product from './Product/Product';
import { Wrapper } from './Products.style';
import FormSelect from './../forms/FormSelect/FormSelect';
import LoadMore from '../LoadMore/LoadMore';

type Tproducts = TData | null;

type TData = {
  data: IProduct[];
  queryDoc: any;
  isLastPage: boolean;
};

const ProductsResults: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType }: { filterType: string } = useParams();
  const products: any = useTypedSelector((state) => state.products.products);

  const { data, queryDoc, isLastPage }: { data: IProduct[]; queryDoc: any; isLastPage: boolean } =
    products;

  useEffect(() => {
    dispatch(fetchProductsStart({ filterType }));
  }, [filterType]);

  if (products.data?.length < 1) {
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

  const onLoadMoreEvt = () => {
    dispatch(
      fetchProductsStart({
        filterType,
        startAfterDocs: queryDoc,
        persistProducts: data,
      }),
    );
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
          {products.data?.map((product: IProduct, pos: any) => {
            const { productThumbnail, productName, productPrice } = product;

            if (!productThumbnail || !productName || !productPrice) return null;

            const configProduct = {
              ...product,
            };

            return <Product key={pos} {...configProduct} />;
          })}
        </div>
        <LoadMore onLoadMoreEvt={onLoadMoreEvt} />
      </div>
    </Wrapper>
  );
};

export default ProductsResults;
