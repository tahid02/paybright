import styles from './result.module.css';
import ResultCard from './result-card';

const BusinessResult = () => {
  return (
    <div className={`${styles.main}  `}>
      <div className={`${styles.resultContainer}  `}>
        <div className="">
          {' '}
          <div className={`${styles.heading}  `}>
            PayBright helps you drive business results
          </div>
        </div>
        <div className="row g-3 m-0">
          <ResultCard img="https://www.datocms-assets.com/19671/1586367269-red.png?auto=format" />
          <ResultCard img="https://www.datocms-assets.com/19671/1586367259-green.png?auto=format" />
          <ResultCard img="https://www.datocms-assets.com/19671/1586367251-yellow.png?auto=format " />
        </div>
      </div>
    </div>
  );
};

export default BusinessResult;
