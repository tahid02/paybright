import React, { useLayoutEffect, useState } from 'react';
import MyButton from '../button/my-button';
import Logo from './logo';
import RightOffCanvas from './offcanvas/offcanvas';
import styles from './nav.module.css';
import { Link } from 'react-router-dom';

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
    <div
      className={`${styles.navContainer} container px-4  d-flex flex-row bg-white`}
      style={{}}
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
            <div className="">
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
            <span>en</span>
            <span>fr</span>
            <span>flag</span>
          </div>
        )}
      </div>
      {/* */}
    </div>
  );
};

export default Nav;
