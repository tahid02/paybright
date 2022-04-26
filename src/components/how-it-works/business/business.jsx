import MyButton from 'components/common/button/my-button';
import React from 'react';
import styles from './business.module.css';
const Business = () => {
  return (
    <section
      className={`${styles.height} position-relative `}
      // style={{ height: '10vh' }}
    >
      <section className={`${styles.contentMargin}  h-100`}>
        <section className="container-fluid h-100">
          <section className=" d-flex justify-content-center align-items-center h-100">
            <div className="row w-100 g-2 h-100">
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex justify-content-center align-items-start align-items-sm-end">
                <img
                  src="https://www.datocms-assets.com/19671/1586294910-plant-left.png?auto=format&dpr=1&w=527"
                  alt=""
                  // className={`${styles.imgW}  img-fluid`}
                  className={
                    window.innerWidth > 378 && window.innerWidth < 576
                      ? ` w-50 img-fluid `
                      : `w-75 img-fluid`
                  }
                />
              </div>
              <div className="col-xs-12 col-sm-5 col-md-6 col-lg-5 col-xl-6 col-xxl-6  text-center d-flex justify-content-center align-items-start  align-items-sm-center">
                <div className={window.innerWidth < 1200 ? 'w-100' : 'w-75'}>
                  <h2 className="h2Font text-darkblue">Are you a business?</h2>
                  <p className={`${styles.pFont}  text-darkblue`}>
                    Add PayBright as a payment method to your store. Available
                    in-store and online.
                  </p>
                  <MyButton style={{ padding: '1rem 2rem' }}>
                    Learn More{' '}
                  </MyButton>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3 col-xl-2 col-xxl-3 d-none d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block  d-xs-none ">
                <div className="d-flex justify-content-center align-items-start w-100 h-100">
                  <img
                    src="https://www.datocms-assets.com/19671/1586294916-plant-right.png?auto=format&dpr=1&w=571"
                    alt=""
                    className={` w-75 img-fluid`}
                    // className={`${styles.imgW}  img-fluid`}
                  />
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>{' '}
      <section className="w-100 h-100">
        <div
          className={`${styles.circleRight} position-absolute`}
          style={{ width: '23%', top: 0, left: 0, zIndex: -1 }}
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBhcmlhLWhpZGRlbj0idHJ1ZSI+CiAgPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNTAiIGZpbGw9IiNGOEY1RjEiLz4KPC9zdmc+"
            alt=""
            className="img-fluid"
            width="100%"
          />
        </div>
        <div
          className={`${styles.circleLeft} position-absolute`}
          style={{
            width: '23%',
            bottom: 0,
            right: 0,
            zIndex: -1,
          }}
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBhcmlhLWhpZGRlbj0idHJ1ZSI+CiAgPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNTAiIGZpbGw9IiNGOEY1RjEiLz4KPC9zdmc+"
            alt=""
            className="img-fluid"
            width="100%"
          />
        </div>
      </section>{' '}
    </section>
  );
};

export default Business;
