import styles from './equal.module.css';

const EqualEmployment = () => {
  return (
    <div>
      {/* className={` container px-5 mx-5`}  */}
      <div style={{}}>
        {/* <div className="w-75 mx-auto    "> */}
        <div className="row justify-content-center text-center">
          <div className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <div
              className="container-fluid d-flex align-items-start"
              style={{ padding: '0 1rem' }}
            >
              <img
                src="https://www.datocms-assets.com/19671/1586294910-plant-left.png?auto=format&dpr=1&w=527"
                alt=""
                className="w-100"
              />
            </div>
          </div>
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
          <div className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-none d-lg-flex d-md-flex d-xl-flex d-xxl-flex align-items-end">
            <div className="" style={{ padding: '0 1rem' }}>
              <img
                src="https://www.datocms-assets.com/19671/1586294916-plant-right.png?auto=format&dpr=1&w=571"
                alt=""
                className="w-100"
              />
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>{' '}
    </div>
  );
};

export default EqualEmployment;
