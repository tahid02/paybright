import { services } from './data-good-hand';
import GoodHandCard from './good-hand-card/good-card';
import styles from './good-hand.module.css';
const GoodHand = () => {
  return (
    <section className={`${styles.contentMargin}  `}>
      <div className="container-fluid">
        <div className="w-100">
          <div className={`${styles.w50}  mx-auto`}>
            {' '}
            <h2 className="h2Font text-darkblue text-center">
              You are in good hands when you work with us
            </h2>
          </div>
        </div>

        <div className="bg-white row g-0">
          {services.map((service) => (
            <GoodHandCard {...service} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoodHand;
