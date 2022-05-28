import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import styles from '@/styles/blog-card.module.scss';

export default function BlogCard({ title, excerpt, slug, coverImage }) {
  return (
    <Link href={`/blog/${slug}`}>
      <a className={styles.post}>
        <div className={styles.postImageWrapper}>
          <Image
            src={coverImage}
            alt={`Featured image for: ${title}`}
            layout="fill"
          />
        </div>
        <div className={cn('content', styles.postContent)}>
          <h3>{title}</h3>
          <p>{excerpt}</p>
        </div>
      </a>
    </Link>
  );
}
