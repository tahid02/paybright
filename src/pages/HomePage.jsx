import Hero from 'components/home/hero/hero';
import Shops from 'components/home/shops';
import FilteredShop from 'components/home/shops/filtered-shop';
import NavFooterLayout from 'layout/nav-footer-layout';
import { createContext, useState } from 'react';
import ShopCardSkeleton from 'skeleton/shop-skeleton/shop-skeleton';
export const FilterContext = createContext();

const HomePage = () => {
  console.log('hello from homepage');
  const [status, setStatus] = useState('featured');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [zeroInterest, setZeroInterest] = useState(false);
  console.log({ status });
  console.log({ zeroInterest });
  console.log({ category });
  console.log({ search });

  return (
    <>
      <NavFooterLayout>
        <FilterContext.Provider
          value={{
            status,
            setStatus,
            search,
            setSearch,
            category,
            setCategory,
            zeroInterest,
            setZeroInterest,
          }}
        >
          <Hero />
          <FilteredShop />
          {/* <Shops /> */}
        </FilterContext.Provider>
      </NavFooterLayout>
    </>
  );
};

export default HomePage;
