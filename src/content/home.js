import chiropractic from '@/public/chiropractic.jpg';
import decompression from '@/public/decompression.jpg';
import doctorImage from '@/public/dr-bradley.png';
import exercise from '@/public/exercise.jpg';
import heroImage from '@/public/front-office-angled.png';
import nutrition from '@/public/nutrition.jpg';
import teamImage from '@/public/adjustment-room.png';

const content = {
  seoTitle: 'Bradley Chiropractic Nutrition Center | Bakersfield Chiropractor',
  seoDescription: 'Dr. Bradley provides the best chiropractic care possible by using a holistic approach to chiropractic medicine, including spinal decompression, exercise, and nutrition.',

  hero: {
    heroImage,
    headline: <>Bakersfield&rsquo;s <br className="d-none d-md-inline"/>Best Chiropractor</>,
    caption: `Bradley Chiropractic Nutrition Center has made a name for itself by helping thousands of patients get out of pain. With a doctor and staff who authentically care about your well-being, we look forward to helping you.`,
  },

  reviews: [
    {
      platform: 'Google',
      rating: 4.8,
      count: 64,
      content: 'Dr. Bradley is the best. Been a customer since 2005.',
      link: 'https://www.google.com/search?q=Bradley+Chiropractic+Nutrition+Center#lrd=0x80ea41fb17940b95:0x7614d0f869b529c4,1,,,',
    },
    {
      platform: 'Demandforce',
      rating: 5,
      count: 44,
      content: 'Dr. Bradley has always helped me with my back issues. I highly recommend him!',
      link: 'https://local.demandforce.com/b/abetterbacksolution',
    },
    {
      platform: 'Facebook',
      rating: 5,
      count: 17,
      content: 'Have to say Dr. Bradley is one of the best chiropractors ever!',
      link: 'https://www.facebook.com/DrBrendonBradley/reviews',
    },
    {
      platform: 'Yelp',
      rating: 5,
      count: 11,
      content: 'Almost two months of treatment and I can finally say that my pain is finally gone.',
      link: 'https://www.yelp.com/biz/bradley-chiropractic-nutrition-center-bakersfield',
    },
  ],

  services: {
    teamImage,
    headline: "Complete Chiropractic Care",
    caption: "We take a holistic approach to health, identifying the root cause of your symptoms and treating it with a comprehensive plan that addresses your structural, physical, and nutritional well-being.",
    cta: 'See all services',
    items: [
      {
        name: 'Chiropractic',
        icon: 'chiropractic',
        color: 'blue',
        image: chiropractic,
        href: '/services/chiropractic',
      },
      {
        name: 'Spinal Decompression',
        icon: 'spinal-decompression',
        color: 'purple',
        image: decompression,
        href: '/services/spinal-decompression',
      },
      {
        name: 'Corrective Exercise',
        icon: 'exercise',
        color: 'red',
        image: exercise,
        href: '/services/corrective-exercise',
      },
      {
        name: 'Nutrition',
        icon: 'nutrition',
        color: 'green',
        image: nutrition,
        href: '/services/nutritional-counseling',
      },
    ],
  },

  doctor: {
    doctorImage,
    headline: 'An Experienced Doctor',
    caption: 'With over 20 years of experience, Dr. Bradley has helped thousands of patients get out of pain.',
    cta: 'About Dr. Bradley',
    quote: "I see chiropractic as a science, philosophy, and art. A science because it is the study of how the body is a system of nerves, muscles, and bones that all work in synchronization, and how misalignment in that system can affect health. A philosophy because it is the idea that putting the body in alignment allows the nervous system to work optimally, relieving pain and giving the body a proper healing environment. And an art because of the practice it takes to perfect the technique of effectively restoring alignment to the body. I am passionate about using my knowledge and skills to bring people to a higher state of health.",
    source: 'Dr. Brendon Bradley',
    testimonials: [
      'scott-manzer',
      'joe-restine',
      'scott-henderson',
    ],
    testimonialsCta: 'See all testimonials',
  },

  blog: {
    headline: 'Learn More About Health',
    cta: 'Read our articles',
    ctaLink: '/blog',
  },

  directions: {
    headline: 'Visit Our Office',
    caption: 'On your first visit, we will have a sit down consultation to create a specialized wellness plan for you.',
    cta: 'Schedule a visit',
    officeHoursHeadline: 'Office Hours',
    officeHours: <>9AM - 6PM, Monday - Thursday <br />9AM - 12PM, Friday</>,
    addressHeadline: 'Address',
    address: <>5001 Stockdale Hwy, <br/>Bakersfield, CA 93309</>,
  },

};

export default content;
