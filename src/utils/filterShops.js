export const filterFromShops = async (
  shops,
  search,
  category,
  status,
  zeroInterest
) => {
  try {
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
        shop.status.toLowerCase().includes(status?.toLowerCase() || '') &&
        shop.zeroInterest === zeroInterest
      );
    });
    return filteredShops;
  } catch (error) {
    console.log({ error });
  }
};
