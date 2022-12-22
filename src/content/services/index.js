import chiropractic from '@/public/chiropractic.jpg';
import decompression from '@/public/decompression.jpg';
import exercise from '@/public/exercise.jpg';
import nutrition from '@/public/nutrition.jpg';

const content = {
  seoTitle: 'Chiropractic Treatments at Bradley Chiropractic Nutrition Center',
  seoDescription: 'Complete chiropracitc care to improve your health through natural, holistic methods that prevents disease and improves your overall quality of life.',
  brow: 'Services',
  title: 'We use a complete, holistic approach to chiropractic care.',
  intro: 'At Bradley Chiropractic Nutrition Center we provide the highest quality care. Our treatments use a diverse range of cutting-edge technologies and techniques to help you achieve better health.',

  services: [
    {
      name: 'Chiropractic',
      icon: 'chiropractic',
      color: 'blue',
      image: chiropractic,
      cta: 'Learn more',
      href: '/services/chiropractic',
      content: `
## Restore alignment with chiropractic adjustments.

Chiropractic realigns the skeletal system to enable the optimal function of muscles and nerves. Proper alignment reduces pressure on compressed nerves which alleviates pain, reduces symptoms, and enhances healing.
      `,
    },
    {
      name: 'Spinal Decompression',
      icon: 'spinal-decompression',
      color: 'purple',
      image: decompression,
      cta: 'Learn more',
      href: '/services/spinal-decompression',
      content: `
## Effectively heal herinated discs without surgery.

The DRX-9000 is a state of the art decompression table which gently pulls the spine, allowing the disc to restore a healthy shape. This is one of the only effective, surgery-free treatments for herniated discs with an 80% success rate.
      `,
    },
    {
      name: 'Corrective Exercise',
      icon: 'exercise',
      color: 'red',
      image: exercise,
      cta: 'Learn more',
      href: '/services/corrective-exercise',
      content: `
## Strengthen your posture using corrective exercise.

Through daily routines, many people develop weaknesses which lead to poor posture and pain. Corrective exercise retrains your body to hold a healthy, pain-free posture which strengthens the realigment of chiropractic adjustments.
      `,
    },
    {
      name: 'Nutrition',
      icon: 'nutrition',
      color: 'green',
      image: nutrition,
      cta: 'Learn more',
      href: '/services/nutritional-counseling',
      content: `
## Create a nutritional program for your needs.

We've partnered with Science Based Nutrition to provide in-depth tests to find and correct nutitional defficiences. This is effective for relieving many chronic illnesses, and providing your body the nutritients it needs for optimal health.
      `,
    },
  ],
};

export default content;
