import MyButton from 'components/common/button/my-button';
import ContainerCenter from 'components/common/container-large/container-l';
import styles from './merchant.module.css';
const MerchantHeader = () => {
  return (
    <section className={`${styles.head} py-5 `}>
      <section className="py-5">
        <ContainerCenter>
          <h1 className="text-darkblue text-center">
            Grow your business with PayBright
          </h1>{' '}
          <p className={`${styles.pera}  text-darkblue py-5 text-center `}>
            Join 8,500+ Canadian merchants who trust PayBright to grow their
            business in-store and online.
          </p>
        </ContainerCenter>

        <div className="text-sm-center text-xs-center  row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center text-md-end text-sm-end pt-2">
            {' '}
            <MyButton>Enroll Now </MyButton>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center text-md-start text-sm-start pt-2">
            {' '}
            <span className="ms-2">
              <MyButton>Get In touch</MyButton>
            </span>
          </div>
        </div>
      </section>
      <section className={`${styles.merchantHeader}  `}></section>
    </section>
  );
};

export default MerchantHeader;
