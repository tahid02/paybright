import CareerHero from 'components/careers/career-hero';
import CareerImgSlide from 'components/careers/career-slide';
import EmployeeSays from 'components/careers/employe-quote';
import EqualEmployment from 'components/careers/equal-employment';
import OpenPosition from 'components/careers/open-position';
import OurValues from 'components/careers/values';
import WhyUs from 'components/careers/why-us';
import Footer from 'components/common/footer/footer';
import React from 'react';

const CareersPage = () => {
  return (
    <div>
      <CareerHero />
      <OurValues />
      <div style={{ height: '6.75rem' }}></div>
      <EmployeeSays />
      <div style={{ height: '6.75rem' }}></div>
      <WhyUs />

      <CareerImgSlide />
      <div style={{ height: '6.75rem' }}></div>
      <EqualEmployment />
      <OpenPosition />
      <Footer />
    </div>
  );
};

export default CareersPage;
