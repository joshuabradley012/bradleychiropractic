import Head from 'next/head';

import { getAllPosts } from '@/lib/api';

import BlogCards from '@/components/blog-cards';

import content from '@/content/blog';

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>{content.seoTitle}</title>
        <meta name="description" content={content.seoDescription} />
        <meta property="og:description" content={content.seoDescription} />
      </Head>
      <section className="section gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 mb-12">
              <div className="content text-left text-lg-center">
                <h6>{content.brow}</h6>
                <h1>{content.title}</h1>
              </div>
            </div>
          </div>
          <BlogCards content={posts} />
        </div>
      </section>
    </>
  );
}

export async function getStaticProps(context) {
  const posts = getAllPosts([
    'title',
    'excerpt',
    'slug',
    'coverImage',
  ]);

  return {
    props: {
      posts,
    }
  };
}
