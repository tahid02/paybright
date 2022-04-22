import ContainerMarginL from 'components/common/container-large-margin/containerL-margin';
import styles from './mission.module.css';

const Mission = () => {
  return (
    <section className={`${styles.paddingY}  `}>
      <ContainerMarginL>
        <div className={`${styles.w75}  `}>
          <div className="row">
            <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 order-2 order-lg-1 d-flex justify-content center align-items-center">
              <div>
                <div className={`${styles.textW}  `}>
                  <h2 className="h2Font">Our mission is simple</h2>
                  <p className="text-darkblue">
                    Founded in 2009, PayBrights mission has always been to make
                    the everyday commerce experience simply better for
                    Canadians.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 order-1 order-lg-1 ">
              <div className={`${styles.imgW} mx-auto`}>
                <img
                  src="https://www.datocms-assets.com/19671/1586797126-shopnowpaylater.png?auto=format&dpr=0.92&w=877"
                  alt=""
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </ContainerMarginL>
    </section>
  );
};

export default Mission;
