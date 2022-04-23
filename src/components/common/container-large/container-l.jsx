import styles from './container-l.module.css';

// eslint-disable-next-line react/prop-types
const ContainerCenter = ({ children }) => {
  return (
    <section className={`${styles.contentMargin}  `}>
      <section className="container-fluid">
        <div className="w-100">
          <div className={`${styles.w50}  mx-auto`}>{children} </div>
        </div>
      </section>
    </section>
  );
};

export default ContainerCenter;
