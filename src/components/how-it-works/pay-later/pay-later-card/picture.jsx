import styles from './picture.module.css';

const Picture = () => {
  return (
    <picture>
      <source
        media="(min-width: 0px)"
        srcSet="https://www.datocms-assets.com/19671/1586375539-step2-v2.png?auto=format&amp;dpr=0.12&amp;w=1752 200w,
https://www.datocms-assets.com/19671/1586375539-step2-v2.png?auto=format&amp;dpr=0.23&amp;w=1752 400w,
https://www.datocms-assets.com/19671/1586375539-step2-v2.png?auto=format&amp;dpr=0.46&amp;w=1752 800w,
https://www.datocms-assets.com/19671/1586375539-step2-v2.png?auto=format&amp;dpr=0.69&amp;w=1752 1200w,
https://www.datocms-assets.com/19671/1586375539-step2-v2.png?auto=format&amp;dpr=0.92&amp;w=1752 1600w,
https://www.datocms-assets.com/19671/1586375539-step2-v2.png?auto=format&amp;dpr=1&amp;w=1752 1752w"
        sizes="(max-width: 800px) 100vw, 800px"
      />
      <img
        sizes="(max-width: 800px) 100vw, 800px"
        srcSet="https://www.datocms-assets.com/19671/1586375539-step2-v2.png?auto=format&amp;dpr=0.12&amp;w=1752 200w,
https://www.datocms-assets.com/19671/1586375539-step2-v2.png?auto=format&amp;dpr=0.23&amp;w=1752 400w,
https://www.datocms-assets.com/19671/1586375539-step2-v2.png?auto=format&amp;dpr=0.46&amp;w=1752 800w,
https://www.datocms-assets.com/19671/1586375539-step2-v2.png?auto=format&amp;dpr=0.69&amp;w=1752 1200w,
https://www.datocms-assets.com/19671/1586375539-step2-v2.png?auto=format&amp;dpr=0.92&amp;w=1752 1600w,
https://www.datocms-assets.com/19671/1586375539-step2-v2.png?auto=format&amp;dpr=1&amp;w=1752 1752w"
        src="https://www.datocms-assets.com/19671/1586375539-step2-v2.png?auto=format"
        loading="lazy"
        className={`${styles.pic}  `}
      />
    </picture>
  );
};

export default Picture;
