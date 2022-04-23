import ContainerCenter from 'components/common/container-large/container-l';
import TrustedCard from './card/trusted-card';
import styles from './trusted.module.css';

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
      <section>
        {/* sliding section */}
        <div className={`${styles.slider}  `}>
          <div className={`${styles.slideTrack}  `}>
            <div className={`${styles.slide}  `}>
              <TrustedCard
                cardPosition="lowerCard"
                quote="Love, love, love how fast and easy it was to go through the application process."
                name={'Joyce G'}
              />
            </div>
            <div className={`${styles.slide}  `}>
              <TrustedCard
                quote={`“Very simple process! As easy as online shopping can get."`}
                name="Zoltan L."
              />
            </div>
            <div className={`${styles.slide}  `}>
              <TrustedCard
                cardPosition="lowerCard"
                quote={`"This is the future of flexible payment. The process was streamlined and very easy."`}
                name="Anthony A."
              />
            </div>
            <div className={`${styles.slide}  `}>
              <TrustedCard
                quote={`I think this is a new dawn for Canadians to make big purchases without paying that 20% credit card interest`}
                name={'Diane N.'}
              />
            </div>
            <div className={`${styles.slide}  `}>
              <TrustedCard
                cardPosition="lowerCard"
                quote={
                  'PayBright was so easy to use and has allowed me to slowly pay for my purchase as opposed to paying one lump sum! Thank you.'
                }
                name
              />
            </div>
            <div className={`${styles.slide}  `}>
              <TrustedCard
                quote={
                  "This was one of the best experiences I've had to make a purchase. Thank you PayBright. I will definitely refer your service."
                }
                name="Diane N."
              />
            </div>

            <div className={`${styles.slide}  `}>
              <TrustedCard
                cardPosition="lowerCard"
                quote={`"This is the future of flexible payment. The process was streamlined and very easy."`}
                name="Anthony A."
              />
            </div>
            <div className={`${styles.slide}  `}>
              <TrustedCard
                cardPosition="lowerCard"
                quote="Love, love, love how fast and easy it was to go through the application process."
                name={'Joyce G'}
              />
            </div>
            <div className={`${styles.slide}  `}>
              <TrustedCard
                quote={`“Very simple process! As easy as online shopping can get."`}
                name="Zoltan L."
              />
            </div>
            <div className={`${styles.slide}  `}>
              <TrustedCard
                cardPosition="lowerCard"
                quote={`"This is the future of flexible payment. The process was streamlined and very easy."`}
                name="Anthony A."
              />
            </div>
            <div className={`${styles.slide}  `}>
              <TrustedCard
                quote={`I think this is a new dawn for Canadians to make big purchases without paying that 20% credit card interest`}
                name={'Diane N.'}
              />
            </div>
            <div className={`${styles.slide}  `}>
              <TrustedCard
                cardPosition="lowerCard"
                quote={
                  'PayBright was so easy to use and has allowed me to slowly pay for my purchase as opposed to paying one lump sum! Thank you.'
                }
                name
              />
            </div>
            <div className={`${styles.slide}  `}>
              <TrustedCard
                quote={
                  "This was one of the best experiences I've had to make a purchase. Thank you PayBright. I will definitely refer your service."
                }
                name="Diane N."
              />
            </div>

            <div className={`${styles.slide}  `}>
              <TrustedCard
                cardPosition="lowerCard"
                quote={`"This is the future of flexible payment. The process was streamlined and very easy."`}
                name="Anthony A."
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Trusted;
