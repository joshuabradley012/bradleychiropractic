import cn from 'classnames';

import Review from '@/components/review';

export default function TestimonialCard({ content, className, platform, rating, source }) {
  return (
    <div className={cn('box gray', className)}>
      <Review
        content={content}
        platform={platform}
        rating={rating}
        source={source}
      />
    </div>
  );
}
