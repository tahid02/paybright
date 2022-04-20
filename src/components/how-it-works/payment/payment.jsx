import styles from './payment.module.css';
import Points from './points';

const Payment = () => {
  return (
    <section className=" position-relative w-100 overflow-hidden">
      <section className={`${styles.paymentBg} pt-5 w-100`}>
        <section className={` ${styles.contentMargin} w-100 `}>
          <div className="container-fluid">
            <div className={`${styles.rowCont}  `}>
              <div className="row ">
                <div
                  className={`${styles.payCard} col-xs-12 col-sm-6 col-md-6 col-xl-6 position-relative  `}
                >
                  <div className={`${styles.pay}  bg-white`}>
                    {' '}
                    <div
                      className={`${styles.circle}  `}
                      style={{ left: '-3rem', backgroundColor: '#ff7575' }}
                    ></div>
                    <div className={`${styles.pay4Img}  `}>
                      <img
                        src="https://www.datocms-assets.com/19671/1586375201-group-737.png"
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className={`${styles.pay4}  `}>
                      <h3 className={`${styles.h3}  m-0`}>pay in 4</h3>
                      <p className={`${styles.p} text-center `}>
                        4 interest-free biweekly payments for smaller purchases.
                      </p>
                      <hr className={`${styles.hr}  `} />
                      <div className={`${styles.points} text-start `}>
                        <Points styles={styles}>Lorem ipsum dolor sit.</Points>
                        <Points styles={styles}>Lorem ipsum dolor sit.</Points>
                        <Points styles={styles}>Lorem ipsum dolor sit.</Points>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.payCard} col-xs-12 col-sm-6 col-md-6 col-xl-6 position-relative  `}
                >
                  <div className={`${styles.pay} bg-white`}>
                    {' '}
                    <div
                      className={`${styles.circle}  `}
                      style={{ right: '-3rem', backgroundColor: '#fae980' }}
                    ></div>
                    <div className={`${styles.pay4Img}  `}>
                      <img
                        src="https://www.datocms-assets.com/19671/1586375231-group-736.png?auto=format&dpr=1&w=580"
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className={`${styles.pay4}  `}>
                      <h3 className={`${styles.h3}  m-0`}>pay in 4</h3>
                      <p className={`${styles.p} text-center `}>
                        4 interest-free biweekly payments for smaller purchases.
                      </p>
                      <hr className={`${styles.hr}  `} />
                      <div className={`${styles.points} text-start `}>
                        <Points styles={styles}>Lorem ipsum dolor sit.</Points>
                        <Points styles={styles}>Lorem ipsum dolor sit.</Points>
                        <Points styles={styles}>Lorem ipsum dolor sit.</Points>
                      </div>
                    </div>
                  </div>{' '}
                </div>
                ;
              </div>
            </div>
          </div>
        </section>{' '}
      </section>
    </section>
  );
};
export default Payment;
