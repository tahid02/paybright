import Footer from 'components/common/footer/footer';
import Nav from 'components/common/nav/nav';
import BusinessResult from 'components/for-marchents/business-result';
import Enroll from 'components/for-marchents/enroll-now';
import GoodHand from 'components/for-marchents/good-hand';
import InfiniteSlide from 'components/for-marchents/infinite-slide';
import MerchantHeader from 'components/for-marchents/merchant-header';
import Partners from 'components/for-marchents/partners';
import React from 'react';

const ForMerchantsPage = () => {
  return (
    <div>
      <Nav />
      <MerchantHeader />
      <InfiniteSlide />
      <BusinessResult />
      <GoodHand />
      <Partners />
      <Enroll />
      <Footer />
    </div>
  );
};

export default ForMerchantsPage;
