import Interest from '../shops/interest/interest';
import Category from './categorySection/category';
import Dropdown from './dropdown/dropdown';
import styles from './hero.module.css';
import SearchInput from './input/input';
const Hero = () => {
  return (
    <section>
      <div className={`  text-white border-0 rounded-0 ${styles.hero} h-auto `}>
        <div className="container-fluid py-5">
          <div className="w-100">
            <h1 className={`${styles.h1}  `}>
              {' '}
              The smarter way to pay for everything under the sun
            </h1>

            <p className={`${styles.p}  text-darkblue text-center `}>
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
