import MyButton from 'components/common/button/my-button';
import { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Flag from '../flag';
import MenuIcon from './menu-icon';
import styles from './off-canvas.module.css';
function RightOffCanvas() {
  const [show, setShow] = useState(false);
  // eslint-disable-next-line no-unused-vars

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="border-0 bg-transparent" onClick={handleShow}>
        <MenuIcon />
      </button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        scroll={true}
        className=""
        // style={{ backgroundColor: '#374151' }}
      >
        <div className="" style={{ padding: '.5rem' }}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <div className="">
                <span
                  className="p  text-darkblue"
                  style={{ fontWeight: '700' }}
                >
                  En{' '}
                </span>
                <span className=" text-darkblue"> |</span>
                <span
                  className="p  px-1 text-darkblue"
                  style={{ fontWeight: '700' }}
                >
                  Fr{' '}
                </span>
                <span className="pb-1">
                  {' '}
                  <Flag />{' '}
                </span>
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>
        </div>
        <Offcanvas.Body>
          <Link to="/" className={`${styles.linkStyle}  `}>
            <div className={`${styles.LinkPadding}  `}>Shop</div>
          </Link>

          <Link to="/how-it-works" className={`${styles.linkStyle}  `}>
            <div className={`${styles.LinkPadding}  `}>How work</div>{' '}
          </Link>

          <Link to="/company" className={`${styles.linkStyle}  `}>
            {' '}
            <div className={`${styles.LinkPadding}  `}>company</div>{' '}
          </Link>

          <Link to="/for-merchants" className={`${styles.linkStyle}  `}>
            {' '}
            <div className={`${styles.LinkPadding}  `}>For merchants</div>{' '}
          </Link>

          <hr
            style={{
              backgroundColor: 'gray',
              height: '1px',
              margin: '.2rem .5rem',
            }}
          />

          <Link to="/careers" className={`${styles.linkStyle}  `}>
            {' '}
            <div className={`${styles.LinkPadding}  `}>Careers</div>
          </Link>

          <Link to="/press" className={`${styles.linkStyle}  `}>
            <div className={`${styles.LinkPadding}  `}>Press</div>
          </Link>

          <div className="d-block d-md-none">
            <hr
              style={{
                backgroundColor: 'gray',
                height: '1px',
                margin: '1rem .5rem 2rem .5rem',
              }}
            />{' '}
            <div className=" w-100 ">
              <Link to="customer-login">
                <MyButton style={{ width: '90%', padding: '1rem 2rem' }}>
                  login
                </MyButton>{' '}
              </Link>
            </div>
            <div className={`py-3 text-center`}>
              <Link
                to="/help"
                className={`${styles.linkStyle} text-decoration-underline`}
              >
                Help
              </Link>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default RightOffCanvas;
