// import ValueCard from './value-card/card';
import styles from './career-slide.module.css';
const mt = {
  ' @media screen and (min-width: 992px)': {
    marginTop: '3rem',
  },
};
const CareerImgSlide = () => {
  const urls = [
    'https://www.datocms-assets.com/19671/1592230704-careers-ppl-1.png?auto=format&dpr=0.53&w=1512',
    'https://www.datocms-assets.com/19671/1592230696-careers-ppl-2.png?auto=format&dpr=0.57&w=1408',
    'https://www.datocms-assets.com/19671/1592230691-careers-ppl-3.png?auto=format&dpr=0.89&w=909',
    'https://www.datocms-assets.com/19671/1592230685-careers-ppl-4.png?auto=format&dpr=0.51&w=1588',
  ];

  return (
    <section className={styles.mt}>
      <div
        className={`${styles.slider}  `}
        style={{ backgroundColor: '#f2f2fa' }}
      >
        {/* <div className={`${styles.slideTrack}  `}>
          <div className={`${styles.slide}  `}>
            <div className="p-2">
              <img
                src="https://www.datocms-assets.com/19671/1592230704-careers-ppl-1.png?auto=format&dpr=0.53&w=1512"
                alt=""
                className={`${styles.img}  `}
              />
            </div>
          </div>
          <div className={`${styles.slide}  `}>
            <div className="p-2">
              <img
                src="https://www.datocms-assets.com/19671/1592230696-careers-ppl-2.png?auto=format&dpr=0.57&w=1408"
                alt=""
                className={`${styles.img}  `}
              />
            </div>
          </div>
          <div className={`${styles.slide}  `}>
            <div className="p-2">
              <img
                src="https://www.datocms-assets.com/19671/1592230691-careers-ppl-3.png?auto=format&dpr=0.89&w=909"
                alt=""
                className={`${styles.img}  `}
              />
            </div>
          </div>
          <div className={`${styles.slide}  `}>
            <div className="p-2">
              <img
                src="https://www.datocms-assets.com/19671/1592230691-careers-ppl-3.png?auto=format&dpr=0.89&w=909"
                alt=""
                className={`${styles.img}  `}
              />
            </div>
          </div>
          <div className={`${styles.slide}  `}>
            <div className="p-2">
              <img
                src="https://www.datocms-assets.com/19671/1592230704-careers-ppl-1.png?auto=format&dpr=0.53&w=1512"
                alt=""
                className={`${styles.img}  `}
              />
            </div>
          </div>
          <div className={`${styles.slide}  `}>
            <div className="p-2">
              <img
                src="https://www.datocms-assets.com/19671/1592230696-careers-ppl-2.png?auto=format&dpr=0.57&w=1408"
                alt=""
                className={`${styles.img}  `}
              />
            </div>
          </div>
          <div className={`${styles.slide}  `}>
            <div className="p-2">
              <img
                src="https://www.datocms-assets.com/19671/1592230691-careers-ppl-3.png?auto=format&dpr=0.89&w=909"
                alt=""
                className={`${styles.img}  `}
              />
            </div>
          </div>
          <div className={`${styles.slide}  `}>
            <div className="p-2">
              <img
                src="https://www.datocms-assets.com/19671/1592230685-careers-ppl-4.png?auto=format&dpr=0.51&w=1588"
                alt=""
                className={`${styles.img}  `}
              />
            </div>
          </div>
          <div className={`${styles.slide}  `}>
            <div className="p-2">
              <img
                src="https://www.datocms-assets.com/19671/1592230704-careers-ppl-1.png?auto=format&dpr=0.53&w=1512"
                alt=""
                className={`${styles.img}  `}
              />
            </div>
          </div>
          <div className={`${styles.slide}  `}>
            <div className="p-2">
              <img
                src="https://www.datocms-assets.com/19671/1592230696-careers-ppl-2.png?auto=format&dpr=0.57&w=1408"
                alt=""
                className={`${styles.img}  `}
              />
            </div>
          </div>
          <div className={`${styles.slide}  `}>
            <div className="p-2">
              <img
                src="https://www.datocms-assets.com/19671/1592230691-careers-ppl-3.png?auto=format&dpr=0.89&w=909"
                alt=""
                className={`${styles.img}  `}
              />
            </div>
          </div>
          <div className={`${styles.slide}  `}>
            <div className="p-2">
              <img
                src="https://www.datocms-assets.com/19671/1592230685-careers-ppl-4.png?auto=format&dpr=0.51&w=1588"
                alt=""
                className={`${styles.img}  `}
              />
            </div>
          </div>
          <div className={`${styles.slide}  `}>
            <div className="p-2">
              <img
                src="https://www.datocms-assets.com/19671/1592230704-careers-ppl-1.png?auto=format&dpr=0.53&w=1512"
                alt=""
                className={`${styles.img}  `}
              />
            </div>
          </div>
          <div className={`${styles.slide}  `}>
            <div className="p-2">
              <img
                src="https://www.datocms-assets.com/19671/1592230696-careers-ppl-2.png?auto=format&dpr=0.57&w=1408"
                alt=""
                className={`${styles.img}  `}
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CareerImgSlide;
