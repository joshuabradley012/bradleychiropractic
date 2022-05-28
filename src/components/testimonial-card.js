import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import Markdown from '@/components/markdown';

import styles from '@/styles/testimonial-card.module.scss';

export default function TestimonialCard({ content, className, source }) {
  return (
    <div className={cn('content', styles.testimonial, className)}>
      <blockquote>
        <Markdown className="content">{content}</Markdown>
        <cite>{source}</cite>
      </blockquote>
    </div>
  );
}
