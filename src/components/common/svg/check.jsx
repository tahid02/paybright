import React from 'react';

const Check = () => {
  return (
    <div
      style={{
        width: '1.5rem',
        height: '1.5rem',
        flex: '0 0 1.5rem',
        background: 'rgb(0, 193, 161)',
        borderRadius: '100%',
        marginRight: '0.5rem',
        position: 'relative',
        color: 'rgb(255, 255, 255)',
      }}
    >
      <div
        className="position-absolute w-100"
        style={{ top: '0%', left: '0%' }}
      >
        <svg
          aria-hidden="true"
          width="25"
          height="25"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="SVGIcon-yudk90-0 gJinXq "
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.5198 11.4593C31.8184 11.7463 31.8278 12.2211 31.5408 12.5197L16.8837 27.7685C16.3743 28.41 15.5896 28.7732 14.7689 28.7489C13.9362 28.7242 13.1642 28.3035 12.6959 27.6152L8.38864 21.5521C8.14875 21.2144 8.22803 20.7462 8.5657 20.5063C8.90338 20.2664 9.37159 20.3457 9.61148 20.6834L13.9235 26.7531L13.9337 26.7679C14.1296 27.0582 14.4567 27.2389 14.8133 27.2495C15.17 27.2601 15.5077 27.0989 15.721 26.8205C15.738 26.7982 15.7563 26.777 15.7757 26.7568L30.4593 11.4803C30.7464 11.1816 31.2212 11.1722 31.5198 11.4593Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Check;
