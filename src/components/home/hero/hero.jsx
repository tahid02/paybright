import React, { useState } from 'react';
import Interest from '../shops/interest/interest';
import Category from './categorySection/category';
import Dropdown from './dropdown/dropdown';
import styles from './hero.module.css';
import SearchInput from './input/input';
const Hero = () => {
  const small =
    'https://www.datocms-assets.com/19671/1647628074-spring_homepage_mobile.jpg?auto=format';
  const medium =
    'https://www.datocms-assets.com/19671/1647628068-spring_homepage_tablet.jpg?auto=format';
  const large =
    'https://www.datocms-assets.com/19671/1647628060-spring_homepage_desktop.jpg?auto=format';
  return (
    <section>
      <div className={`card  text-white border-0 rounded-0 ${styles.hero}  `}>
        <img
          src={
            // reload after resize
            window.innerWidth > 1200
              ? large
              : window.innerWidth > 768
              ? medium
              : small || small
          }
          // srcSet={` ${large} 1280w , ${medium} 768w ,${small} 300w`}
          className="card-img"
          alt="..."
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />

        <div className="card-img-overlay d-flex align-items-center">
          <div className="w-100">
            <h1 className={`${styles.h1}  `}>
              {' '}
              The smarter way to pay for everything under the sun
            </h1>

            <p className={`${styles.p}   card-text text-darkblue text-center `}>
              Break up the cost on all your Spring shopping with no hidden fees
              and no surprises.
            </p>
            <SearchInput />
            <Dropdown />
          </div>
        </div>
      </div>{' '}
      <Category />
      <Interest />
    </section>
  );
};

export default Hero;
