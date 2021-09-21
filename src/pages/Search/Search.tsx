import React from 'react';
import ProductsResults from '../../components/Products/Products';
import { SearchPage } from './Search.style';

const Search: React.FC = () => {
  return (
    <SearchPage>
      <ProductsResults />
    </SearchPage>
  );
};

export default Search;
