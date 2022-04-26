/* eslint-disable no-lone-blocks */
import MyButton from 'components/common/button/my-button';
import styles from './enroll.module.css';

// eslint-disable-next-line react/prop-types
const Enroll = ({ h2, button }) => {
  return (
    <section className="py-5">
      <div className="bg-white " style={{ height: '3rem' }}></div>
      <div className={`${styles.contentMargin}  `}>
        <div
          className="bg-lightblue position-relative overflow-hidden"
          style={{
            height: '40vh',
            borderRadius: `${window.innerWidth < 992 ? '0' : '.5rem'} `,
          }}
        >
          <img
            src="https://paybright.com/static/left-cropped-2bffa39bd0d098b235726044ff3e2eb9.png"
            alt=""
            className="img-fluid h-100"
            style={{ position: 'absolute', top: '0', left: '0' }}
          />
          <img
            src="https://paybright.com/static/right-cropped-52c9e70655292002dfa2fabe4ea04a23.png"
            alt=""
            className="img-fluid h-100"
            style={{ position: 'absolute', top: '0', right: '0' }}
          />

          <div
            className={`${styles.h2W}  `}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
            }}
          >
            <h2 className="text-center text-white">
              {h2 || 'Get started with PayBright today'}
            </h2>
            <p className="text-center" style={{ marginTop: '1.5rem' }}>
              <MyButton
                style={{ padding: '1rem 2rem' }}
                bgColor="white"
                textColor="black"
              >
                {button || 'Enroll now'}
              </MyButton>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enroll;
{
  /*
   */
}
