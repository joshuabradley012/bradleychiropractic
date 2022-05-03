import Head from 'next/head';

import { getAllPosts } from '@/lib/api';

import BlogCards from '@/components/blog-cards';

const content = {
  brow: 'Health Blog',
  title: 'Eat, Exercise, and Be Healthy',
};

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Health Blog by Bradley Chiropractic Nutrition Center</title>
        <meta name="description" content="Our blog is focused on guiding average people to elite health. Read more on how to build a healthy mind, body, and soul." />
        <meta property="og:description" content="Our blog is focused on guiding average people to elite health. Read more on how to build a healthy mind, body, and soul." />
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
      posts: posts,
    }
  };
}
