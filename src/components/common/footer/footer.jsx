import styles from './footer.module.css';
import Logo from '../nav/logo';
import MyButton from '../button/my-button';
import FooterAccordion from './accordion';
import FooterCopyRight from './footer-right/footer-copyright';

const Footer = () => {
  return (
    <footer>
      <section className={`${styles.contentMargin}  `}>
        <div className={`${styles.mb}  `}></div>
        <section className="container-fluid row mx-0">
          <div className="col-xs-12 col-sm-12 col-md-12 col-xl-6 col-xxl-6 px-0 pt-3">
            <div className="container-fluid ps-0">
              <div style={{ marginBottom: '3rem' }}>
                {' '}
                <Logo />
              </div>

              <h3 className={`${styles.join}  `}>Join our email list</h3>
              <p className={`${styles.promotion} text-darkblue `}>
                Get promotional offers from our merchants delivered right to
                your inbox.
              </p>
              <div className="">
                <div
                  className=" w-100 d-flex flex-row align-items-center"
                  style={{}}
                >
                  <div
                    className="w-50 "
                    style={{ marginLeft: '0px !important' }}
                  >
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control shadow-none"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput">
                        {' '}
                        <span className={`${styles.footerP} text-lightblue `}>
                          {' '}
                          Email address
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="ms-auto" style={{ width: '40%' }}>
                    <MyButton>
                      Sign {window.innerWidth > 480 && 'me'} up
                    </MyButton>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-xl-6 col-xxl-6 px-0 pt-3">
            <div className="d-none d-sm-block">
              <div className="row text-start container-fluid ps-0">
                <div className="col-4">
                  <h3 className="text-darkblue h4 mb-4">Company</h3>
                  <p className={`${styles.footerP} text-lightblue `}>About</p>
                  <p className={`${styles.footerP} text-lightblue `}>
                    Partnerships
                  </p>
                  <p className={`${styles.footerP} text-lightblue `}>Press</p>
                  <p className={`${styles.footerP} text-lightblue `}>Careers</p>
                  <p className={`${styles.footerP} text-lightblue `}>Blog</p>
                </div>

                <div className="col-4">
                  <h3 className="text-darkblue h4 mb-4">Customers</h3>
                  <p className={`${styles.footerP} text-lightblue `}>Login</p>
                  <p className={`${styles.footerP} text-lightblue `}>
                    How it works
                  </p>
                  <p className={`${styles.footerP} text-lightblue `}>
                    Help center
                  </p>
                  <p className={`${styles.footerP} text-lightblue `}>Contact</p>
                </div>
                <div className="col-4">
                  <h3 className="text-darkblue h4 mb-4">Merchants</h3>
                  <p className={`${styles.footerP} text-lightblue `}>
                    Enroll now
                  </p>
                  <p className={`${styles.footerP} text-lightblue `}>
                    Get in touch
                  </p>
                  <p className={`${styles.footerP} text-lightblue `}>
                    Resources
                  </p>
                  <p className={`${styles.footerP} text-lightblue `}>
                    Merchants FAQ
                  </p>
                </div>
              </div>
            </div>
            <div className="d-block d-sm-none">
              <FooterAccordion />
            </div>
          </div>
        </section>
      </section>
      <FooterCopyRight />
    </footer>
  );
};

export default Footer;
