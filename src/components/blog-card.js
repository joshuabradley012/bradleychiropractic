import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import styles from '@/styles/blog-card.module.scss';

export default function BlogCard({ category, coverImage, excerpt, slug, title }) {
  return (
    <Link href={`/blog/${slug}`}>
      <a className={styles.post}>
        <div className={styles.postImageWrapper}>
          <Image
            src={coverImage}
            alt={`Featured image for: ${title}`}
            layout="fill"
          />
          <span className={styles.category}>{category}</span>
        </div>
        <div className={cn('content', styles.postContent)}>
          <h3>{title}</h3>
          <p>{excerpt}</p>
        </div>
      </a>
    </Link>
  );
}
