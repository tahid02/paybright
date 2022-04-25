import styles from './payment.module.css';
import Points from './points';

// eslint-disable-next-line react/prop-types
const Payment = ({ bgColor }) => {
  return (
    <section className=" position-relative w-100 overflow-hidden">
      <section className={`${bgColor || styles.paymentBg} pt-5 w-100`}>
        <section className={` ${styles.contentMargin} w-100 `}>
          <div className="container-fluid">
            <div className={`${styles.rowCont}  `}>
              <div className="row ">
                <div
                  className={`${styles.payCard} col-xs-12 col-sm-12 col-md-6 col-xl-6 position-relative  `}
                >
                  <div
                    className={`${styles.circle} ${styles.leftCircle}  `}
                    style={{
                      // left: '0rem',
                      backgroundColor: '#ff7575',
                      zIndex: 0,
                    }}
                  ></div>
                  {/* <div className={`${styles.pay}  bg-white`}> */}
                  <div className={`${styles.payLeft}  bg-white`}>
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
                        <Points styles={styles}> No interest or fees</Points>
                        <Points styles={styles}>
                          {' '}
                          No impact on credit score
                        </Points>
                        <Points styles={styles}>
                          {' '}
                          Easy, automatic payments
                        </Points>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.payCard} col-xs-12 col-sm-12 col-md-6 col-xl-6 position-relative  `}
                >
                  <div
                    className={`${styles.circle}  ${styles.rightCircle}`}
                    style={{
                      backgroundColor: '#fae980',
                    }}
                  ></div>
                  {/* <div className={`${styles.pay} bg-white`}> */}
                  <div className={`${styles.payRight} bg-white`}>
                    {' '}
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
                        <Points styles={styles}>
                          {' '}
                          Payment plans from 0% interest
                        </Points>
                        <Points styles={styles}>
                          No impact to credit score
                        </Points>
                        <Points styles={styles}>
                          Easy, automatic payments
                        </Points>
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
