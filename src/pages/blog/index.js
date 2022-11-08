import Head from 'next/head';

import { getAllPosts } from '@/lib/api';

import BlogCards from '@/components/blog-cards';
import SubscribeForm from '@/components/subscribe-form';

import content from '@/content/blog';

export default function Blog({ posts }) {
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
            <div className="col-12 col-md-8 mb-12">
              <div className="content text-left text-lg-center">
                <h6>{content.brow}</h6>
                <h1>{content.title}</h1>
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
  const posts = getAllPosts([
    'title',
    'excerpt',
    'category',
    'slug',
    'coverImage',
  ]);

  return {
    props: {
      posts,
    }
  };
}
