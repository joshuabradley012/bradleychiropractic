import cn from 'classnames';
import styles from '../styles/Navlinks.module.scss';

import ActiveLink from './active-link';

export default function Navlinks({ className }) {
  return (
    <div className={cn(styles.links, className)}>
      <ActiveLink href="/" activeClassName={styles.active}>
        <a className={styles.link}><span className={styles.linkInner}>Home</span></a>
      </ActiveLink>
      <ActiveLink href="/services" activeClassName={styles.active}>
        <a className={styles.link}><span className={styles.linkInner}>Services</span></a>
      </ActiveLink>
      <ActiveLink href="/about" activeClassName={styles.active}>
        <a className={styles.link}><span className={styles.linkInner}>About</span></a>
      </ActiveLink>
      <ActiveLink href="/blog" activeClassName={styles.active}>
        <a className={styles.link}><span className={styles.linkInner}>Blog</span></a>
      </ActiveLink>
    </div>
  );
}
