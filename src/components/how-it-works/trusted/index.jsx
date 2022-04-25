import ContainerCenter from 'components/common/container-large/container-l';
import { Carousel } from 'react-bootstrap';
import TrustedCard from './card/trusted-card';
import TrustCarousel from './trust-carousel';
import styles from './trusted.module.css';
import { trustInfo } from './trusts';

const Trusted = () => {
  return (
    <section className={`${styles.contPadding}  `}>
      <ContainerCenter>
        <div className="d-flex justify-content-center">
          <img
            src="https://www.datocms-assets.com/19671/1585013335-2-reviews.png?auto=format&dpr=1&h=68&w=400"
            alt=""
            className="img-fluid"
          />
        </div>
        <h2
          className="h2Font text-center"
          style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}
        >
          We’re trusted by over 2000 happy customers on Google
        </h2>
      </ContainerCenter>

      <section className="d-none d-md-block">
        {/* sliding section */}
        <div className={`${styles.slider}  `}>
          <div className={`${styles.slideTrack}  `}>
            {trustInfo.map((trust, id) => {
              return (
                <>
                  <div className={`${styles.slide}  `} key={id}>
                    <TrustedCard
                      cardPosition={trust?.cardPosition}
                      quote={trust.quote}
                      name={trust.name}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <section className="d-block d-md-none">
        <TrustCarousel />
      </section>
    </section>
  );
};

export default Trusted;
