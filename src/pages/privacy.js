import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

import content from '@/content/privacy';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>{content.seoTitle}</title>
        <meta name="description" content={content.seoDescription} />
        <meta property="og:description" content={content.seoDescription} />
      </Head>
      <section className="section pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <ReactMarkdown>
                {content.text}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
