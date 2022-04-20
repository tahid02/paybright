import styles from './footer-copyright.module.css';
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
} from 'react-icons/ai';
const FooterCopyRight = () => {
  return (
    <section className={`${styles.cont}   mt-4  `}>
      <div className={`${styles.padding}`}>
        <div className="row container-fluid">
          <div className=" text-white col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-5 col-xxl-5 order-2 order-xl-1 ">
            <p className={`${styles.footerP}`}>
              {' '}
              ©2022 PayBright. All rights reserved.
            </p>
          </div>
          <div className="text-white col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-7 col-xxl-7 order-1 order-xl-2">
            <div className="row">
              <div className="col-12 col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7 order-2 order-md-1">
                <div className="d-flex flex-column flex-md-row ">
                  <p className={`${styles.footerP}  pe-4`}>
                    Terms & conditions
                  </p>
                  <p className={`${styles.footerP}  pe-4`}>Privacy</p>
                  <p className={`${styles.footerP}  `}>Merchant agreemen</p>
                </div>
              </div>
              <div className="col-12 col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 order-1 order-md-2">
                <div
                  className="d-flex flex-row flex-nowrap"
                  // style={
                  //   window.innerWidth < 570 && {
                  //     paddingBottom: 1 + 'rem',
                  //   }
                  // }
                >
                  <div className="">
                    {' '}
                    <AiFillFacebook
                      className=""
                      style={{ color: '#00c1a1', fontSize: '1.5rem' }}
                    />{' '}
                  </div>{' '}
                  <div className="ms-2">
                    {' '}
                    <AiFillLinkedin
                      className=""
                      style={{ color: '#00c1a1', fontSize: '1.5rem' }}
                    />{' '}
                  </div>
                  <div className="ms-2">
                    {' '}
                    <AiFillInstagram
                      className=""
                      style={{ color: '#00c1a1', fontSize: '1.5rem' }}
                    />{' '}
                  </div>
                </div>

                <div className=""></div>
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCopyRight;
