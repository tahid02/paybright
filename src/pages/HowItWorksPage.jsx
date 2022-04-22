import Business from 'components/how-it-works/business/business';
import FeaturedMerchants from 'components/how-it-works/featured/featured-merchants';
import PayLater from 'components/how-it-works/pay-later';
import Payment from 'components/how-it-works/payment/payment';
import PaymentHeader from 'components/how-it-works/paymentHeader';
import Trusted from 'components/how-it-works/trusted';
import NavFooterLayout from 'layout/nav-footer-layout';
import React from 'react';

const HowItWorksPage = () => {
  return (
    <>
      <NavFooterLayout>
        <PaymentHeader />
        <Payment />
        <div className="bg-white" style={{ height: '2rem' }}></div>
        <PayLater />
        <Trusted />
        <div className="bg-white" style={{ height: '6.75rem' }}></div>
        <FeaturedMerchants />
        <div className="bg-white" style={{ height: '6.75rem' }}></div>
        <Business />
        <div className="bg-white" style={{ height: '4.5rem' }}></div>
      </NavFooterLayout>
    </>
  );
};

export default HowItWorksPage;
