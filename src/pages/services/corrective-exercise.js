import Head from 'next/head';
import cn from 'classnames';

import {
  getPostsByCategory,
  getTestimonialsBySlugs,
} from '@/lib/api';

import Benefits from '@/components/benefits';
import BlogCards from '@/components/blog-cards';
import Markdown from '@/components/markdown';
import SplitHero from '@/components/split-hero';
import SubscribeForm from '@/components/subscribe-form';
import TestimonialMasonry from '@/components/testimonial-masonry';

import content from '@/content/services/exercise';

export default function CorrectiveExercise({ posts, testimonials }) {
  const {
    hero,
    benefits,
    about,
    postsSection,
  } = content;

  return (
    <>
      <Head>
        <title>{content.seoTitle}</title>
        <meta name="description" content={content.seoDescription} />
        <meta property="og:description" content={content.seoDescription} />
      </Head>
      <SplitHero content={hero} />
      <section className="section">
        <div className="container">
          <TestimonialMasonry content={testimonials} />
        </div>
      </section>
      <Benefits content={benefits} />
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 content-col">
              <div className="content box gray">
                <h2 className="mb-12">{about.title}</h2>
                <Markdown className="content">
                  {about.content}
                </Markdown>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section gray">
        <div className="container">
          <div className="row justify-content-center mb-12">
            <div className="col-12 col-lg-8">
              <div className="content text-left text-lg-center">
                <h2>{content.postsSection.title}</h2>
              </div>
            </div>
          </div>
          <BlogCards content={posts} />
        </div>
      </section>
      <SubscribeForm />
    </>
  );
}

export async function getStaticProps(context) {
  const posts = getPostsByCategory(content.postsSection.category, [
    'title',
    'excerpt',
    'category',
    'slug',
    'coverImage',
  ], 3);

  const testimonials = getTestimonialsBySlugs(content.testimonials, [
    'content',
    'platform',
    'rating',
    'slug',
    'source',
  ]);

  return {
    props: {
      posts,
      testimonials,
    }
  };
}
