import Error from 'next/error';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import cn from 'classnames';

import { getPostBySlug, getAllPosts } from '@/lib/api';

import Markdown from '@/components/markdown';
import SubscribeForm from '@/components/subscribe-form';

import styles from '@/styles/blog.module.scss';

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <Error statusCode={404} />
  }

  const date = new Date(post.date);
  const formattedDate = date.toLocaleDateString('en-US');

  return (
    <>
      <Head>
        <title>{post.title} | BCNC Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.coverImage} />
      </Head>
      <section className="section pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className={cn('col-12', styles.contentCol)}>
              <h6>{post.category}</h6>
              <h1>{post.title}</h1>
              <p className={styles.excerpt}>{post.excerpt}</p>
            </div>
            <div className="col-12">
              <div className={styles.imageWrapper}>
                <Image
                  src={post.coverImage}
                  alt={`Cover image for: ${post.title}`}
                  layout="fill"
                />
              </div>
            </div>
            <div className={cn('col-12', styles.contentCol)}>
              <div className={styles.authorBox}>
                <div className={styles.authorImage}>
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    width={60}
                    height={60}
                  />
                </div>
                <small className={styles.author}>{post.author.name}</small>
              </div>
              <p>
                <small>{formattedDate}</small>
              </p>
              <Markdown className="content">{post.content}</Markdown>
            </div>
          </div>
        </div>
      </section>
      <SubscribeForm />
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'excerpt',
    'category',
    'date',
    'slug',
    'author',
    'content',
    'coverImage',
  ]);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  };
}
