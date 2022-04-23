import MyButton from 'components/common/button/my-button';
import ContainerCenter from 'components/common/container-large/container-l';
import styles from './press-kit.module.css';

const PressKit = () => {
  return (
    <section className={`${styles.contPadding}  `}>
      <section style={{ backgroundColor: '#f2f2fa' }}>
        <ContainerCenter>
          <div className="text-center text-darkblue">
            <h2 className="h2Font" style={{ margin: '0 0 2rem' }}>
              Press Kit{' '}
            </h2>
            <p className={`${styles.pera} text-darkblue `}>
              For press enquiries, please email us at{' '}
              <span className="text-lightblue fw-bold">
                {' '}
                press@paybright.com.
              </span>
            </p>
          </div>
        </ContainerCenter>
        <p className={`${styles.pera} text-darkblue `}>
          If you have questions related to a purchase, please visit our{' '}
          <span className="text-lightblue fw-bold  "> Help center</span>
        </p>
        <div className="text-center">
          <MyButton>Download press kit</MyButton>
        </div>
      </section>
    </section>
  );
};

export default PressKit;
