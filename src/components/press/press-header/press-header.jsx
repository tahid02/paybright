import ContainerCenter from 'components/common/container-large/container-l';
import styles from './press-header.module.css';

const PressHeader = () => {
  return (
    <section
      className={`${styles.headerBg}  `}
      style={{ backgroundColor: '#f5f1eb' }}
    >
      <ContainerCenter>
        <div className={`${styles.contHeight}  `}>
          <div className="text-center text-darkblue">
            <h1>News & press</h1>
            <p className={`${styles.pFont}  `}>
              Here you will find our latest press releases and press kit for
              download.
            </p>
          </div>
        </div>
      </ContainerCenter>
    </section>
  );
};

export default PressHeader;
