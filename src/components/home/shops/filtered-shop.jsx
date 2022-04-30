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

  // this effect will not run in initial render
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
  //   when status, category or interest is changed
  useEffect(() => {
    setShopLoading('firstLoad');
    // setSearchedShop([]);
    const firstQuery = firstFetchQuery(category, zeroInterest, status);
    getDocs(firstQuery)
      .then((snapshot) => {
        const qry = snapshot.docs.map((doc) => doc.data());
        // console.log({ qry });
        setQueryFetchedLength(qry.length);
        setLastShop(snapshot.docs[snapshot.docs.length - 1]);
        // setFetchedShop([]);

        return filterFromShops(
          qry.slice(0, NO_OF_SHOPS_TO_SHOW),
          search,
          category,
          status,
          zeroInterest
        );
        // setShowCount(1);
        // return snapshot.docs[snapshot.docs.length - 1];
      })
      .then((filted) => {
        setFetchedShop(filted);
        setShopLoading(false);
        return filted;
      })

      .catch((err) => console.log(err));
    // console.log({ shopLoading });
  }, [category, status, zeroInterest]);
  //
  //
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
        // console.log({ qrynext });
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
// import { FilterContext } from 'pages/HomePage';
// import React, { useContext, useEffect, useState } from 'react';
// import Shops from '.';

// // firebase code
// import { initializeApp } from 'firebase/app';
// import {
//   getFirestore,
//   collection,
//   getDocs,
//   query,
//   orderBy,
//   startAt,
//   limit,
//   where,
// } from 'firebase/firestore';
// import firebaseConfig from 'components/auth/firebase.config';
// import { NO_OF_SHOPS_TO_SHOW } from 'constants/constants';
// import { filterFromShops } from 'utils/filterShops';
// // init firebase app
// initializeApp(firebaseConfig);
// // init service
// const db = getFirestore();
// // collection ref
// const colRef = collection(db, 'shops');
// // get collection data

// const FilteredShop = () => {
//   const { search, category, status, zeroInterest } = useContext(FilterContext);
//   const [fetchedShop, setFetchedShop] = useState([]);
//   const [shopLoading, setShopLoading] = useState(true);
//   // const [showCount, setShowCount] = useState(1);
//   const [lastShop, setLastShop] = useState([]);
//   const [queryFetchedLength, setQueryFetchedLength] = useState(0);

//   useEffect(() => {
//     setShopLoading('firstLoad');
//     let firstQuery;
//     if (category.toLowerCase() === 'all') {
//       firstQuery = query(
//         colRef,
//         where('status', '==', status.toLowerCase()),
//         where('zeroInterest', '==', zeroInterest),

//         orderBy('id'),
//         limit(NO_OF_SHOPS_TO_SHOW + 1)
//       );
//     } else {
//       firstQuery = query(
//         colRef,
//         where('category', '==', category),
//         where('status', '==', status.toLowerCase()),
//         where('zeroInterest', '==', zeroInterest),
//         orderBy('id'),
//         limit(NO_OF_SHOPS_TO_SHOW + 1)
//       );
//     }
//     // setFetchedShop((prevShp) => {
//     //   fetchedShop.filter((shp) =>
//     //     shp?.merchant
//     //       .toLowerCase()
//     //       .includes(search.length ? search.toLowerCase() : '')
//     //   );
//     // });
//     // setFetchedShop([...fetchedShop, ...[...Array(NO_OF_SHOPS_TO_SHOW)]]);

//     getDocs(firstQuery)
//       .then((snapshot) => {
//         const qry = snapshot.docs.map((doc) => doc.data());
//         console.log({ qry });
//         setQueryFetchedLength(qry.length);
//         setLastShop(snapshot.docs[snapshot.docs.length - 1]);

//         return filterFromShops(
//           qry.slice(0, NO_OF_SHOPS_TO_SHOW),
//           search,
//           category,
//           status,
//           zeroInterest
//         );
//         // setShowCount(1);
//         // return snapshot.docs[snapshot.docs.length - 1];
//       })
//       .then((filted) => {
//         setFetchedShop(filted);

//         setShopLoading(false);
//         // setShowCount(1);
//         // return snapshot.docs[snapshot.docs.length - 1];
//       })
//       .catch((err) => console.log(err));
//   }, [category]);

//   useEffect(() => {
//     setShopLoading('firstLoad');
//     let firstQuery;
//     if (category.toLowerCase() === 'all') {
//       firstQuery = query(
//         colRef,
//         where('status', '==', status.toLowerCase()),
//         where('zeroInterest', '==', zeroInterest),

//         orderBy('id'),
//         limit(NO_OF_SHOPS_TO_SHOW + 1)
//       );
//     } else {
//       firstQuery = query(
//         colRef,
//         where('category', '==', category),
//         where('status', '==', status.toLowerCase()),
//         where('zeroInterest', '==', zeroInterest),
//         orderBy('id'),
//         limit(NO_OF_SHOPS_TO_SHOW + 1)
//       );
//     }
//     // setFetchedShop((prevShp) => {
//     //   fetchedShop.filter((shp) =>
//     //     shp?.merchant
//     //       .toLowerCase()
//     //       .includes(search.length ? search.toLowerCase() : '')
//     //   );
//     // });
//     // setFetchedShop([...fetchedShop, ...[...Array(NO_OF_SHOPS_TO_SHOW)]]);

//     getDocs(firstQuery)
//       .then((snapshot) => {
//         const qry = snapshot.docs.map((doc) => doc.data());
//         console.log({ qry });
//         setQueryFetchedLength(qry.length);
//         setLastShop(snapshot.docs[snapshot.docs.length - 1]);

//         return filterFromShops(
//           [...fetchedShop, ...qry.slice(0, NO_OF_SHOPS_TO_SHOW)],
//           search,
//           category,
//           status,
//           zeroInterest
//         );
//         // setShowCount(1);
//         // return snapshot.docs[snapshot.docs.length - 1];
//       })
//       .then((filted) => {
//         setFetchedShop(filted);

//         setShopLoading(false);
//         // setShowCount(1);
//         // return snapshot.docs[snapshot.docs.length - 1];
//       })
//       .catch((err) => console.log(err));
//   }, [search, status, zeroInterest]);

//   const handleShowMore = async () => {
//     setShopLoading('next');
//     // const next = query(
//     //   colRef,
//     //   orderBy('id'),
//     // startAt(lastShop),
//     //   limit(NO_OF_SHOPS_TO_SHOW + 1)
//     // );
//     console.log('hadnle click');
//     let nextQuery;
//     if (category.toLowerCase() === 'all') {
//       nextQuery = query(
//         colRef,
//         where('status', '==', status.toLowerCase()),
//         where('zeroInterest', '==', zeroInterest),
//         orderBy('id'),
//         startAt(lastShop),
//         limit(NO_OF_SHOPS_TO_SHOW + 1)
//       );
//     } else {
//       nextQuery = query(
//         colRef,
//         where('category', '==', category),
//         where('status', '==', status.toLowerCase()),
//         where('zeroInterest', '==', zeroInterest),
//         orderBy('id'),
//         startAt(lastShop),
//         limit(NO_OF_SHOPS_TO_SHOW + 1)
//       );
//     }
//     await getDocs(nextQuery)
//       .then((snap) => {
//         const qrynext = snap.docs.map((doc) => doc.data());
//         console.log({ qrynext });
//         setQueryFetchedLength(qrynext.length);
//         setLastShop(snap.docs[snap.docs.length - 1]);
//         return filterFromShops(
//           [...fetchedShop, ...qrynext.slice(0, NO_OF_SHOPS_TO_SHOW)],
//           search,
//           category,
//           status,
//           zeroInterest
//         );
//       })
//       .then((filted) => {
//         setFetchedShop(filted);
//         setShopLoading(false);
//       });
//   };
//   return (
//     <>
//       <Shops
//         filteredShops={fetchedShop}
//         shopLoading={shopLoading}
//         queryFetchedLength={queryFetchedLength}
//         handleShowMore={handleShowMore}
//       />
//     </>
//   );
// };

// export default FilteredShop;
