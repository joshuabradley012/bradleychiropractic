import Error from 'next/error';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import markdown from '@/lib/markdown';
import { getPostBySlug, getAllPosts } from '@/lib/api';

import styles from '@/styles/blog.module.scss';

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();

  console.log(post);

  if (!router.isFallback && !post?.slug) {
    return <Error statusCode={404} />
  }

  return (
    <section className="section pt-0">
      <Head>
        <title>{post.title} | BCNC Blog</title>
        <meta property="og:image" content={post.ogImage.url} />
      </Head>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="image-wrapper">
              <Image
                src={post.coverImage}
                width={1272}
                height={715}
              />
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="content" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])

  const content = await markdown(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
