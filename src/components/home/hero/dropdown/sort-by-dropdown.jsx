/* eslint-disable react/prop-types */
import DownArrow from 'components/common/svg/down-arrow';
import UpArrow from 'components/common/svg/up-arrow';
import { FilterContext } from 'pages/HomePage';
import React, { useContext, useState } from 'react';

const SortByDropdown = ({ styles }) => {
  const { status, setStatus } = useContext(FilterContext);

  const [show, setShow] = useState(false);
  function handleStatus(e) {
    setStatus(e.target.innerText);
    setShow(!show);
  }
  return (
    <div className={`${styles.category}  `}>
      {/* status dropdown select button */}
      <div className="d-none d-sm-block">
        <button
          onClick={() => setShow(!show)}
          className={`${styles.dropbtn}  `}
        >
          <div className={`${styles.label}  `}>sort by</div>
          <div className="d-flex align-items-center">
            <div className="me-auto">{status}</div>
            <div>{show ? <UpArrow /> : <DownArrow />}</div>
          </div>
        </button>{' '}
      </div>
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
      <div className="d-block d-sm-none">
        <button className={`${styles.dropbtn} p-0`}>
          <div className={`${styles.label} ms-3`}>Sort by</div>
          <select
            name="categorySelect"
            id="category"
            defaultValue={status}
            onChange={(e) => setStatus(e.target.value)}
            style={{ padding: '1.2rem 1rem' }}
          >
            {' '}
            <option>Featured </option>
            <option> Popular</option>
            <option>New</option>
            <option>Alphabetical</option>
          </select>{' '}
        </button>{' '}
      </div>
    </div>
  );
};

export default SortByDropdown;
