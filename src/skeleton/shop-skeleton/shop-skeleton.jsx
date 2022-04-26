import styles from './shop-skeleton.module.css';

const ShopCardSkeleton = () => {
  return (
    <div className={`${styles.card}  `}>
      <div className={`${styles.cover} ${styles.skeleton} `}>
        <img src="" />
      </div>

      <div className={`${styles.content}  `}>
        <p className={`${styles.skeleton} mb-1 `}></p>
        <h2 className={`${styles.skeleton}  `}></h2>
      </div>
    </div>
  );
};

export default ShopCardSkeleton;
