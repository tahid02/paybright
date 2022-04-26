/* eslint-disable react/prop-types */
import MyButton from 'components/common/button/my-button';
import ContainerMarginL from 'components/common/container-large-margin/containerL-margin';
import styles from './join-team.module.css';
import Circle from './svg/circle';
import Cylinder from './svg/cylindar';

// eslint-disable-next-line react/prop-types
const JoinOurTeam = () => {
  return (
    <section style={{ backgroundColor: '#f8f5f1', position: 'relative' }}>
      {/* <div
        className="position-absolute d-none d-lg-block"
        style={{
          top: '0.2rem',
          left: '-4rem',
          transform: 'rotate(-23.75deg)',
        }}
      >
        <Cylinder />
      </div>
      <div
        className="position-absolute  d-none d-lg-block"
        style={{
          bottom: '-2rem',
          left: '2.5rem',
        }}
      >
        <Circle />
      </div>{' '}
      <div
        className="position-absolute  d-none d-lg-block"
        style={{
          top: '50%',
          left: '45%',
          transform: 'rotate(17deg)  ',
        }}
      >
        <Cylinder width="230" />
      </div> */}
      <div className={`${styles.paddingY}`}>
        <ContainerMarginL>
          <div className={`${styles.contW}  mx-auto`}>
            <div className="row ">
              <div className={`col-12 col-xs-12 col-sm-6 order-1 order-sm-2`}>
                <div className="rounded-3 overflow-hidden">
                  <img
                    src="https://www.datocms-assets.com/19671/1586746387-cafe.jpg?auto=format&dpr=0.47&w=1733"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div
                className={`col-12 col-xs-12 col-sm-6  order-2 order-sm-1 d-flex justify-content-center align-items-center`}
              >
                <div className={` text-center text-sm-start pt-3`}>
                  <h2 className="h2Font">Help us change how Canadians pay</h2>
                  <MyButton
                    style={{ padding: '1rem 2rem' }}
                    others={window.innerWidth > 578 && 'm-0'}
                  >
                    Join our team
                  </MyButton>
                </div>
              </div>
            </div>
          </div>
        </ContainerMarginL>
      </div>{' '}
    </section>
  );
};

export default JoinOurTeam;
