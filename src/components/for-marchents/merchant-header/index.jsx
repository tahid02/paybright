import MyButton from 'components/common/button/my-button';
import Heading from 'components/common/heading/heading';
import React from 'react';
import styles from './merchant.module.css';
const MerchantHeader = () => {
  return (
    <section className={`${styles.head} py-5 `}>
      <section className="py-5">
        <Heading>
          Grow your business with <br /> PayBright
        </Heading>
        <p className="text-lightblue py-5 text-center mx-4">
          Join 8,500+ Canadian merchants who trust PayBright to grow their
          business in-store and online.
        </p>
        <div className="text-sm-center text-xs-center  row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center text-md-end text-sm-end pt-2">
            {' '}
            <MyButton>Enroll Now </MyButton>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center text-md-start text-sm-start pt-2">
            {' '}
            <span className="ms-2">
              <MyButton>Get In touch</MyButton>
            </span>
          </div>
        </div>
      </section>
      <section className={`${styles.merchantHeader}  `}></section>
    </section>
  );
};

export default MerchantHeader;
