import Blog from 'components/press/blog/blog';
import PressHeader from 'components/press/press-header/press-header';
import PressKit from 'components/press/press-kit/press-kit';
import NavFooterLayout from 'layout/nav-footer-layout';
import React from 'react';

const PressPage = () => {
  return (
    <NavFooterLayout>
      <PressHeader />
      <div style={{ height: '3rem' }}></div>
      <Blog />
      <div style={{ height: '6.75rem' }}></div>
      <PressKit />
    </NavFooterLayout>
  );
};

export default PressPage;
