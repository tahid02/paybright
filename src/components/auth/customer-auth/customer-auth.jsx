import MyButton from 'components/common/button/my-button';
import GoogleIcon from '../svg/google-icon';
import LoginLogo from '../svg/login-logo';
import styles from './customer-auth.module.css';

const CustomerAuth = () => {
  return (
    <section className={`${styles.rowH} h-100 w-100 position-relative`}>
      <div className="row mx-0 h-100 w-100 position-relative">
        <div className="col-12 col-lg-6 px-0 h-100 position-relative ">
          <div className="d-none d-sm-block d-lg-none">
            <div className="position-absolute end-0" style={{ top: '10%' }}>
              <div className="w-75 ms-auto">
                <img
                  src="https://portal.paybright.com/static/media/plant.4a390000.png"
                  alt=""
                  className="w-100 "
                />
              </div>
            </div>
          </div>
          <div className="d-block d-sm-none">
            <div className="d-flex ">
              <div className="cycle w-50">
                <img
                  src="https://portal.paybright.com/static/media/sporting-goods.9a8fe835.png"
                  alt=""
                  className="w-100"
                />
              </div>
              <div className="camera w-50">
                <div className="w-25 ms-auto">
                  <img
                    src="https://portal.paybright.com/static/media/electronics.22ab6569.png"
                    alt=""
                    className="w-100 "
                  />
                </div>
              </div>
            </div>
          </div>

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
            <div className={`${styles.btnW}   mx-auto mt-4`}>
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
          <div className="position-relative">
            <img
              src="https://portal.paybright.com/static/media/login-light-blobs.f2d0252a.png"
              alt=""
              style={{ height: '80vh' }}
              className=" w-100"
            />
            <div
              className="position-absolute w-100"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
              }}
            >
              <div className="w-75 mx-auto">
                <img
                  src="https://portal.paybright.com/static/media/login-shape.c056e360.png"
                  alt=""
                  className=" w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerAuth;
