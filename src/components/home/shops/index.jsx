import styles from './shop.module.css';
import { shops } from 'shops';
import ShopCard from './shop-card/shop-card';
import MyButton from 'components/common/button/my-button';
import { useState } from 'react';

const Shops = () => {
  const primaryShop = shops.slice(0, 10);
  const [showCount, setShowCount] = useState(2);
  const [showMore, setShowMore] = useState(primaryShop);
  console.log(shops.length, showMore.length);
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
          {showMore.map((shop) => (
            <ShopCard {...shop} key={shop.id} />
          ))}
        </div>
        <div className="text-center pt-5">
          {shops.length > showMore.length && (
            <div
              className="bg-transparent border-0"
              onClick={() => {
                setShowCount((prev) => prev + 1);
                setShowMore(shops.slice(0, showCount * 10));
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
