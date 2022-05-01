const { NO_OF_SHOPS_TO_SHOW } = require('constants/constants');
const {
  query,
  where,
  orderBy,
  limit,
  collection,
  getFirestore,
  startAt,
} = require('firebase/firestore');
const db = getFirestore();
const colRef = collection(db, 'shops');

export const firstFetchQuery = (category, zeroInterest, status) => {
  let firstQuery;
  if (category.toLowerCase() === 'all') {
    firstQuery = query(
      colRef,
      where('status', '==', status.toLowerCase()),
      where('zeroInterest', '==', zeroInterest),
      orderBy('id'),
      limit(NO_OF_SHOPS_TO_SHOW + 1)
    );
  } else {
    firstQuery = query(
      colRef,
      where('category', '==', category),
      where('status', '==', status.toLowerCase()),
      where('zeroInterest', '==', zeroInterest),
      orderBy('id'),
      limit(NO_OF_SHOPS_TO_SHOW + 1)
    );
  }
  return firstQuery;
};
export const nextFetchQuery = async (
  category,
  zeroInterest,
  status,
  lastShop
) => {
  let nextQuery;
  if (category.toLowerCase() === 'all') {
    nextQuery = query(
      colRef,
      where('status', '==', status.toLowerCase()),
      where('zeroInterest', '==', zeroInterest),
      orderBy('id'),
      startAt(lastShop),
      limit(NO_OF_SHOPS_TO_SHOW + 1)
    );
  } else {
    nextQuery = query(
      colRef,
      where('category', '==', category),
      where('status', '==', status.toLowerCase()),
      where('zeroInterest', '==', zeroInterest),
      orderBy('id'),
      startAt(lastShop),
      limit(NO_OF_SHOPS_TO_SHOW + 1)
    );
  }
  return nextQuery;
};