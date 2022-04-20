import styles from './category.module.css';

const Category = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center d-none d-xl-block "
      style={{
        boxShadow:
          'rgb(20 19 51 / 6%) 0px 8px 12px, rgb(20 19 51 / 6%) 0px 2px 6px',
      }}
    >
      <div className=" d-flex flex-fill flex-row justify-content-center align-items-center mx-auto">
        {' '}
        <button className={`${styles.categoryMenu}`}>All</button>
        <button className={`${styles.categoryMenu}`}>Home & Furniture</button>
        <button className={`${styles.categoryMenu}`}>Electronics</button>
        <button className={`${styles.categoryMenu}`}>Fashion</button>
        <button className={`${styles.categoryMenu}`}>Beauty & Wellness</button>
        <button className={`${styles.categoryMenu}`}>Sporting Goods</button>
        <button className={`${styles.categoryMenu}`}>Hobby & Leisure</button>
        <button className={`${styles.categoryMenu}`}>Auto</button>
      </div>
    </div>
  );
};

export default Category;
