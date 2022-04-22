import styles from './team-card.module.css';

const TeamCard = () => {
  return (
    // <div className="col-6 col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 col-xxl-2">

    // </div>
    <div className="col px-0">
      <div className={`${styles.pX}  `}>
        <div className="" style={{ paddingBottom: '2.5rem' }}>
          {' '}
          <div style={{ borderRadius: '8px', marginBottom: '1rem' }}>
            {' '}
            <img
              src="https://www.datocms-assets.com/19671/1592600875-arthur.png?auto=format&dpr=1&w=557"
              className="w-100"
              alt="..."
            />
          </div>
          <div className="">
            <p className={`${styles.p} ${styles.p1} text-darkblue `}>
              Arthur Brown
            </p>
            <p className={`${styles.p} ${styles.p2} text-darkblue `}>
              Director, National Sales
            </p>
          </div>
        </div>
      </div>{' '}
    </div>
  );
};

export default TeamCard;
