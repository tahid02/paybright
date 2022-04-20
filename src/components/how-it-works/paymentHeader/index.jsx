import styles from './paymentHeader.module.css';
const PaymentHeader = () => {
  return (
    <header className={`${styles.padding}`}>
      <div className={`${styles.contentMargin}  `}>
        <div className="container-fluid">
          <div className="text-center">
            <h3 className="h3 text-darkblue">How it Works </h3>
          </div>
          <div className="w-100">
            <div className={`${styles.w50}  mx-auto`}>
              <h1 className="h1Font text-center text-darkblue">
                What is a PayBright payment plan?{' '}
              </h1>
            </div>
          </div>
          <div className="w-100">
            <div className={`${styles.w50}  mx-auto`}>
              <p className={`${styles.pFont}  text-center text-darkblue`}>
                Our payment plans allow you to break down the cost of a purchase
                into a series of biweekly or monthly installments. Apply for any
                PayBright payment option with no impact to your credit score.{' '}
              </p>
            </div>
          </div>
          <p className={`${styles.pFont}  text-center text-darkblue`}>
            Available at participating merchants.
          </p>
        </div>
      </div>
    </header>
  );
};

export default PaymentHeader;
