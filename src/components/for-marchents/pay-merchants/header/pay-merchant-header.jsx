import MyButton from 'components/common/button/my-button';
import styles from './pay-merchant-header.module.css';
const MerchantPayHeader = () => {
  return (
    <section
      className={`${styles.padding} `}
      style={{ backgroundColor: '#f8f5f1' }}
    >
      <div className={`${styles.contentMargin}  `}>
        <div className="container-fluid">
          <div className="text-center">
            <h2 className="h2Font text-darkblue">
              2 ways for your customers to pay
            </h2>
          </div>

          <div className="w-100">
            <div className={`${styles.w50}  mx-auto`}>
              <p className={`${styles.pFont}  text-center text-darkblue`}>
                Offer more flexible payment options at checkout, in-store and
                online.
              </p>
            </div>
          </div>
          <div className="text-center">
            <MyButton style={{ padding: '1rem 2rem' }}>Get in touch</MyButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchantPayHeader;
