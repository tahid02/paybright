import Heading from 'components/common/heading/heading';
import styles from './pay-later.module.css';
import PayLaterCard from './pay-later-card/paylater-card';

const PayLater = () => {
  return (
    <section className="">
      <Heading>
        {' '}
        <div className={`${styles.margin}  `}>
          {' '}
          How do I pay later with PayBright?
        </div>
      </Heading>{' '}
      <div className="bg-white" style={{ height: '1rem' }}></div>
      <PayLaterCard
        img="https://www.datocms-assets.com/19671/1585329241-step1.png?auto=format&dpr=0.35&w=2341"
        stepOrder="order-2 order-lg-1"
        imgOrder="order-1 order-lg-2"
        stepNo="1"
        stepTitle="Select PayBright at checkout"
        stepDetail="Shop at your favourite stores that offer PayBright and select us as your payment option at checkout."
      />
      <PayLaterCard
        img="https://www.datocms-assets.com/19671/1586375539-step2-v2.png?auto=format&dpr=0.46&w=1752"
        imgOrder="order-1"
        stepOrder="order-2"
        stepNo="2"
        stepTitle="Get set up "
        stepDetail="Use your mobile phone number to set up your PayBright plan within 60 seconds. "
      />
      <PayLaterCard
        img="https://www.datocms-assets.com/19671/1585329250-step3.png?auto=format&dpr=0.35&w=2321"
        stepOrder="order-2 order-lg-1"
        imgOrder="order-1 order-lg-2"
        stepNo="3"
        stepTitle="Enjoy your purchase!"
        stepDetail="Confirm your payment plan and then you’re done! Enjoy your purchase today and pay later. "
      />
    </section>
  );
};

export default PayLater;
