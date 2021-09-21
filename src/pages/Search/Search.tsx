import React from 'react';
import Products from '../../components/Products/Products';
import { SearchPage } from './Search.style';

const Search: React.FC = () => {
  return (
    <SearchPage>
      <Products />
    </SearchPage>
  );
};

export default Search;
