import MyButton from 'components/common/button/my-button';
import ContainerCenter from 'components/common/container-large/container-l';
import styles from './merchant.module.css';
const MerchantHeader = () => {
  return (
    <section
      className={`${styles.head} py-5 `}
      style={{ backgroundColor: '#f5f1eb' }}
    >
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

        <ContainerCenter>
          <div className="d-flex flex-column flex-sm-row justify-content-center">
            <div className=" pt-2 my-auto ">
              <MyButton>Enroll Now </MyButton>
            </div>
            <div style={{ width: '1rem' }}></div>
            <div className="  pt-2 my-auto ">
              <MyButton others="me-auto">Enroll Now </MyButton>
            </div>
          </div>
        </ContainerCenter>
      </section>
      <section className={`${styles.merchantHeader}  `}></section>
    </section>
  );
};

export default MerchantHeader;
