import { getAllPosts } from '@/lib/api';

import BlogCards from '@/components/blog-cards';

export default function Blog({ posts }) {
  return (
    <section className="section gray">
      <div className="container">
        <BlogCards content={posts} />
      </div>
    </section>
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
