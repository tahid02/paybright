import styles from './footer-copyright.module.css';
import LinkedinIcon from 'components/common/svg/linkedin-icon';
import InstagramIcon from 'components/common/svg/instagram-icon';
import FacebookIcon from 'components/common/svg/facebook-icon';
// eslint-disable-next-line react/prop-types
const FooterCopyRight = ({ mt }) => {
  return (
    <section className={`${styles.cont}  ${mt || 'mt-4'} `}>
      <div className={`${styles.padding}`}>
        <div className="row container-fluid">
          <div className=" text-white col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-5 col-xxl-5 order-2 order-xl-1 ">
            <p className={`${styles.footerP}`}>
              {' '}
              ©2022 iLern | All rights reserved.
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
                    <FacebookIcon />
                  </div>{' '}
                  <div className="ms-2">
                    <LinkedinIcon />
                  </div>
                  <div className="ms-2">
                    <InstagramIcon />
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
