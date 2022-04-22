import Payment from 'components/how-it-works/payment/payment';
import styles from './pay-merchant.module.css';
import MerchantPayHeader from './header/pay-merchant-header';

const PayMerchant = () => {
  return (
    <section>
      <div style={{ height: '4.5rem', backgroundColor: '#f8f5f1' }}></div>
      <MerchantPayHeader />
      <Payment bgColor={styles.paymentMerchantBg} />
    </section>
  );
};

export default PayMerchant;
