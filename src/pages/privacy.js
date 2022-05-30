import Head from 'next/head';

import Markdown from '@/components/markdown';

import content from '@/content/privacy';

export default function Privacy() {
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
            <div className="col-12 content-col">
              <Markdown className="content">
                {content.text}
              </Markdown>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
