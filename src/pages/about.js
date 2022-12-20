import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import Markdown from '@/components/markdown';
import SubscribeForm from '@/components/subscribe-form';

import styles from '@/styles/about.module.scss';

import content from '@/content/about';

export default function About() {
  return (
    <>
      <Head>
        <title>{content.seoTitle}</title>
        <meta name="description" content={content.seoDescription} />
        <meta property="og:description" content={content.seoDescription} />
      </Head>
      <section className="section">
        <div className="container">
          <div className="row gy-12 justify-content-center">
            <div className="col-12 content-col content">
              <h6>{content.brow}</h6>
              <h1 className="mb-0">{content.title}</h1>
            </div>
            <div className="col-12">
              <div className={styles.videoWrapper}>
                <iframe
                  src={content.video}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                ></iframe>
              </div>
            </div>
            <div className="col-12 content-col">
              <Markdown className="content">
                {content.text}
              </Markdown>
              <div className="mt-12">
                <Link href="/schedule">
                  <a className="btn">{content.cta}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SubscribeForm />
    </>
  );
}
