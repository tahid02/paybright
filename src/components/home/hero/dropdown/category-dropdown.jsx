/* eslint-disable react/prop-types */
import { FilterContext } from 'pages/HomePage';
import { useContext, useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { IoIosArrowUp } from 'react-icons/io';
// eslint-disable-next-line react/prop-types
const CategoryDropdown = ({ styles }) => {
  const { category, setCategory } = useContext(FilterContext);
  const [showCategory, setShowCategory] = useState(false);
  const handleCategory = (e) => {
    setCategory(e.target.innerText);
    setShowCategory(!showCategory);
  };
  return (
    <div className={`${styles.feature} `}>
      {/* select button */}
      <button
        onClick={() => setShowCategory(!showCategory)}
        className={`${styles.dropbtn}  `}
      >
        <div className={`${styles.label}  `}>Catagories</div>
        <div className="d-flex align-items-center">
          <div className="me-auto"> {category}</div>
          <div>{showCategory ? <IoIosArrowUp /> : <AiOutlineDown />}</div>
        </div>
      </button>{' '}
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

export default CategoryDropdown;
