import Hero from 'components/home/hero/hero';
import Shops from 'components/home/shops';
import NavFooterLayout from 'layout/nav-footer-layout';
const HomePage = () => {
  return (
    <>
      <NavFooterLayout>
        <Hero />
        <Shops />
      </NavFooterLayout>
    </>
  );
};

export default HomePage;
