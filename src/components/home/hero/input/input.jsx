import { FilterContext } from 'pages/HomePage';
import React, { useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import styles from './input.module.css';
const SearchInput = () => {
  const { search, setSearch } = useContext(FilterContext);
  return (
    <div className={`${styles.searchInput} `}>
      <div className={`  position-relative `}>
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
  );
};

export default SearchInput;
