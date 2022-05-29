import cn from 'classnames';

import useBreakpoint from '@/hooks/useBreakpoint';

import TestimonialCard from '@/components/testimonial-card';

import styles from '@/styles/testimonial-masonry.module.scss';

export default function TestimoniaMasonry({ content }) {
  const breakpoint = useBreakpoint();

  let columns = [[]];
  if (breakpoint === 'lg' || breakpoint === 'xl' || breakpoint === 'xxl') {
    columns = [[], [], []];
  }

  if (breakpoint === 'md') {
    columns = [[], []];
  }

  const columnCount = columns.length;

  for (let i = 0; i < content.length; i++) {
    const testimonial = content[i];
    const index = i % columnCount;
    columns[index].push(testimonial);
  }

  const colSize = 12 / columnCount;
  const colClass = `col-${colSize}`;

  return (
    <div className="row">
      {columns.map((column, i) => (
        <div className={cn(colClass, styles.masonryCol)} key={i}>
          {column.map(testimonial => (
            <TestimonialCard className="mb-8" key={testimonial.slug} {...testimonial} />
          ))}
        </div>
      ))}
    </div>
  );
}
