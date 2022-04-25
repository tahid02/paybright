import ContainerMarginL from 'components/common/container-large-margin/containerL-margin';
import Check from './check';
import styles from './why-us.module.css';

const WhyUs = () => {
  return (
    <section className={`${styles.cont}  `}>
      <div className="">
        <div className={`${styles.margin}  `}>
          <div className="container-fluid">
            {/* <ContainerMarginL> */}
            <div className={`${styles.card}  `}>
              <div className={`${styles.cardPadding}  `}>
                <h2 className={`${styles.h2}  `}>Why work with us</h2>
                <p className={`${styles.p}  `}>
                  Work-life balance is key: We encourage our employees to lead
                  the life they want outside of work, be it travelling, spending
                  time with loved ones, or giving back to their communities. We
                  have created an environment that makes all of that possible.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </ContainerMarginL> */}
      </div>
      <div className="">
        {/* <ContainerMarginL> */}
        <div className={`${styles.margin} container-fluid `}>
          <div className="d-flex mx-auto"></div>
          <div className="row mx-0 w-100">
            <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6 px-0">
              <div className="d-flex justify-content-center">
                <div className={`${styles.workPadding}  `}>
                  <div className={`${styles.imgCont} `}>
                    <img
                      src="https://www.datocms-assets.com/19671/1592230790-careers-healthicon.png?auto=format"
                      alt="PayBright Canada careers, jobs, hiring, fintech, finance, Toronto, company values, equal opportunity employment, health, wellness, office and culture, hand and medical icon"
                      className="img-fluid"
                    />
                  </div>{' '}
                  <h3
                    style={{
                      padding: '1.5rem 0px',
                      margin: '0px',
                      fontSize: '1.5rem',
                      fontFamily: 'IBM Plex Sans Hebrew',
                      fontWeight: '500',
                      lineHeight: '1.2',
                      maxWidth: '100%',
                      color: 'var(--darkblue)',
                    }}
                  >
                    Health & wellness
                  </h3>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div className="d-flex" style={{ width: 'fit-content' }}>
                      <div className={`${styles.check}  `} style={{}}>
                        <Check />
                      </div>
                      <p className={`${styles.p}  `}>
                        Generous health and wellness benefits
                      </p>
                    </div>
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div className="d-flex" style={{ width: 'fit-content' }}>
                      <div className={`${styles.check}  `} style={{}}>
                        <Check />
                      </div>
                      <p className={`${styles.p}  `}>
                        Parental leave top up and diaper bonus program
                      </p>
                    </div>
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div className="d-flex" style={{ width: 'fit-content' }}>
                      <div className={`${styles.check}  `} style={{}}>
                        <Check />
                      </div>
                      <p className={`${styles.p}  `}>Supportive environment</p>
                    </div>
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div className="d-flex" style={{ width: 'fitContent' }}>
                      <div className={`${styles.check}  `} style={{}}>
                        <Check />
                      </div>
                      <p className={`${styles.p}  `}>
                        Plenty of time off so you can always be at your best
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6 px-0">
              <div className="d-flex justify-content-center">
                <div className={`${styles.workPadding}  `}>
                  <div className={`${styles.imgCont} `}>
                    <img
                      src="https://www.datocms-assets.com/19671/1592230785-careers-officeicon.png?auto=format"
                      alt="PayBright Canada careers, jobs, hiring, fintech, finance, Toronto, company values, equal opportunity employment, health, wellness, office and culture, hand and medical icon"
                      className="img-fluid"
                    />
                  </div>{' '}
                  <h3
                    style={{
                      padding: '1.5rem 0px',
                      margin: '0px',
                      fontSize: '1.5rem',
                      fontFamily: 'IBM Plex Sans Hebrew',
                      fontWeight: '500',
                      lineHeight: '1.2',
                      maxWidth: '100%',
                      color: 'var(--darkblue)',
                    }}
                  >
                    Office & culture
                  </h3>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div className="d-flex" style={{ width: 'fit-content' }}>
                      <div className={`${styles.check}  `} style={{}}>
                        <Check />
                      </div>
                      <p className={`${styles.p}  `}>
                        Team social activities (Virtual, for now)
                      </p>
                    </div>
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div className="d-flex" style={{ width: 'fit-content' }}>
                      <div className={`${styles.check}  `} style={{}}>
                        <Check />
                      </div>
                      <p className={`${styles.p}  `}>
                        Professional development opportunities for employee
                      </p>
                    </div>
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div className="d-flex" style={{ width: 'fit-content' }}>
                      <div className={`${styles.check}  `} style={{}}>
                        <Check />
                      </div>
                      <p className={`${styles.p}  `}>
                        Easy access to public transportation
                      </p>
                    </div>
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div className="d-flex" style={{ width: 'fitContent' }}>
                      <div className={`${styles.check}  `} style={{}}>
                        <Check />
                      </div>
                      <p className={`${styles.p}  `}>Equity participation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </ContainerMarginL> */}
      </div>
    </section>
  );
};

export default WhyUs;
