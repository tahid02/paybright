/* eslint-disable react/prop-types */
import styles from './paylatercard.module.css';

// eslint-disable-next-line react/prop-types
const PayLaterCard = ({
  img,
  imgOrder,
  stepOrder,
  stepNo,
  stepTitle,
  stepDetail,
}) => {
  return (
    <section>
      <div className={`${styles.contentMargin}  `}>
        <div className="container-fluid">
          <div className="row ">
            <div
              className={`col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-61 ${imgOrder}`}
            >
              <div className={`${styles.imgPadding}  `}>
                <div className={`${styles.pBottom}  `}>
                  <img src={img} alt="" className=" img-fluid " />
                </div>
              </div>
            </div>
            <div
              className={`col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-61 ${stepOrder}`}
            >
              <div
                className={`${styles.textPadding}  d-flex justify-content-center align-items-center`}
              >
                <div className={`${styles.stepText}  `}>
                  <h3 className={`text-darkblue w-100 mb-3`}>
                    {' '}
                    Step {stepNo}{' '}
                  </h3>
                  <h2 className="h2Font w-100">{stepTitle} </h2>
                  <p className="p text-darkblue">{stepDetail}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{' '}
    </section>
  );
};

export default PayLaterCard;
