import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import Markdown from '@/components/markdown';
import Icon from '@/components/icon';
import Stars from '@/components/stars';

import styles from '@/styles/testimonial-card.module.scss';

export default function TestimonialCard({ content, className, platform, rating, source }) {
  const platformTypes = {
    'Google': 'google',
    'Yelp': 'yelp',
    'Facebook': 'facebook',
    'Testimonial': 'file-pen',
    'Demandforce': 'file-pen',
  };

  const platformType = platformTypes[platform];

  return (
    <div className={cn(styles.testimonial, className)}>
      {(platform || rating) && (
        <div className={styles.review}>
          {platformType ? (
            <Icon className={styles.logo} type={platformType} />
          ) : (
            <div className={styles.logoText}>{platform}</div>
          )}
          {rating && <Stars count={rating} />}
        </div>
      )}
      <blockquote className="m-0">
        <Markdown className="content">{content}</Markdown>
        <cite>{source}</cite>
      </blockquote>
    </div>
  );
}
