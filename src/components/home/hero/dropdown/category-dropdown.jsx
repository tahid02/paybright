/* eslint-disable react/prop-types */
import DownArrow from 'components/common/svg/down-arrow';
import UpArrow from 'components/common/svg/up-arrow';
import { CATEGORY_NAME } from 'constants/constants';
import useClickedOutside from 'hooks/useClickedOutside';
import { FilterContext } from 'pages/HomePage';
import { useContext, useState } from 'react';

// eslint-disable-next-line react/prop-types
const CategoryDropdown = ({ styles }) => {
  const { category, setCategory } = useContext(FilterContext);
  const [showCategory, setShowCategory] = useState(false);
  const { refElement } = useClickedOutside(() => setShowCategory(false)); // this callback has called inside the hook
  const handleCategory = (e) => {
    setCategory(e.target.innerText);
    setShowCategory(!showCategory);
  };

  return (
    <div className={`${styles.feature} `}>
      {/* select button */}
      <div className="d-none d-sm-block">
        <button
          ref={refElement}
          onClick={() => setShowCategory((show) => !show)}
          className={`${styles.dropbtn}  `}
        >
          <div className={`${styles.label}  `}>Catagories</div>
          <div className="d-flex align-items-center">
            <div className="me-auto"> {category}</div>
            {/* <div>{showCategory ? <IoIosArrowUp /> : <AiOutlineDown />}</div> */}
            <div>{showCategory ? <UpArrow /> : <DownArrow />}</div>
          </div>
        </button>{' '}
      </div>

      {/* dropdown part */}
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
          onClick={handleCategory}
        >
          {CATEGORY_NAME.map((category, index) => (
            <button key={index} className={`${styles.downbtn}  `}>
              {category}
            </button>
          ))}
          {/* <button className={`${styles.downbtn}  `}> All</button>
          <button className={`${styles.downbtn}  `}>Home & Furniture</button>
          <button className={`${styles.downbtn}  `}>Electronics</button>
          <button className={`${styles.downbtn}  `}>Fashion</button>
          <button className={`${styles.downbtn}  `}>Beauty & Wellness</button>
          <button className={`${styles.downbtn}  `}> Sporting Goods</button>
          <button className={`${styles.downbtn}  `}> Hobby & Leisure</button>
          <button className={`${styles.downbtn}  `}>Auto</button> */}
        </div>
      )}

      <div className="d-block d-sm-none">
        <button className={`${styles.dropbtn} p-0`}>
          <div className={`${styles.label} ms-3`}>Catagories</div>
          <select
            name="categorySelect"
            id="category"
            defaultValue={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ padding: '1.2rem 1rem' }}
          >
            {CATEGORY_NAME.map((category, index) => (
              <option key={index}>{category} </option>
            ))}
            {/* <option>All </option>
            <option> Home & Furniture</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option> Beauty & Wellness</option>
            <option>Sporting Goods</option>
            <option> Hobby & Leisure</option>
            <option> Auto</option> */}
          </select>{' '}
        </button>{' '}
      </div>
    </div>
  );
};

export default CategoryDropdown;
