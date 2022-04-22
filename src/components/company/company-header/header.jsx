import styles from './header.module.css';

const CompanyHeader = () => {
  return (
    <section>
      <section className={`${styles.bgPadding}  `}>
        <section className={`${styles.headerBg}  `}>
          <section className={`${styles.height}  `}>
            <section className={`${styles.contentMargin}  `}>
              <div className="container-fluid text-center">
                <div className={`${styles.w60}  mx-auto`}>
                  <h1 className="h1Font text-darkblue">
                    We<span>&#8217;</span>re here to give fellow Canadians a
                    better way to pay for the things they love
                  </h1>
                </div>
              </div>
            </section>
          </section>{' '}
        </section>
      </section>
    </section>
  );
};

export default CompanyHeader;
