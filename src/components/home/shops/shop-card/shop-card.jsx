import styles from './shop-card.module.css';
import { BiLinkExternal } from 'react-icons/bi';
// eslint-disable-next-line react/prop-types
const ShopCard = ({ id, marchent, category, bgImage, overlayImg }) => {
  return (
    <div
      className={`${styles.shop}  col-6 col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3`}
    >
      <div
        className={`${styles.shopImg} ${styles.shopBg} ${styles.shopImageHolder}`}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* background image overlay part */}
        <div className={`${styles.overlay}  `} style={{ zIndex: 999 }}>
          <div className="img">
            <img
              src={overlayImg}
              // src="https://www.datocms-assets.com/26641/1638910147-1010tires-logo.png"
              alt=""
              className="w-100"
            />
          </div>
          <div className={`${styles.shopNow}  `}>
            shop now{' '}
            <span>
              <BiLinkExternal />
            </span>{' '}
          </div>
        </div>
      </div>

      {/* marchent catagory */}
      {/* <div className="shopInfo" style={{ padding: '1rem' }}> */}
      <div
        className={`shadow-sm text-center `}
        style={{
          padding: '1rem',
          borderBottomRightRadius: '8px',
          borderBottomLeftRadius: '8px',
        }}
      >
        <p className={`${styles.category}  `}>{marchent}</p>
        <p className={`${styles.marchent}  `}>{category}</p>
      </div>
    </div>
  );
};

export default ShopCard;
