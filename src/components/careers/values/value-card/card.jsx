import styles from './value-card.module.css';
// eslint-disable-next-line react/prop-types
const ValueCard = ({ img, p, h4 }) => {
  return (
    <section className={`${styles.card}  `}>
      <div className="row">
        <div className=" col-3 px-0">
          <div className={`${styles.imgCont} pb-0 `}>
            <img
              src={
                img ||
                'https://www.datocms-assets.com/19671/1592230713-careers-values-2.png?auto=format&dpr=1&w=400'
              }
              alt=""
              className="w-100"
            />
          </div>
        </div>
        <div
          className="col-9"
          style={{ paddingLeft: '2rem', fontSize: '1.25rem' }}
        >
          <h4
            className="text-darkblue"
            style={{
              padding: '0px',
              margin: '0px 0px 0.5rem',
              fontSize: '1.25rem',
              fontFamily: 'IBM Plex Sans Hebrew',
              fontWeight: '500',
              lineHeight: '1.2',
            }}
          >
            {h4 || 'We are never done improving'}
          </h4>
          <p
            className="text-lightblue"
            style={{
              padding: '0px',
              margin: '0px',
              fontSize: '1rem',
              lineHeight: '1.5',
              fontWeight: '400',
              fontFamily: 'Inter',
            }}
          >
            {p ||
              ' We are never satisfied with our product or the customer experience. We are always open to a new and better way.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueCard;
