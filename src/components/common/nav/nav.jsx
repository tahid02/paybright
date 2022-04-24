import React, { useLayoutEffect, useState } from 'react';
import MyButton from '../button/my-button';
import Logo from './logo';
import RightOffCanvas from './offcanvas/offcanvas';
import styles from './nav.module.css';
import { Link } from 'react-router-dom';
import Flag from './offcanvas/flag';

// import MyButton from '../button/my-button';

const Nav = () => {
  const [screen, setScreen] = useState(768);
  const mobileS = 320;
  const mobileM = 375;
  const mobileL = 425;
  const tablet = 768;
  const laptop = 1024;
  const laptopL = 1440;
  useLayoutEffect(() => {
    const width = window.innerWidth;
    setScreen(width);
  }, []);
  return (
    // <section className="bg-white ">
    <div
      className={`${styles.navContainer} ${styles.paddingLR} position-sticky top-0    d-flex flex-row bg-white`}
      style={{ zIndex: 1000 }}
    >
      <div className="d-flex flex-fill align-items-center">
        {/* <img src={logo} alt="" /> */}
        <Logo />
      </div>
      {screen > laptop && (
        <div className="d-flex flex-fill flex-row justify-content-start align-items-center">
          {' '}
          <Link to="/">
            {' '}
            <button className={`${styles.navMenu}`}>shop</button>{' '}
          </Link>{' '}
          <Link to="/how-it-works">
            <button className={`${styles.navMenu} `}>how it works</button>{' '}
          </Link>{' '}
          <Link to="/company">
            {' '}
            <button className={`${styles.navMenu}`}>Company</button>
          </Link>{' '}
          <Link to="/for-merchants">
            {' '}
            <button className={`${styles.navMenu}`}>For Merchants</button>
          </Link>
          <Link to="/careers">
            {' '}
            <button className={`${styles.navMenu}`}>Careers</button>
          </Link>
        </div>
      )}

      <div className="d-flex flex-fill flex-row justify-content-end align-items-center">
        {screen > tablet && (
          <>
            {' '}
            <button className={`${styles.navMenu}`}>Help</button>
            <div className="mx-3">
              <MyButton>Log in </MyButton>{' '}
            </div>
          </>
        )}

        {screen <= laptop && (
          <div>
            <RightOffCanvas />
          </div>
        )}
        {screen > laptop && (
          <div className="">
            <span className="fw-bold  text-darkblue">En </span>
            <span className="fw-bold text-darkblue"> |</span>
            <span className="fw-bold ps-1 text-darkblue">Fr </span>
            <span>
              {' '}
              <Flag />{' '}
            </span>
          </div>
        )}
      </div>
      {/* */}
    </div>
    // </section>
  );
};

export default Nav;
