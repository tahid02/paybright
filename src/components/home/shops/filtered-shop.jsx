import { FilterContext } from 'pages/HomePage';
import React, { useContext } from 'react';
import { shops } from 'shops';
import Shops from '.';

const FilteredShop = () => {
  console.log('hello filter');
  const { search, category, status, zeroInterest } = useContext(FilterContext);
  const filteredShops = shops.filter((shop) => {
    return (
      shop.merchant.toLowerCase().includes(search.toLowerCase()) &&
      shop.category
        .toLowerCase()
        .includes(
          category.toLowerCase() === 'All'.toLowerCase()
            ? ''
            : category.toLowerCase()
        ) &&
      shop.status
        .toLowerCase()
        .includes(
          status.toLowerCase() === 'Alphabetical'.toLowerCase()
            ? ''
            : status.toLowerCase()
        ) &&
      shop.zeroInterest === zeroInterest
    );
  });
  console.log({ filteredShops });
  return (
    <>
      <Shops filteredShops={filteredShops} />
    </>
  );
};

export default FilteredShop;
