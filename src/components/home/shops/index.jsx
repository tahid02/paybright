/* eslint-disable react/prop-types */
import styles from './shop.module.css';
import ShopCard from './shop-card/shop-card';
import MyButton from 'components/common/button/my-button';
import { NO_OF_WORKSHEETS_TO_SHOW } from 'constants/constants';
import ShopCardSkeleton from 'skeleton/shop-skeleton/shop-skeleton';
import { Spinner } from 'react-bootstrap';
import NoShopFoundIcon from 'components/common/svg/no-shop-found';

// eslint-disable-next-line react/prop-types
const Shops = ({
  search,
  filteredShops,
  shopLoading,
  queryFetchedLength,
  handleShowMore,
}) => {
  console.log('ln', queryFetchedLength);
  console.log('load', shopLoading);
  console.log('cnt', NO_OF_WORKSHEETS_TO_SHOW);
  console.log('shops says hi');
  return (
    <section className={`${styles.contentMargin} pt-4`}>
      <div className="container-fluid">
        <div
          className={
            window.innerWidth < 576
              ? 'row g-3 w-100 mx-0'
              : 'row g-5 w-100 mx-0'
          }
        >
          {(!shopLoading || shopLoading === 'next') &&
            filteredShops?.map((shop, i) => {
              return <ShopCard {...shop} key={i} />;
            })}

          {shopLoading === 'firstLoad' &&
            [...Array(NO_OF_WORKSHEETS_TO_SHOW)].map((d, i) => (
              <div
                key={i}
                className=" col-6 col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3"
              >
                <ShopCardSkeleton />
              </div>
            ))}
          {!filteredShops.length && (
            <div className="pt-5 pb-2">
              <div className="mx-auto" style={{ width: '56px' }}>
                <NoShopFoundIcon />
              </div>

              <p
                className="text-center text-lightblue fs-3"
                style={{ fontWeight: 600 }}
              >
                No search results available for &quot;{search}&quot;
              </p>
            </div>
          )}
        </div>
        <div className="text-center pt-5">
          {queryFetchedLength > NO_OF_WORKSHEETS_TO_SHOW &&
            shopLoading === false && (
              <div className="bg-transparent border-0" onClick={handleShowMore}>
                <MyButton style={{ padding: '1rem 2rem' }}>Show more</MyButton>
              </div>
            )}
          {shopLoading === 'next' && (
            <div className="bg-transparent border-0" onClick={handleShowMore}>
              <MyButton
                textColor="white"
                style={{
                  padding: '.8rem 3.5rem',
                  backgroundColor: '#f2f2f2',
                  border: '1px solid lightgray',
                }}
              >
                <Spinner animation="border" variant="success" />
              </MyButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Shops;
