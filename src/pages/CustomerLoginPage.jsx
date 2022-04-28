import CustomerAuth from 'components/auth/customer-auth/customer-auth';
import FooterCopyRight from 'components/common/footer/footer-right/footer-copyright';
import Nav from 'components/common/nav/nav';

const CustomerLoginPage = () => {
  return (
    <>
      <Nav showMenu={false} />{' '}
      <div style={{ height: '80vh' }}>
        <CustomerAuth />
      </div>
      <div className="d-block d-sm-none">
        <p className="text-center text-lightblue">terms & condition</p>
      </div>
      <div className="d-none d-sm-block">
        <FooterCopyRight mt="mt-0" />
      </div>
    </>
  );
};

export default CustomerLoginPage;
