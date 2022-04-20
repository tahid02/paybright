/* eslint-disable react/prop-types */
import { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { IoIosArrowUp } from 'react-icons/io';
// eslint-disable-next-line react/prop-types
const Feature = ({ styles }) => {
  const [showCategory, setShowCategory] = useState();
  return (
    <div className={`${styles.feature} `}>
      <button
        onClick={() => setShowCategory(!showCategory)}
        className={`${styles.dropbtn}  `}
      >
        <div className={`${styles.label}  `}>Catagories</div>
        <div className="d-flex align-items-center">
          <div className="me-auto">All</div>
          <div>{showCategory ? <IoIosArrowUp /> : <AiOutlineDown />}</div>
        </div>
      </button>{' '}
      {showCategory && (
        <div
          className="list-group"
          style={{
            zIndex: 99,
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%)',
            width: '100%',
            textAlign: 'start',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '4px',
          }}
        >
          <button className={`${styles.downbtn}  `}> All</button>
          <button className={`${styles.downbtn}  `}>Home & Furniture</button>
          <button className={`${styles.downbtn}  `}>Electronics</button>
          <button className={`${styles.downbtn}  `}>Fashion</button>
          <button className={`${styles.downbtn}  `}>Beauty & Wellness</button>
          <button className={`${styles.downbtn}  `}> Sporting Goods</button>
          <button className={`${styles.downbtn}  `}> Hobby & Leisure</button>
          <button className={`${styles.downbtn}  `}>Auto</button>
        </div>
      )}
    </div>
  );
};

export default Feature;
