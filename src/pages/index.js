import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import { getAllPosts, getTestimonialBySlug } from '@/lib/api';
import useScript from '@/hooks/useScript';

import Icon from '@/components/icon';
import IconLink from '@/components/icon-link';
import IconService from '@/components/icon-service';
import Review from '@/components/review';
import SubscribeForm from '@/components/subscribe-form';
import BlogCards from '@/components/blog-cards';
import TestimonialMasonry from '@/components/testimonial-masonry';

import content from '@/content/home';
import styles from '@/styles/home.module.scss';

export default function Home({ posts, testimonials }) {
  const {
    hero,
    directions,
    reviews,
    services,
    doctor,
    blog,
  } = content;

  return (
    <>
      <Head>
        <title>{content.seoTitle}</title>
        <meta name="description" content={content.seoDescription} />
        <meta property="og:description" content={content.seoDescription} />
      </Head>
      <section className="section">
        <div className="bg-image">
          <Image
            src={hero.heroImage}
            alt="Bradley Chiropractic Hero Image"
            layout="fill"
            priority={true}
          />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="content">
                <h1 className={styles.title}>{hero.headline}</h1>
                <p className={styles.caption}>{hero.caption}</p>
                <div className={styles.cta}>
                  <Link href="/schedule">
                    <a className="btn">Schedule</a>
                  </Link>
                  <a className={cn('btn secondary', styles.phone)} href="tel:+16616176160">
                    <Icon type="phone" className={styles.icon} />(661) 617-6160
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section banner">
        <div className="container">
          <div className="row gy-12">
            {reviews.map(review => (
              <div className="col-6 col-lg-3" key={review.platform}>
                <Review {...review} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section gray">
        <div className="container">
          <div className="row justify-content-center gy-12">
            <div className={cn('col-12 content-col content text-left text-lg-center', styles.servicesIntro)}>
              <h2>{services.headline}</h2>
              <p>{services.caption}</p>
              <IconLink
                className="icon-link"
                href="/services"
                layout="right"
                type="arrow"
              >
                {services.cta}
              </IconLink>
            </div>
            <div className="col-12 col-xl-8">
              <div className="box">
                <div className="row gy-12">
                  {services.items.map(service => (
                    <div className="col-6 col-lg" key={service.name}>
                      <Link href={service.href}>
                        <a className={styles.service}>
                          <IconService className={cn('large', service.color)} type={service.icon} />
                          <span className={styles.serviceName}>{service.name}</span>
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 content-col mb-12 mb-md-12">
              <div className="content text-left text-lg-center">
                <h2>{doctor.headline}</h2>
                <p>{doctor.caption}</p>
              </div>
            </div>
            <div className="col-12 mb-12">
              <div className="row gy-6">
                <div className="col-12 col-md-4">
                  <div className={styles.doctorImageWrapper}>
                    <Image
                      src={doctor.doctorImage}
                      alt="Portrait of Dr. Brendon Bradley"
                      layout="fill"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-8 d-flex align-items-center">
                  <div className="content">
                    <blockquote>
                      {doctor.quote}
                      <cite>{doctor.source}</cite>
                    </blockquote>
                    <IconLink
                      className="icon-link"
                      href="/about"
                      layout="right"
                      type="arrow"
                    >
                      {doctor.cta}
                    </IconLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TestimonialMasonry content={testimonials} />
          <div className="row mt-12">
            <div className="col-12">
              <div className="content text-left text-lg-center">
                <IconLink
                  className="icon-link"
                  href="/testimonials"
                  layout="right"
                  type="arrow"
                >
                  {doctor.testimonialsCta}
                </IconLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 content-col mb-12">
              <div className="content text-left text-lg-center">
                <h2>{blog.headline}</h2>
                <IconLink
                  className="icon-link"
                  href={blog.ctaLink}
                  layout="right"
                  type="arrow"
                >
                  {blog.cta}
                </IconLink>
              </div>
            </div>
          </div>
          <BlogCards content={posts} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row gy-12 justify-content-center">
            <div className={cn('col-12 col-md-6', styles.imageCol)}>
              <Link href="/schedule">
                <a>
                  <div className={styles.teamImageWrapper}>
                    <Image
                      src={services.teamImage}
                      alt="Bradley Chiropractic Team"
                      className={styles.teamImage}
                      layout="fill"
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className={cn('col-12 col-md-6', styles.mapCol)}>
              <div className={styles.map}>
                <div className={styles.mapInner}>
                  <iframe
                    loading="lazy"
                    allowFullScreen={true}
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0D0k2ChjLuOipeyDacW0pZsfR708ueC4
                      &q=Bradley+Chiropractic+Nutrition+Center,Bakersfield+CA"
                  />
                </div>
              </div>
            </div>
            <div className={cn('col-12 col-md-6 d-flex', styles.copyCol)}>
              <div className={styles.copy}>
                <div className={cn('content', styles.copyInner)}>
                  <h2>{directions.headline}</h2>
                  <p>{directions.caption}</p>
                </div>
                <div className={styles.copyCta}>
                  <Link href="/schedule">
                    <a className="btn">{directions.cta}</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={cn('col-12 col-md-6 d-flex', styles.directionsCol)}>
              <div className="content">
                <h3>{directions.officeHoursHeadline}</h3>
                <p>{directions.officeHours}</p>
                <h3>{directions.addressHeadline}</h3>
                <p>{directions.address}</p>
              </div>
            </div>
          </div>
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
  ], 3);

  const testimonials = [];

  content.doctor.testimonials.forEach(slug => (
    testimonials.push(getTestimonialBySlug(slug, [
      'content',
      'platform',
      'rating',
      'slug',
      'source',
    ]))
  ));

  return {
    props: {
      posts,
      testimonials,
    }
  };
}
