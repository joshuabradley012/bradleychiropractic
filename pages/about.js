import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import SubscribeForm from '../components/subscribe-form';

import styles from '../styles/about.module.scss';

const content = {
  headline: 'About Dr. Bradley',
  paragraphs: [
    'Dr. Bradley has been a practicing chiropractor for the past 20 years, the last 19 of those were spent here in Bakersfield, CA. He attended the University of San Diego for his undergraduate degree and then went on to Southern California University of Health Sciences completing his Doctorate of Chiropractic in 1995.',
    'With a passion for health, Dr. Bradley has spent many hours expanding his knowledge beyond his education. Using what he learns he helps people achieve a higher level of health through chiropractic, exercise, diet, and nutrition.',
    'As part of his self-education, Dr. Bradley has earned several certifications to master what he learns. He is a C.H.E.K Exercise Coach, a functional diagnostic nutritionist (FDN), and is partnered with Science Based Nutrition.',
    'As a C.H.E.K Exercise coach, Dr. Bradley has an extensive knowledge of rehabilitative exercises and how to correctly train someone to perform them. This certification has also broadened his overall knowledge of holistic health as there is a heavy focus on the nutritional and mental/emotional aspects of health. Every part of your being must be considered when looking to improve your health.',
    "Science Based Nutrition is a company that uses samples and laboratory testing to create a targeted nutritional plan to serve each patient's unique needs. The laboratory testing takes blood samples (and whatever other necessary samples) to analyze the nutritional content and breakdown the information into an actionable report. The report is full of indicators for possible health complications that can arise, diet tips on how to eat better for your specific needs, and a list of supplements you can take to actively improve your most troubled areas.",
    'These skills, in combination with chiropractic, make it possible for Dr. Bradley to fully treat each patient. He can get you on the road to better health where you are vibrant, pain free, and able to live your dream.',
  ],
};

export default function About() {
  return (
    <>
      <section className="section gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className={styles.videoWrapper}>
                <iframe
                  src="https://www.youtube.com/embed/MT5TtVhd568?controls=0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                ></iframe>
              </div>
            </div>
            <div className="col-8">
              <h1 className="text-center">{content.headline}</h1>
              {content.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
            </div>
          </div>
        </div>
      </section>
      <SubscribeForm />
    </>
  );
}
