import TestimonialCard from '@/components/testimonial-card';

export default function TestimonialCards({ content }) {
  return (
    <div className="row gy-8">
      {content.map(testimonial => (
        <div className="col-12 col-lg-4" key={testimonial.slug}>
          <TestimonialCard {...testimonial} />
        </div>
      ))}
    </div>
  );
}