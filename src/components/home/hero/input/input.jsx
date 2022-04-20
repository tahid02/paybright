import React from 'react';
import { BsSearch } from 'react-icons/bs';
import styles from './input.module.css';
const SearchInput = () => {
  return (
    <div className={`${styles.searchInput} `}>
      <div className={`  position-relative `}>
        <input
          type="text"
          placeholder="Search Merchant"
          className={`${styles.input}  `}
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
