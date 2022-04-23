import ContainerMarginL from 'components/common/container-large-margin/containerL-margin';
import BlogCard from './blog-card/blog-card';
import styles from './blog.module.css';

const Blog = () => {
  return (
    <section style={{ paddingTop: '.5rem' }}>
      <ContainerMarginL>
        <div className={`${styles.w80}  mx-auto `}>
          <div className="paddingX">
            <div className="row ">
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </div>
        </div>
      </ContainerMarginL>
    </section>
  );
};

export default Blog;
