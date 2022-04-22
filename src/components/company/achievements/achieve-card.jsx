/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line react/prop-types
const AchieveCard = ({ styles, img, text }) => {
  return (
    <div className="col-12 col-sm-4 pb-5">
      {/* <div className="paddingX"> */}
      <div className={`${styles.imgContW}  mx-auto `}>
        <img
          src={
            img ||
            'https://www.datocms-assets.com/19671/1600702305-over7000.png?auto=format&dpr=1&w=614'
          }
          alt=""
          className="img-fluid w-100"
        />
      </div>
      <p
        className={`${styles.textW} p  mx-auto text-center text-darkblue `}
        style={{ marginTop: '1.5rem' }}
      >
        {text || 'Number of merchants signed up'}
      </p>
      {/* </div> */}
    </div>
  );
};

export default AchieveCard;
