import styles from './result-card.module.css';

// eslint-disable-next-line react/prop-types
const ResultCard = ({ img }) => {
  return (
    <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
      <div className={`${styles.card}  `}>
        <div className={`${styles.cardPadding}  `}>
          {/* <div className={`${styles.content}  `}> */}
          <div className="row">
            <div
              className={`col-5 col-xs-5 col-sm-5 col-md-12 col-lg-12 col-xl-12 col-xxl-12 `}
            >
              <div className="d-flex align-items-center">
                <div
                  className={`${styles.percentBg} `}
                  style={{
                    backgroundImage: `url(${img})`,
                    margin: 'auto auto',
                  }}
                >
                  <div className={`${styles.percent}  `}>
                    <p className={`${styles.pera}  `}>+20%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-7 col-xs-7 col-sm-7 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex align-items-center">
              {/* <div className="col-7 col-xs-7 col-sm-7 col-md-12 col-lg-12 col-xl-12 col-xxl-12"> */}
              <div className="">
                <h4 className={`${styles.h4}  text-start text-md-center`}>
                  Repeat Customers
                </h4>
                <p className={`${styles.text}  text-start text-md-center`}>
                  Appeal to a wider audience and drive repeat traffic.
                </p>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
