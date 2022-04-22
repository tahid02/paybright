import styles from './containerL-margin.module.css';

// eslint-disable-next-line react/prop-types
const ContainerMarginL = ({ children, minW1200 }) => {
  console.log({ minW1200 });
  return (
    <section className={`${styles.contentMargin}  `}>
      <section className="container-fluid">{children}</section>
    </section>
  );
};

export default ContainerMarginL;
