/* eslint-disable react/prop-types */
import { BsFillCheckCircleFill } from 'react-icons/bs';

const Points = ({ children, styles }) => {
  return (
    <div
      className="d-flex"
      style={{ marginBottom: '1rem', width: 'fitContent' }}
    >
      <div
        className="me-3"
        style={{
          height: '1.5rem',
          width: '1.5rem',
          flex: '0 0 1.5rem',
        }}
      >
        <BsFillCheckCircleFill color="#00c1a1" fontSize="1.5rem" />{' '}
      </div>

      <p className={`${styles.checkPay}  `}>{children}</p>
    </div>
  );
};

export default Points;
