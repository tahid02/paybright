import MyButton from 'components/common/button/my-button';
import ContainerCenter from 'components/common/container-large/container-l';
import Logo from 'components/common/nav/logo';
import GoogleIcon from '../svg/google-icon';
import { useHandleGoogleSignUp } from '../useHandleGoogleSignUp';
import styles from './merchant-auth.module.css';

const MerchantAuth = () => {
  const { userInfo, handleGoogleSignUp } = useHandleGoogleSignUp('merchant');
  console.log({ userInfo });
  return (
    <section
      style={{ margin: ' 0 1rem ', height: '100vh' }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="h-auto">
        <div className="d-flex justify-content-center align-items-center">
          <div style={{ maxWidth: '375px', margin: ' 0 auto' }}>
            <img
              src="https://assets.paybright.com/images/AffirmPBLogo-EN.svg"
              alt=""
              className="w-100"
            />
          </div>
        </div>
        <div
          style={{ maxWidth: '250px', margin: ' 1rem auto' }}
          onClick={handleGoogleSignUp}
        >
          <MyButton style={{ padding: '1rem ', width: '100%' }}>
            <GoogleIcon /> <span className="ms-2"> Sign in with Google</span>
          </MyButton>
        </div>
      </div>
    </section>
  );
};

export default MerchantAuth;
