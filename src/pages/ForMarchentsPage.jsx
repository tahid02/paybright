import BusinessResult from 'components/for-marchents/business-result';
import Enroll from 'components/for-marchents/enroll-now';
import GoodHand from 'components/for-marchents/good-hand';
import InfiniteSlide from 'components/for-marchents/infinite-slide';
import MerchantHeader from 'components/for-marchents/merchant-header';
import Partners from 'components/for-marchents/partners';
import PayMerchant from 'components/for-marchents/pay-merchants/pay-merchant';
import NavFooterLayout from 'layout/nav-footer-layout';

const ForMerchantsPage = () => {
  return (
    <NavFooterLayout>
      <MerchantHeader />
      <InfiniteSlide />
      <BusinessResult />
      <div style={{ height: '6.75rem' }}></div>
      <GoodHand />
      <PayMerchant />
      <div style={{ height: '4.5rem' }}></div>
      <Partners />
      <Enroll />
    </NavFooterLayout>
  );
};

export default ForMerchantsPage;
