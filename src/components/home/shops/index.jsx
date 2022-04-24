/* eslint-disable react/prop-types */
import styles from './shop.module.css';
import ShopCard from './shop-card/shop-card';
import MyButton from 'components/common/button/my-button';
import { useEffect, useState } from 'react';
import { NO_OF_SHOPS_TO_SHOW } from 'constants/constants';

// eslint-disable-next-line react/prop-types
const Shops = ({ filteredShops }) => {
  const [showCount, setShowCount] = useState(1);
  useEffect(() => {
    setShowCount(1);
  }, [filteredShops?.length]);

  return (
    <section className={`${styles.contentMargin} pt-4`}>
      <div className="">
        <div
          className={
            window.innerWidth < 576
              ? 'row g-3 w-100 mx-0'
              : 'row g-5 w-100 mx-0'
          }
        >
          {filteredShops?.length > NO_OF_SHOPS_TO_SHOW * showCount ||
          showCount > 1
            ? filteredShops
                ?.slice(0, showCount * NO_OF_SHOPS_TO_SHOW)
                .map((shop) => {
                  return <ShopCard {...shop} key={shop.id} />;
                })
            : filteredShops.map((shop) => {
                return <ShopCard {...shop} key={shop.id} />;
              })}
          {!filteredShops?.length && (
            <h4 className="text-center text-lightblue h4Font">
              Sorry! No shop found
            </h4>
          )}
        </div>
        <div className="text-center pt-5">
          {filteredShops?.length > NO_OF_SHOPS_TO_SHOW * showCount && (
            <div
              className="bg-transparent border-0"
              onClick={() => {
                setShowCount((prev) => prev + 1);
              }}
            >
              <MyButton>Show more</MyButton>
            </div>
          )}
        </div>
      </div>
      ;
    </section>
  );
};

export default Shops;
