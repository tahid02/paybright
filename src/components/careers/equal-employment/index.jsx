import styles from './equal.module.css';

const EqualEmployment = () => {
  return (
    <section className={`${styles.contentMargin}  `}>
      <div className="container-fluid">
        <div className="row justify-content-center text-center">
          {/*  */}
          <div className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <div className=" d-flex justify-content-center align-items-start">
              <img
                src="https://www.datocms-assets.com/19671/1586294910-plant-left.png?auto=format&dpr=1&w=527"
                alt=""
                // className="w-100"
                // style={{ width: '100%' }}
                className={`${styles.imgW}  `}
              />
            </div>
          </div>
          {/*  */}
          <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div
              className={`${styles.equalPadding}  text-center text-darkblue`}
            >
              <h3>Equal Employment Opportunity</h3>
              <p className={`${styles.p}  `}>
                Our diverse and inclusive team is part of what makes Paybright a
                fulfilling place to be. PayBright is an equal opportunity
                employer and welcomes applications from all backgrounds.
              </p>
              <p className={`${styles.p}  `}>
                If you require any accommodations during the hiring process,
                please let us know and we will work with you to meet your needs.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-none d-lg-flex d-md-flex d-xl-flex d-xxl-flex align-items-end">
            <div className=" d-flex justify-content-center align-items-start">
              <img
                src="https://www.datocms-assets.com/19671/1586294916-plant-right.png?auto=format&dpr=1&w=571"
                alt=""
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EqualEmployment;
