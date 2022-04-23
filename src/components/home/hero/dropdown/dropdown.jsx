import React, { useContext, useState } from 'react';
import styles from './dropdown.module.css';
import { AiOutlineDown } from 'react-icons/ai';
import { IoIosArrowUp } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs';
import CategoryDropdown from './category-dropdown';
import { FilterContext } from 'pages/HomePage';
const Dropdown = () => {
  const { status, setStatus, search, setSearch } = useContext(FilterContext);
  const [show, setShow] = useState(false);
  function handleStatus(e) {
    setStatus(e.target.innerText);
    setShow(!show);
  }
  return (
    <div className=" w-100 d-flex justify-content-center ">
      {/* status dropdown start */}
      <div className={`${styles.category}  `}>
        {/* status dropdown select button */}
        <button
          onClick={() => setShow(!show)}
          className={`${styles.dropbtn}  `}
        >
          <div className={`${styles.label}  `}>sort by</div>
          <div className="d-flex align-items-center">
            <div className="me-auto">{status}</div>
            <div>{show ? <IoIosArrowUp /> : <AiOutlineDown />}</div>
          </div>
        </button>{' '}
        {/* status dropdown part */}
        {show && (
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
            onClick={handleStatus}
          >
            <button className={`${styles.downbtn}  `}> Featured</button>
            <button className={`${styles.downbtn}  `}>Popular</button>
            <button className={`${styles.downbtn}  `}>New</button>
            <button className={`${styles.downbtn}  `}>Alphabetical</button>
          </div>
        )}
      </div>
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
