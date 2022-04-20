import styles from './featured.module.css';
import ShopCard from 'components/home/shops/shop-card/shop-card';
import { shops } from 'shops';
import Heading from 'components/common/heading/heading';
import MyButton from 'components/common/button/my-button';

const FeaturedMerchants = () => {
  return (
    <section className={`${styles.contentMargin} pt-4`}>
      <div className="container-fluid">
        <h2 className="h2Font text-center">Featured merchants</h2>
        <p className={`${styles.pFpadding} text-center `}>
          Pay over time with our top merchants.
        </p>
        <div className={`${styles.featuredPadding}  `}>
          <div
            className={
              window.innerWidth < 576
                ? 'row g-3 w-100 mx-0'
                : 'row g-5 w-100 mx-0'
            }
          >
            {shops.slice(0, 4).map((shop) => (
              <ShopCard {...shop} key={shop.id} />
            ))}
          </div>
        </div>
        <div className="text-center">
          {' '}
          <MyButton>See More </MyButton>
        </div>
      </div>
      ;
    </section>
  );
};

export default FeaturedMerchants;
