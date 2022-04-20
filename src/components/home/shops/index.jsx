import styles from './shop.module.css';
import { shops } from 'shops';
import ShopCard from './shop-card/shop-card';

const Shops = () => {
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
          {shops.slice(0, 20).map((shop) => (
            <ShopCard {...shop} key={shop.id} />
          ))}
        </div>
      </div>
      ;
    </section>
  );
};

export default Shops;
