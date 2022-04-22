import styles from './good-card.module.css';

// eslint-disable-next-line react/prop-types
const GoodHandCard = ({ img, title, description }) => {
  return (
    <div className="col-12 col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
      <div className={`${styles.card}  `}>
        <div className="mx-auto ">
          <div className={`${styles.img}  `}>
            <div className="position-relative overflow-hidden">
              <div
                area-hidden={true}
                className="w-100"
                style={{ paddingBottom: '100%' }}
              ></div>
              <img
                src={
                  img ||
                  'https://www.datocms-assets.com/19671/1584813297-icon-1.png?auto=format&dpr=1&w=320'
                }
                alt=""
                className="w-100"
              />
            </div>
          </div>
          <p className={`${styles.pera}  text-darkblue`}>
            {title || ' Canada s leading buy now, pay later solution'}
          </p>
          <div className={`${styles.work}  text-darkblue`}>
            {description ||
              `Access the hundreds of thousands of Canadians who have already
            chosen PayBright.`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodHandCard;
