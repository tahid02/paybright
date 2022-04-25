import ContainerCenter from 'components/common/container-large/container-l';
import ValueCard from './value-card/card';
import ValueCarousel from './value-card/value-carousel';
import styles from './values.module.css';

const OurValues = () => {
  return (
    <section style={{ backgroundColor: '#f2f2fa', position: 'relative' }}>
      <div className="py-5">
        <ContainerCenter>
          <h2 className="h2Font text-center">Our Values</h2>
          <p className="text-darkblue p pFont text-center">
            We live by these values all day, every day.
          </p>
        </ContainerCenter>
      </div>
      <section
        className={`${styles.slider} d-none d-lg-block  position-relative`}
      >
        <section className="">
          <div className={`${styles.slideTrack}  `}>
            <div className={`${styles.slide}  `}>
              <ValueCard
                img="https://www.datocms-assets.com/19671/1586202786-values-image.png?auto=format&dpr=1&w=400"
                h4=" We just get it done "
                p=" We execute and have a bias to action. We focus on solutions, not problems"
              />
            </div>
            <div className={`${styles.slide}  `}>
              <ValueCard
                img="https://www.datocms-assets.com/19671/1592230713-careers-values-2.png?auto=format&dpr=1&w=400"
                h4="We all work for each other"
                p=" We succeed or fail as a team. We have no room for egos or blame. "
              />
            </div>
            <div className={`${styles.slide}  `}>
              <ValueCard
                img="https://www.datocms-assets.com/19671/1592230757-careers-values-3.png?auto=format&dpr=1&w=382"
                h4="  We are never done improving      "
                p="We are never satisfied with our product or the customer experience. We are always open to a new and better way.      "
              />
            </div>
            <div className={`${styles.slide}  `}>
              <ValueCard
                img="https://www.datocms-assets.com/19671/1586202786-values-image.png?auto=format&dpr=1&w=400"
                h4=" We just get it done "
                p=" We execute and have a bias to action. We focus on solutions, not problems"
              />
            </div>
            <div className={`${styles.slide}  `}>
              <ValueCard
                img="https://www.datocms-assets.com/19671/1592230773-careers-team-sharing.png?auto=format&dpr=1&w=420"
                h4=" We do the right thing      "
                p=" We act with integrity, transparency, and fairness. We treat everyone the way we would want to be treated.      "
              />
            </div>
            <div className={`${styles.slide}  `}>
              <ValueCard
                img="https://www.datocms-assets.com/19671/1592230730-careers-grow.png?auto=format&dpr=1&w=418"
                h4=" We thrive on freedom & responsibility      "
                p="We trust each other to act in the best interest of the company. We do not micromanage.      "
              />
            </div>

            <div className={`${styles.slide}  `}>
              <ValueCard
                img="https://www.datocms-assets.com/19671/1592230757-careers-values-3.png?auto=format&dpr=1&w=382"
                h4="  We are never done improving      "
                p="We are never satisfied with our product or the customer experience. We are always open to a new and better way.      "
              />
            </div>
            <div className={`${styles.slide}  `}>
              <ValueCard
                img="https://www.datocms-assets.com/19671/1586202786-values-image.png?auto=format&dpr=1&w=400"
                h4=" We just get it done "
                p=" We execute and have a bias to action. We focus on solutions, not problems"
              />
            </div>
            <div className={`${styles.slide}  `}>
              <ValueCard
                img="https://www.datocms-assets.com/19671/1592230713-careers-values-2.png?auto=format&dpr=1&w=400"
                h4="We all work for each other"
                p=" We succeed or fail as a team. We have no room for egos or blame. "
              />
            </div>
            <div className={`${styles.slide}  `}>
              <ValueCard
                img="https://www.datocms-assets.com/19671/1592230757-careers-values-3.png?auto=format&dpr=1&w=382"
                h4="  We are never done improving      "
                p="We are never satisfied with our product or the customer experience. We are always open to a new and better way.      "
              />
            </div>
            <div className={`${styles.slide}  `}>
              <ValueCard
                img="https://www.datocms-assets.com/19671/1586202786-values-image.png?auto=format&dpr=1&w=400"
                h4=" We just get it done "
                p=" We execute and have a bias to action. We focus on solutions, not problems"
              />
            </div>
            <div className={`${styles.slide}  `}>
              <ValueCard
                img="https://www.datocms-assets.com/19671/1592230773-careers-team-sharing.png?auto=format&dpr=1&w=420"
                h4=" We do the right thing      "
                p=" We act with integrity, transparency, and fairness. We treat everyone the way we would want to be treated.      "
              />
            </div>
            <div className={`${styles.slide}  `}>
              <ValueCard
                img="https://www.datocms-assets.com/19671/1592230730-careers-grow.png?auto=format&dpr=1&w=418"
                h4=" We thrive on freedom & responsibility      "
                p="We trust each other to act in the best interest of the company. We do not micromanage.      "
              />
            </div>

            <div className={`${styles.slide}  `}>
              <ValueCard
                img="https://www.datocms-assets.com/19671/1592230757-careers-values-3.png?auto=format&dpr=1&w=382"
                h4="  We are never done improving      "
                p="We are never satisfied with our product or the customer experience. We are always open to a new and better way.      "
              />
            </div>
          </div>
        </section>
      </section>{' '}
      <div className="d-block d-lg-none position-relative ">
        <ValueCarousel />
      </div>
    </section>
  );
};

export default OurValues;
