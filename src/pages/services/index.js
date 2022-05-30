import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import Markdown from '@/components/markdown';
import IconService from '@/components/icon-service';
import SubscribeForm from '@/components/subscribe-form';

import content from '@/content/services';
import styles from '@/styles/services.module.scss';

export default function Services() {
  const { services } = content;

  const serviceElements = [];

  for (let i = 0; i < services.length; i++) {
    const service = services[i];

    const textPosition = i % 2 ? 'left' : 'right';

    const text = (
      <div className={cn('col-12 col-lg', styles.textCol)}>
        <div className="content">
          <Markdown className="content">
            {service.content}
          </Markdown>
          <Link href={service.href}>
            <a className="btn secondary mt-6">{service.cta}</a>
          </Link>
        </div>
      </div>
    );

    const image = (
      <div className={cn('col-12 col-lg', styles.imageCol)}>
        <div className={styles.imageWrapper}>
          <Image
            src={service.image}
            alt="Bradley Chiropractic Team"
            layout="fill"
          />
        </div>
      </div>
    );

    serviceElements.push(
      <div className={cn('col-12', styles.serviceCol)}>
        <div className="row gy-12">
          {textPosition === 'left' ? text : image}
          <div className={cn('col-12 col-lg-2', styles.middleCol)}>
            <IconService className={service.color} type={service.icon} />
            <span className={styles.serviceName}>{service.name}</span>
          </div>
          {textPosition === 'right' ? text : image}
        </div>
      </div>
    );
  }

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
            <div className="col-12 col-lg-8 mb-12">
              <div className="content text-left text-lg-center">
                <h6>{content.brow}</h6>
                <h1>{content.title}</h1>
                <p className="intro">{content.intro}</p>
              </div>
            </div>
            {serviceElements}
          </div>
        </div>
      </section>
      <SubscribeForm />
    </>
  );
}
