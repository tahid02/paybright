/* eslint-disable react/prop-types */
import React from 'react';
import Points from './points';

const CardRight = ({ styles }) => {
  return (
    <>
      <div
        className={`${styles.circle}  `}
        style={{
          right: '0rem',
          backgroundColor: '#fae980',
          zIndex: 0,
        }}
      ></div>
      <div className={`${styles.pay} bg-white`}>
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
            <Points styles={styles}>Lorem ipsum dolor sit.</Points>
            <Points styles={styles}>Lorem ipsum dolor sit.</Points>
            <Points styles={styles}>Lorem ipsum dolor sit.</Points>
          </div>
        </div>
      </div>{' '}
    </>
  );
};

export default CardRight;
