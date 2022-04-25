import React, { useContext } from 'react';
import styles from './dropdown.module.css';
import { BsSearch } from 'react-icons/bs';
import CategoryDropdown from './category-dropdown';
import { FilterContext } from 'pages/HomePage';
import SortByDropdown from './sort-by-dropdown';

const Dropdown = () => {
  const { search, setSearch } = useContext(FilterContext);

  return (
    <div className=" w-100 d-flex justify-content-center ">
      {/* status dropdown start */}
      <SortByDropdown styles={styles} />
      {/* status dropdown end */}
      <div className={`${styles.featureOrSearch}  `}>
        {/* feature or input will be shown as device width (defined in css) */}
        {/* feature */}
        <CategoryDropdown styles={styles} />
        {/* input */}
        <div className={`${styles.search}  position-relative `}>
          <input
            type="text"
            placeholder="Search Merchant"
            className={`${styles.input}  `}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <BsSearch
            style={{
              position: 'absolute',
              top: '50%',
              right: '2rem',
              transform: 'translateY(-50%)',
              color: 'var(--lightblue)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
