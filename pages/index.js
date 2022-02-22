import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import Icon from '../components/icon';

import styles from '../styles/home.module.scss';
import team from '../public/placeholder.png';
import chiropractic from '../public/placeholder.png';
import decompression from '../public/placeholder.png';
import exercise from '../public/placeholder.png';
import massage from '../public/placeholder.png';
import nutrition from '../public/placeholder.png';
import doctor from '../public/placeholder.png';

const services = [
  {
    name: 'Chiropractic',
    image: chiropractic,
    link: '/services/chiropractic',
  },
  {
    name: 'Spinal Decompression',
    image: decompression,
    link: '/services/spinal-decompression',
  },
  {
    name: 'Corrective Exercise',
    image: exercise,
    link: '/services/corrective-exercise',
  },
  {
    name: 'Massage',
    image: massage,
    link: '/services/massage',
  },
  {
    name: 'Nutrition',
    image: nutrition,
    link: '/services/nutrition',
  },
];

const testimonials = [
  {
    quote: "After seeing Dr. Bradley I am now living a normal life and having fun, something I never thought I'd be able to say again. All thanks to the care I received by Dr. Bradley and his staff.",
  },
  {
    quote: "The back pain I had suffered from my whole life became severe. I was told the only thing that would help was surgery. I tried several other chiropractors and still did not receive any relief. Now, after only fifteen treatments on spinal decompression, I am pain free!",
  },
  {
    quote: "I have better mobility and the pain I was feeling in my back everyday is almost completely gone! I now have a much brighter future.",
  },
];

export default function Home() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className={styles.hero}>
                <h1 className={styles.title}>Bakersfield&rsquo;s <br className="d-none d-md-inline"/>Best Chiropractor</h1>
                <p className={styles.caption}>Bradley Chiropractic Nutrition Center has made a name for itself by helping thousands of patients get out of pain. With a doctor and staff who authentically care about your well-being, we look forward to helping you down the road towards better health.</p>
                <div className={styles.cta}>
                  <Link href="/contact">
                    <a className="btn">Schedule</a>
                  </Link>
                  <a className={styles.phone} href="tel:+16616176160"><Icon type="phone" className={styles.icon} />(661) 617-6160</a>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className={styles.map}>
                <div className={styles.mapInner}>
                  <div className={styles.mapLeft}>
                    <div className="content">
                      <h2>Visit Our Office</h2>
                      <p>On your first visit, there will be a full evaluation and sit down consultation so we can work with you to create a specialized wellness plan.</p>
                      <h4>Office Hours</h4>
                      <p>9AM - 6PM, Monday - Friday</p>
                      <h4>Address</h4>
                      <p>5001 Stockdale Hwy,<br/>Bakersfield, CA 93309</p>
                    </div>
                    <div className={styles.mapCta}>
                      <Link href="/contact">
                        <a className="btn secondary">Get Directions</a>
                      </Link>
                    </div>
                  </div>
                  <div className={styles.mapRight}>
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
        </div>
      </section>
      <section className="section gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className={cn('col-8 content text-center', styles.servicesIntro)}>
              <Image
                src={team}
                alt="Bradley Chiropractic Team"
                className={styles.teamImage}
              />
              <h2>Our Approach to Chiropractic</h2>
              <p>We take a holistic approach to health. We identify the root cause of your symptoms and treat it with a comprehensive plan that addresses your physical, nutritional, and emotional wellbeing.</p>
            </div>
            <div className="col-12">
              <div className="row">
                {services.map(service => (
                  <div className="col" key={service.name}>
                    <Link href={service.link}>
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
          <div className="row">
            <div className="col-12">
              <div className={styles.doctor}>
                <div className={styles.doctorLeft}>
                  <div className={styles.doctorImageWrapper}>
                    <Image
                      src={doctor}
                      alt="Portrait of Dr. Brendon Bradley"
                      layout="fill"
                    />
                  </div>
                </div>
                <div className={styles.doctorRight}>
                  <div className="content">
                    <p className="quote">I see chiropractic as a science, philosophy, and art. A science because it is the study of how the body is a system of nerves, muscles, and bones that all work in synchronization, and how misalignments in that system can affect health. A philosophy because it is the idea that putting the body in alignment allows the nervous system to work optimally, relieving pain and giving the body a proper healing environment. And an art because of the practice it takes to perfect the technique of effectively restoring alignment to the body. I am passionate about using my knowledge and skills to bring people to a higher state of health.</p>
                    <p>Dr. Brendon Bradley</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {testimonials.map((testimonial, i) => (
              <div className="col-4" key={i}>
                <div className={cn('quote', styles.testimonial)}>{testimonial.quote}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section gray">
      </section>
      <section className="section blue">
      </section>
    </>
  );
}
