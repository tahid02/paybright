import GoodHandCard from './good-card';
import styles from './good-hand.module.css';
const GoodHand = () => {
  return (
    <section className={`${styles.handContainer}  `}>
      <div style={{ height: '6.75rem' }}></div>
      <h2 className={`${styles.heading} text-center `}>
        <p className="">You re in good hands when you work with us</p>
      </h2>
      <div className="bg-white row g-3">
        <GoodHandCard />
        <GoodHandCard />
        <GoodHandCard />
        <GoodHandCard />
        <GoodHandCard />
        <GoodHandCard />
      </div>
    </section>
  );
};

export default GoodHand;
