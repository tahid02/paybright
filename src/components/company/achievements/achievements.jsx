import ContainerMarginL from 'components/common/container-large-margin/containerL-margin';
import AchieveCard from './achieve-card';
import styles from './achievement.module.css';

const Achievements = () => {
  return (
    <ContainerMarginL>
      <div className="row">
        <div className="col-12 col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <div className={`${styles.leftTobImgW}  mx-auto`}>
            <img
              src="https://www.datocms-assets.com/19671/1586798665-left-plant-v2.png?auto=format&dpr=1&w=516"
              alt=""
              className="img-fluid w-100 "
            />
          </div>
        </div>
        <div className="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-auto">
          <h2 className="h2Font text-center" style={{ margin: '2.5rem 0' }}>
            We are proud of our achievements
          </h2>
        </div>
      </div>
      {/* midddle div */}
      <div className="w-100">
        <div className={`${styles.middleW} mx-auto `}>
          <div className="row g-3">
            <AchieveCard
              styles={styles}
              img="https://www.datocms-assets.com/19671/1586799590-fintech-company.png?auto=format&dpr=1&w=621"
              text="FinTech Company of the Year"
            />
            <AchieveCard
              styles={styles}
              img="https://www.datocms-assets.com/19671/1588029068-billions.png?auto=format&dpr=1&w=614"
              text="In approved consumer spending power to date"
            />
            <AchieveCard
              styles={styles}
              img="https://www.datocms-assets.com/19671/1600702305-over7000.png?auto=format&dpr=1&w=614"
              text="Number of merchants signed up

"
            />
          </div>
        </div>
      </div>

      <div className="w-100 d-none d-sm-block">
        <div className="w-25 ms-auto">
          <img
            src="https://www.datocms-assets.com/19671/1586798558-right-plant.png?auto=format&dpr=1&w=684"
            alt=""
            className="img-fluid w-50"
          />
        </div>
      </div>
    </ContainerMarginL>
  );
};

export default Achievements;
