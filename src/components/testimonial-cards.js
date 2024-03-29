import TestimonialCard from '@/components/testimonial-card';

export default function TestimonialCards({ content }) {
  return (
    <div className="row gy-12">
      {content.map(testimonial => (
        <div className="col-12 col-lg-6 col-xl-4" key={testimonial.slug}>
          <TestimonialCard {...testimonial} />
        </div>
      ))}
    </div>
  );
}
