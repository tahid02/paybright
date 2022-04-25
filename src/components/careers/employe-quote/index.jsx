import { Carousel } from 'react-bootstrap';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import styles from './employe.module.css';
const EmployeeSays = () => {
  return (
    <section className={`${styles.contentMargin} position-relative `}>
      {' '}
      <Carousel
        className="text-dark "
        nextIcon={
          <AiOutlineRight
            style={{
              backgroundColor: 'var(--darkblue)',
              fontSize: '3rem',
              borderRadius: '50%',
              padding: '.5rem',
            }}
          />
        }
        prevIcon={
          <AiOutlineLeft
            style={{
              backgroundColor: 'var(--darkblue)',
              fontSize: '3rem',
              borderRadius: '50%',
              padding: '.5rem',
            }}
          />
        }
      >
        {/*  style={{ padding: '0 15%' }} */}
        <Carousel.Item interval={10000} className={`${styles.cardPadding}  `}>
          {/* <section > */}
          <div className="container">
            <div className="row ">
              <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div className={`${styles.imgCont}  `}>
                  <img
                    src="https://www.datocms-assets.com/19671/1587394434-mask-group-1.png?auto=format&dpr=0.84&w=953"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-12 col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                <div
                  className={`${styles.quote} text-center text-lg-start text-xl-start text-xxl-start `}
                >
                  <h4
                    className=""
                    style={{
                      padding: '0px 0px 1.5rem',
                      margin: '0px',
                      fontSize: '1.25rem',
                      fontFamily: 'IBM Plex Sans Hebrew',
                      fontWeight: '500',
                      lineHeight: '1.2',
                      color: 'var(--darkblue)',
                    }}
                  >
                    {' '}
                    “I feel proud of the work we do and how it affects the lives
                    of thousands of Canadians. The work feels meaningful and
                    inspires me to do my best.”
                  </h4>
                  <p className={`${styles.p} text-darkblue `}>
                    Andresa Andrade
                  </p>
                  <p className={`${styles.p} text-lightblue `}>
                    Date Science & Analytics
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* </section> */}
        </Carousel.Item>
        <Carousel.Item interval={1000} className={`${styles.cardPadding}  `}>
          {/* <section > */}
          <div className="container">
            <div className="row ">
              <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div className={`${styles.imgCont}  `}>
                  <img
                    src="https://www.datocms-assets.com/19671/1587394401-mask-group.png?auto=format&dpr=0.84&w=953"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-12 col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                <div
                  className={`${styles.quote} text-center text-lg-start text-xl-start text-xxl-start `}
                >
                  <h4
                    className=""
                    style={{
                      padding: '0px 0px 1.5rem',
                      margin: '0px',
                      fontSize: '1.25rem',
                      fontFamily: 'IBM Plex Sans Hebrew',
                      fontWeight: '500',
                      lineHeight: '1.2',
                      color: 'var(--darkblue)',
                    }}
                  >
                    {' '}
                    “The autonomy I have in my role is the best part about
                    working at PayBright. Your abilities are trusted and your
                    opinions are always appreciated.”
                  </h4>
                  <p className={`${styles.p} text-darkblue `}>
                    Shaishav Keshri
                  </p>
                  <p className={`${styles.p} text-lightblue `}>
                    Business Development Director
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* </section> */}
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default EmployeeSays;
