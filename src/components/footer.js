import Link from 'next/link';
import cn from 'classnames';

import Social from './social';

import styles from '@/styles/footer.module.scss';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <div className={styles.bottomBar}>
        <div className={cn('container', styles.bottomBarContainer)}>
          <div className={styles.bottomBarLinks}>
            <span className={styles.copyright}>&copy; {year} Bradley Chiropractic Nutrition Center</span>
            <Link href="/privacy">
              <a>Privacy Policy</a>
            </Link>
            <Link href="/terms">
              <a>Terms of Service</a>
            </Link>
          </div>
          <Social className={styles.bottomBarSocial} />
        </div>
      </div>
    </footer>
  );
}
