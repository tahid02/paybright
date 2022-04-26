import RightIcon from 'components/common/svg/right-icon';
import styles from './blog-card.module.css';
const BlogCard = () => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-4 ">
      <div
        className="paddingX"
        style={{ paddingTop: '1rem', paddingBottom: '1rem' }}
      >
        <a className={`${styles.cardPadding}  `}>
          <img
            src="https://www.datocms-assets.com/19671/1645115977-trends-press-release-banner_en.jpg?auto=format&dpr=0.4&w=2000"
            className={`w-100 ${styles.borderRadius}  `}
            alt="..."
          />
          <h4 className="h4 text-darkblue" style={{ margin: ' 1rem 0px 3rem' }}>
            New PayBright consumer report reveals that Canadians will continue
            to be financially cautious in 2022 but will prioritize spending on
            health and wellness
          </h4>
          <div className="mt-auto">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightblue  text-decoration-none"
              style={{ fontWeight: 600 }}
            >
              Read more{' '}
              <span>
                <RightIcon />{' '}
              </span>
            </a>
          </div>
        </a>
      </div>{' '}
    </div>
  );
};

export default BlogCard;
