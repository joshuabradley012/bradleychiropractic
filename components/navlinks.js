import cn from 'classnames';
import styles from '../styles/navlinks.module.scss';

import ActiveLink from './active-link';

export default function Navlinks({ className, handleClick }) {
  const links = [
    {
      href: '/',
      name: 'Home',
    },
    {
      href: '/services',
      name: 'Services',
    },
    {
      href: 'about',
      name: 'About',
    },
    {
      href: '/blog',
      name: 'Blog',
    },
  ];

  return (
    <div className={cn(styles.links, className)}>
      {links.map(link => (
        <ActiveLink href={link.href} activeClassName={styles.active}>
          <a className={styles.link} onClick={handleClick}><span className={styles.linkInner}>{link.name}</span></a>
        </ActiveLink>
      ))}
    </div>
  );
}
