import MyButton from 'components/common/button/my-button';
import styles from './hero.module.css';
import { AiOutlineRight } from 'react-icons/ai';

const CareerHero = () => {
  return (
    <section
      className={`${styles.hero} position-relative `}
      style={{ backgroundColor: '#f2f2fa' }}
    >
      <section className={`${styles.heroBg}  `}>
        <section className={`${styles.cardContent}  `}>
          <div className="container-fluid bg-transparent">
            <div className=" container-fluid d-flex justify-content-center align-items-bottom">
              <div className={`${styles.card}  `}>
                <h1 className={styles.h1}>
                  Join PayBright, now an Affirm company
                </h1>
                <div className="text-center">
                  <MyButton>
                    See open positions <AiOutlineRight />
                  </MyButton>
                </div>
              </div>
            </div>
          </div>
        </section>{' '}
      </section>
    </section>
  );
};

export default CareerHero;
