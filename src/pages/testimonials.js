import Head from 'next/head';

import { getAllTestimonials } from '@/lib/api';

import TestimonialMasonry from '@/components/testimonial-masonry';

const content = {
  brow: 'Testimonials',
  title: 'What our patients have to say.',
};

export default function Testimonials({ testimonials }) {
  return (
    <>
      <Head>
        <title>Testimonials for Bradley Chiropractic Nutrition Center</title>
        <meta name="description" content="Bradley Chiropractic Nutrition Center has helped people get out of pain for over 20 years. Here is what our patients have to say." />
        <meta property="og:description" content="Bradley Chiropractic Nutrition Center has helped people get out of pain for over 20 years. Here is what our patients have to say." />
      </Head>
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 mb-12">
              <div className="content text-left text-lg-center">
                <h6>{content.brow}</h6>
                <h1>{content.title}</h1>
              </div>
            </div>
          </div>
          <TestimonialMasonry content={testimonials} />
        </div>
      </section>
    </>
  );
}

export async function getStaticProps(context) {
  const testimonials = getAllTestimonials([
    'slug',
    'content',
    'source',
  ]);

  return {
    props: {
      testimonials,
    }
  };
}
