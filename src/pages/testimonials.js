import Head from 'next/head';

import { getAllTestimonials } from '@/lib/api';

import TestimonialMasonry from '@/components/testimonial-masonry';

import content from '@/content/testimonials';

export default function Testimonials({ testimonials }) {
  return (
    <>
      <Head>
        <title>{content.seoTitle}</title>
        <meta name="description" content={content.seoDescription} />
        <meta property="og:description" content={content.seoDescription} />
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
