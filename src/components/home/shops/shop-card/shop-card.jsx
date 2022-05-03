/* eslint-disable react/prop-types */
import styles from './shop-card.module.css';
import ExternalLinkIcon from 'components/common/svg/external-link-icon';
import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter';
const ShopCard = ({ id, merchant, category, bgImage, overlayImg }) => {
  return (
    <div
      className={`${styles.shop}  col-6 col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3`}
    >
      <>
        <div
          className={`${styles.shopImg} ${styles.shopBg} ${styles.shopImageHolder}`}
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* background image overlay part */}
          <div className={`${styles.overlay}  `} style={{ zIndex: 100 }}>
            <div className="img">
              <img
                src={
                  overlayImg ||
                  'https://www.datocms-assets.com/26641/1638910147-1010tires-logo.png'
                }
                alt=""
                className="w-100"
              />
            </div>
            <div className={`${styles.shopNow}  `}>
              shop now{' '}
              <span>
                <ExternalLinkIcon />
              </span>{' '}
            </div>
          </div>
        </div>

        {/* marchent catagory */}
        <div
          className={`shadow-sm text-center `}
          style={{
            padding: '1rem',
            borderBottomRightRadius: '8px',
            borderBottomLeftRadius: '8px',
          }}
        >
          <p className={`${styles.category}  `}>{category}</p>
          <p className={`${styles.marchent}  `}>
            {capitalizeFirstLetter(merchant)}
          </p>
        </div>
      </>
    </div>
  );
};

export default ShopCard;
