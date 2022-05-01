import { FilterContext } from 'pages/HomePage';
import React, { useContext, useEffect, useState } from 'react';
import Shops from '.';

// firebase code
import { initializeApp } from 'firebase/app';
import { getDocs } from 'firebase/firestore';
import firebaseConfig from 'components/auth/firebase.config';
import { NO_OF_SHOPS_TO_SHOW } from 'constants/constants';
import { filterFromShops } from 'utils/filterShops';
import { firstFetchQuery, nextFetchQuery } from 'services/query/get-query';
import useMountedEffect from 'hooks/useMountedEffect';
// init firebase app
initializeApp(firebaseConfig);

const FilteredShop = () => {
  const { search, category, status, zeroInterest, setSearch } =
    useContext(FilterContext);
  const [fetchedShop, setFetchedShop] = useState([]);
  const [shopLoading, setShopLoading] = useState(true);
  const [lastShop, setLastShop] = useState([]);
  const [queryFetchedLength, setQueryFetchedLength] = useState(0);
  const [searchedShop, setSearchedShop] = useState([]);

  //   when status, category or interest is changed
  useEffect(() => {
    setShopLoading('firstLoad');
    if (search.length > 0) {
      setSearch('');
    }

    const firstQuery = firstFetchQuery(category, zeroInterest, status);
    getDocs(firstQuery)
      .then((snapshot) => {
        const qry = snapshot.docs.map((doc) => doc.data());
        setQueryFetchedLength(qry.length);
        setLastShop(snapshot.docs[snapshot.docs.length - 1]);
        return qry.slice(0, NO_OF_SHOPS_TO_SHOW);
      })
      .then((filted) => {
        setFetchedShop(filted);
        setShopLoading(false);
        return filted;
      })
      .catch((err) => console.log(err));
  }, [category, status, zeroInterest]);
  //
  //
  //  // this effect will not run in initial render
  useMountedEffect(() => {
    const filted = filterFromShops(
      fetchedShop,
      search,
      category,
      status,
      zeroInterest
    ).then((filt) => {
      setSearchedShop(filt);
      setShopLoading(false);
    });
    console.log({ filted });
  }, [search]);
  //
  // when show more button is clicked
  const handleShowMore = async () => {
    setShopLoading('next');

    // console.log('hadnle click');
    const nextQuery = await nextFetchQuery(
      category,
      zeroInterest,
      status,
      lastShop
    );
    await getDocs(nextQuery)
      .then((snap) => {
        const qrynext = snap.docs.map((doc) => doc.data());
        setQueryFetchedLength(qrynext.length);
        setLastShop(snap.docs[snap.docs.length - 1]);
        return filterFromShops(
          [...fetchedShop, ...qrynext.slice(0, NO_OF_SHOPS_TO_SHOW)],
          search,
          category,
          status,
          zeroInterest
        );
      })
      .then((filted) => {
        setFetchedShop(filted);
        setShopLoading(false);
      });
  };
  return (
    <>
      <Shops
        search={search}
        filteredShops={fetchedShop}
        shopLoading={shopLoading}
        queryFetchedLength={queryFetchedLength}
        handleShowMore={handleShowMore}
        searchedShop={searchedShop}
      />
    </>
  );
};

export default FilteredShop;
