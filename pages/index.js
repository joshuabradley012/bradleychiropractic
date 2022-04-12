import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import Icon from '../components/icon';
import IconLink from '../components/icon-link';
import SubscribeForm from '../components/subscribe-form';

import styles from '../styles/home.module.scss';

import heroImage from '../public/front-office-angled.png';
import team from '../public/adjustment-room.png';
import chiropractic from '../public/placeholder.png';
import decompression from '../public/placeholder.png';
import exercise from '../public/placeholder.png';
import massage from '../public/placeholder.png';
import nutrition from '../public/placeholder.png';
import doctorImage from '../public/dr-bradley.png';
import post1 from '../public/stemcell.png';
import post2 from '../public/letting-go.png';
import post3 from '../public/movement.png';

const hero = {
  headline: <>Bakersfield&rsquo;s <br className="d-none d-md-inline"/>Best Chiropractor</>,
  caption: `Bradley Chiropractic Nutrition Center has made a name for itself by helping thousands of patients get out of pain. With a doctor and staff who authentically care about your well-being, we look forward to helping you.`,
};

const directions = {
  headline: 'Visit Our Office',
  caption: 'On your first visit, we will have a sit down consultation to create a specialized wellness plan for you.',
  cta: 'Learn more',
  officeHoursHeadline: 'Office Hours',
  officeHours: <>9AM - 6PM, Monday - Thursday <br />9AM - 12PM, Friday</>,
  addressHeadline: 'Address',
  address: <>5001 Stockdale Hwy, <br/>Bakersfield, CA 93309</>,
};

const services = {
  headline: "Our Approach to Chiropractic Care",
  caption: "We take a holistic approach to health. We identify the root cause of your symptoms and treat it with a comprehensive plan that addresses your physical, nutritional, and emotional wellbeing.",
  cta: 'See all services',
  items: [
    {
      name: 'Chiropractic',
      image: chiropractic,
      href: '/services/chiropractic',
    },
    {
      name: 'Spinal Decompression',
      image: decompression,
      href: '/services/spinal-decompression',
    },
    {
      name: 'Corrective Exercise',
      image: exercise,
      href: '/services/corrective-exercise',
    },
    {
      name: 'Nutrition',
      image: nutrition,
      href: '/services/nutrition',
    },
  ],
};

const doctor = {
  headline: 'Meet the Doctor',
  caption: 'With over 20 years of experience, Dr. Bradley has helped thousands of patients get out of pain.',
  cta: 'About Dr. Bradley',
  quote: "I see chiropractic as a science, philosophy, and art. A science because it is the study of how the body is a system of nerves, muscles, and bones that all work in synchronization, and how misalignments in that system can affect health. A philosophy because it is the idea that putting the body in alignment allows the nervous system to work optimally, relieving pain and giving the body a proper healing environment. And an art because of the practice it takes to perfect the technique of effectively restoring alignment to the body. I am passionate about using my knowledge and skills to bring people to a higher state of health.",
  source: 'Dr. Brendon Bradley',
  testimonials: [
    {
      quote: "After seeing Dr. Bradley I am now living a normal life and having fun, something I never thought I'd be able to say again. All thanks to the care I received by Dr. Bradley and his staff.",
      source: 'John Doe',
    },
    {
      quote: "The back pain I had suffered from my whole life became severe. I was told the only thing that would help was surgery. I tried several other chiropractors and still did not receive any relief. Now, after only fifteen treatments on spinal decompression, I am pain free!",
      source: 'Jane Doe',
    },
    {
      quote: "I have better mobility and the pain I was feeling in my back everyday is almost completely gone! I now have a much brighter future.",
      source: 'Joe Schmo',
    },
  ],
  testimonialsCta: 'See all testimonials',
};

const blog = {
  headline: 'Learn More About Health',
  cta: 'Read our articles',
  posts: [
    {
      title: 'Stem Cells: Should you believe the hype?',
      description: 'Is it possible you are paying for dead stem cells?',
      href: '/blog/stem-cells-should-you-believe-the-hype',
      image: post1,
    },
    {
      title: 'Letting Go',
      description: 'How can letting go help a sports injury heal?',
      href: '/blog/letting-go',
      image: post2,
    },
    {
      title: 'Movement is Life, Life is Movement',
      description: 'Learn how to improve your overall health through better movement.',
      href: '/blog/movement-is-life-life-is-movement',
      image: post3,
    },
  ],
};

export default function Home() {
  return (
    <>
      <section className="section">
        <div className="bg-image">
          <Image
            src={heroImage}
            alt="Bradley Chiropractic Hero Image"
            layout="fill"
          />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className={cn('content', styles.hero)}>
                <h1 className={styles.title}>{hero.headline}</h1>
                <p className={styles.caption}>{hero.caption}</p>
                <div className={styles.cta}>
                  <Link href="/contact">
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
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className={cn('col-12 col-lg-5 d-flex', styles.mapContentCol)}>
              <div className={styles.mapContent}>
                <div className={cn('content', styles.mapContentInner)}>
                  <h2>{directions.headline}</h2>
                  <p>{directions.caption}</p>
                  <h3>{directions.officeHoursHeadline}</h3>
                  <p>{directions.officeHours}</p>
                  <h3>{directions.addressHeadline}</h3>
                  <p>{directions.address}</p>
                </div>
                <div className={styles.mapCta}>
                  <Link href="/contact">
                    <a className="btn secondary">{directions.cta}</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={cn('col-12 col-lg-7', styles.mapCol)}>
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
          </div>
        </div>
      </section>
      <section className="section gray">
        <div className="container">
          <div className="row justify-content-center gy-8">
            <div className={cn('col-12 col-lg-8 content text-left text-lg-center', styles.servicesIntro)}>
              <div className={styles.teamImageWrapper}>
                <Image
                  src={team}
                  alt="Bradley Chiropractic Team"
                  className={styles.teamImage}
                  layout="fill"
                />
              </div>
              <h2>{services.headline}</h2>
              <p>{services.caption}</p>
              <IconLink
                className="btn icon"
                href="/services"
                layout="right"
                type="arrow"
              >
                {services.cta}
              </IconLink>
            </div>
            <div className="col-12">
              <div className="row gy-8">
                {services.items.map(service => (
                  <div className="col-6 col-md" key={service.name}>
                    <Link href={service.href}>
                      <a className={styles.service}>
                        <span className={styles.serviceImageWrapper}>
                          <Image
                            src={service.image}
                            alt={service.name}
                            layout="fill"
                          />
                        </span>
                        <span className={styles.serviceName}>{service.name}</span>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 mb-8 mb-md-16">
              <div className="content text-left text-lg-center">
                <h2>{doctor.headline}</h2>
                <p>{doctor.caption}</p>
                <IconLink
                  className="btn icon"
                  href="/about"
                  layout="right"
                  type="arrow"
                >
                  {doctor.cta}
                </IconLink>
              </div>
            </div>
            <div className="col-12 mb-12">
              <div className="row gy-8">
                <div className="col-12 col-lg-4">
                  <div className={styles.doctorImageWrapper}>
                    <Image
                      src={doctorImage}
                      alt="Portrait of Dr. Brendon Bradley"
                      layout="fill"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-8 d-flex align-items-center">
                  <div className="content">
                    <p className="quote">{doctor.quote}</p>
                    <p>{doctor.source}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-8">
            {doctor.testimonials.map((testimonial, i) => (
              <div className="col-12 col-lg-4" key={i}>
                <div className={cn('content', styles.testimonial)}>
                  <p className="quote">{testimonial.quote}</p>
                  <p>{testimonial.source}</p>
                </div>
              </div>
            ))}
            <div className="col-12">
              <div className="content text-left text-lg-center">
                <IconLink
                  className="btn icon"
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
            <div className="col-12 col-lg-8 mb-8">
              <div className="content text-left text-lg-center">
                <h2>{blog.headline}</h2>
                <IconLink
                  className="btn icon"
                  href="/blog"
                  layout="right"
                  type="arrow"
                >
                  {blog.cta}
                </IconLink>
              </div>
            </div>
          </div>
          <div className="row justify-content-center gy-8">
            {blog.posts.map(post => (
              <div className="col-12 col-lg-4" key={post.title}>
                <Link href={post.href}>
                  <a className={styles.post}>
                    <div className={styles.postImageWrapper}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        layout="fill"
                      />
                    </div>
                    <div className={cn('content', styles.postContent)}>
                      <h3>{post.title}</h3>
                      <p>{post.description}</p>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SubscribeForm />
    </>
  );
}
