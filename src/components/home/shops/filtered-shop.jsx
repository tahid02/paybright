import { FilterContext } from 'pages/HomePage';
import React, { useContext, useEffect, useState } from 'react';
import Shops from '.';

// firebase code
import { initializeApp } from 'firebase/app';
import { getDocs } from 'firebase/firestore';
import firebaseConfig from 'components/auth/firebase.config';
import { NO_OF_WORKSHEETS_TO_SHOW } from 'constants/constants';
import { firstFetchQuery, nextFetchQuery } from 'services/query/get-query';
import { allShopsdata } from './alldata';
// init firebase app
initializeApp(firebaseConfig);

const FilteredShop = () => {
  const { search, category, status, zeroInterest } = useContext(FilterContext);
  const [fetchedShop, setFetchedShop] = useState([]);
  const [shopLoading, setShopLoading] = useState(true);
  const [lastShop, setLastShop] = useState([]);
  const [queryFetchedLength, setQueryFetchedLength] = useState(0);

  //   when any filter value is changed
  useEffect(() => {
    setShopLoading('firstLoad');

    const firstQuery = firstFetchQuery(category, zeroInterest, status, search);
    getDocs(firstQuery)
      .then((snapshot) => {
        const qry = snapshot.docs.map((doc) => doc.data());
        setQueryFetchedLength(qry.length);
        if (qry.length > NO_OF_WORKSHEETS_TO_SHOW) {
          setLastShop(snapshot.docs[snapshot.docs.length - 1]);
        }
        return qry.slice(0, NO_OF_WORKSHEETS_TO_SHOW);
      })
      .then((filted) => {
        setFetchedShop(filted);
        setShopLoading(false);
        return filted;
      })
      .catch((err) => console.log(err));
  }, [category, status, zeroInterest, search]);
  //

  // when show more button is clicked
  const handleShowMore = async () => {
    setShopLoading('next');
    // console.log('hadnle click');
    const nextQuery = await nextFetchQuery(
      category,
      zeroInterest,
      status,
      search,
      lastShop
    );
    await getDocs(nextQuery)
      .then((snap) => {
        const qrynext = snap.docs.map((doc) => doc.data());
        setQueryFetchedLength(qrynext.length);
        if (qrynext.length > NO_OF_WORKSHEETS_TO_SHOW) {
          setLastShop(snap.docs[snap.docs.length - 1]);
        }
        return [...fetchedShop, ...qrynext.slice(0, NO_OF_WORKSHEETS_TO_SHOW)];
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
      />
    </>
  );
};

export default FilteredShop;
