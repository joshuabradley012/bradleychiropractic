import cn from 'classnames';

import Markdown from '@/components/markdown';
import Icon from '@/components/icon';
import Stars from '@/components/stars';

import styles from '@/styles/review.module.scss';

export default function Review({ content, count, link, platform, rating, source }) {
  const platformTypes = {
    'Google': 'google',
    'Yelp': 'yelp',
    'Facebook': 'facebook',
    'Testimonial': 'file-pen',
  };

  const platformType = platformTypes[platform];
  const inner = (
    <>
      {(platform || rating) && (
        <div className={styles.review}>
          {platformType ? (
            <Icon className={styles.logo} type={platformType} />
          ) : (
            <div className={styles.logoText}>{platform}</div>
          )}
          <div className="d-flex">
            {rating && <Stars count={rating} />}
            {count && <small className="ml-3">{`(${count})`}</small>}
          </div>
        </div>
      )}
      {(content || source) && (
        <blockquote className="m-0">
          {content && <Markdown className="content">{content}</Markdown>}
          {source && <cite>{source}</cite>}
        </blockquote>
      )}
    </>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noreferrer" className={styles.reviewWrapper}>
        {inner}
      </a>
    );
  }

  return (
    <div className={styles.reviewWrapper}>
      {inner}
    </div>
  );
}
