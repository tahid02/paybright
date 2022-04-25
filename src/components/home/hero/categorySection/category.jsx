import { FilterContext } from 'pages/HomePage';
import { useContext, useState } from 'react';
import styles from './category.module.css';

const Category = () => {
  const { category, setCategory } = useContext(FilterContext);
  const [active, setActive] = useState('All');
  const handleCategory = (e) => {
    setCategory(e.target.innerText);
    setActive(e.target.innerText);
  };
  console.log({ active }, category === active);
  return (
    <div
      className="container-fluid d-flex justify-content-center d-none d-xl-block "
      style={{
        boxShadow:
          'rgb(20 19 51 / 6%) 0px 8px 12px, rgb(20 19 51 / 6%) 0px 2px 6px',
      }}
    >
      <div
        className=" d-flex flex-fill flex-row justify-content-center align-items-center mx-auto"
        onClick={handleCategory}
      >
        {[
          'All',
          'Home & Furniture',
          'Electronics',
          'Fashion',
          'Beauty & Wellness',
          'Sporting Goods',
          'Hobby & Leisure',
          'Auto',
        ].map((cate, index) => {
          return (
            <>
              <button
                className={`mx-1 ${styles.categoryMenu} ${
                  active === cate && styles.active
                }`}
                key={index}
              >
                {cate}
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
