import React from 'react';
import styles from './my-button.module.css';
// eslint-disable-next-line react/prop-types
const MyButton = ({ children, bgColor, textColor, ...rest }) => {
  return (
    <button
      className={`${styles.w} bg-${bgColor || 'lightblue'}  text-${
        textColor || 'white'
      } `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default MyButton;
