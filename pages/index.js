import cn from 'classnames';
import Link from 'next/link';

import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.hero}>
          <h1 className={styles.title}>Bakersfield&rsquo;s <br className="d-none d-md-inline"/>Best Chiropractor</h1>
          <p className={styles.caption}>Bradley Chiropractic Nutrition Center has made a name for itself by helping thousands of patients get out of pain. With a doctor and staff who authentically care about your well-being, we look forward to meeting you. Call today to start on the road towards better health.</p>
          <div className={styles.cta}>
            <Link href="/contact">
              <a className="btn">Schedule Now</a>
            </Link>
            <a className={styles.phone} href="tel:+16616176160">(661) 617-6160</a>
          </div>
        </div>
      </div>
    </section>
  );
}
