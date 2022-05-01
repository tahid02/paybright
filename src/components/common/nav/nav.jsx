import { useState } from 'react';
import MyButton from '../button/my-button';
import Logo from './logo';
import RightOffCanvas from './offcanvas/offcanvas';
import { Link } from 'react-router-dom';
import Flag from './flag';
import styles from './nav.module.css';
import useClickedOutside from 'hooks/useClickedOutside';

// eslint-disable-next-line react/prop-types
const Nav = ({ showMenu = true }) => {
  const [showLogin, setShowLogin] = useState(false);
  const { refElement } = useClickedOutside(() => setShowLogin(false));
  return (
    <div
      className={`${styles.navContainer} ${styles.paddingLR} ${
        !showMenu && 'shadow-sm'
      } position-sticky top-0    d-flex flex-row bg-white`}
      style={{ zIndex: 1000 }}
    >
      <div className="d-flex flex-fill align-items-center">
        <Logo />
      </div>

      <div
        className="d-none d-xl-block"
        style={{ visibility: `${!showMenu ? 'hidden' : 'visible'}` }}
      >
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
      </div>

      <div
        className="d-flex flex-fill flex-row justify-content-end align-items-center"
        style={{ visibility: `${!showMenu ? 'hidden' : 'visible'}` }}
      >
        <div className="d-none d-md-block position-relative ">
          <div className="d-flex justify-content-end align-items-center">
            {' '}
            <button className={`${styles.navMenu}`}>Help</button>
            <div
              ref={refElement}
              className="mx-3"
              onClick={() => setShowLogin((showLogin) => !showLogin)}
            >
              <MyButton>Log in </MyButton>{' '}
            </div>
          </div>
          {showLogin && (
            <div
              className="position-absolute bg-white d-flex flex-column justify-content-center shadow"
              style={{
                width: 'auto',
                marginTop: '1px',
                padding: '15% 20% ',
                borderRadius: '.5rem',
              }}
            >
              <div>
                <Link to="/customer-login" className="text-decoration-none">
                  <MyButton
                    textColor="lightblue"
                    style={{
                      backgroundColor: 'white',
                      border: '1px solid var(--lightblue)',
                      color: '#4a4af4',
                    }}
                  >
                    Customer Log in
                  </MyButton>
                </Link>
              </div>
              <div className="text-center   mt-3">
                {' '}
                <Link
                  to="/merchant-login"
                  className="text-lightblue"
                  style={{ fontWeight: 600 }}
                >
                  Merchant Log in
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="d-block d-xl-none">
          <RightOffCanvas />
        </div>

        <div className="d-none d-xl-block">
          <span className="fw-bold  text-darkblue">En </span>
          <span className="fw-bold text-darkblue"> |</span>
          <span className="fw-bold ps-1 text-darkblue">Fr </span>
          <span>
            {' '}
            <Flag />{' '}
          </span>
        </div>
      </div>
    </div>

    // </section>
  );
};

export default Nav;
