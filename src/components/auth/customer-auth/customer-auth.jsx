import MyButton from 'components/common/button/my-button';
import GoogleIcon from '../svg/google-icon';
import LoginLogo from '../svg/login-logo';
import styles from './customer-auth.module.css';
import { LeftImgContainer, RightImgContainer } from './img-container';
// firebase import
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from '../firebase.config';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  getAdditionalUserInfo,
} from 'firebase/auth';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const CustomerAuth = () => {
  const provider = new GoogleAuthProvider();

  function handleGoogleSignUp() {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        return result;
      })
      .then((result) => updateUserInfo(result))
      .catch((error) => {
        const { email, errorCode, errorMessage } = error;
        console.log({ errorCode, errorMessage, email });
      });

    const updateUserInfo = (result) => {
      const newUser = getAdditionalUserInfo(result).isNewUser;
      if (newUser) {
        updateProfile(auth.currentUser, {
          displayName: result.user.displayName + ',' + 'customer',
        })
          .then(() => {
            console.log({ result });
          })
          .catch((error) => {
            console.log('update err', error);
          });
      }
    };
  }

  return (
    <section className={`${styles.rowH} h-100 w-100 position-relative`}>
      <div className="row mx-0 h-100 w-100 position-relative">
        <div className="col-12 col-lg-6 px-0 h-100 position-relative ">
          <LeftImgContainer />
          {/* <div className="d-flex flex-column justify-content-center align-items-center h-100 "> */}
          <div className={`${styles.loginW} position-absolute mx-auto `}>
            <div className="">
              <h1 className={`${styles.head}  `}>Buy now Pay later </h1>
            </div>
            <div className="d-flex justify-content-center ">
              <LoginLogo />
            </div>{' '}
            <div className="mt-5">
              <div className="bag w-100 d-block d-sm-none">
                <div className="bagImg w-25 ms-auto">
                  <img
                    src="https://portal.paybright.com/static/media/bag.dd36d945.png"
                    alt=""
                    className="w-100"
                  />
                </div>
              </div>
              <p className="p fw-bold text-center text-darkblue">
                Let’s get started
              </p>
            </div>
            <div
              className={`${styles.btnW}   mx-auto mt-4`}
              onClick={handleGoogleSignUp}
            >
              <MyButton style={{ padding: '1rem ', width: '100%' }}>
                {/* <div style={{height}}></div> */}
                <GoogleIcon />{' '}
                <span className="ms-2"> Sign in with Google</span>
              </MyButton>
            </div>
          </div>
        </div>

        {/* img section */}
        <div className="col-12 col-lg-6 pe-0 d-none d-lg-block">
          <RightImgContainer />
        </div>
      </div>
    </section>
  );
};

export default CustomerAuth;
